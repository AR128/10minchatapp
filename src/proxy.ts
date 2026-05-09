import { NextRequest, NextResponse } from "next/server";
import { redis } from "./lib/redis";
import { nanoid } from "nanoid";

export const proxy = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  const redirectTo = (url: URL) => {
    const response = NextResponse.redirect(url);
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  };

  const roomMatch = pathname.match(/^\/room\/([^/]+)$/);
  if (!roomMatch) {
    return redirectTo(new URL("/", req.url));
  }
  const roomId = roomMatch[1];

  const meta = await redis.hgetall<{ connected: string[]; createdAt: number }>(
    `meta:${roomId}`,
  );

  if (!meta) {
    return redirectTo(new URL("/?error=room-not-found", req.url));
  }

  const existingToken = req.cookies.get("x-auth-token")?.value;

  // User is allowed to join the room
  if (existingToken && meta.connected.includes(existingToken)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  //user is not allowed to join the room
  if (meta.connected.length >= 2) {
    return redirectTo(new URL("/?error=room-full", req.url));
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  const token = nanoid();

  response.cookies.set("x-auth-token", token, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  await redis.hset(`meta:${roomId}`, {
    connected: [...meta.connected, token],
  });

  return response;
};

export const config = {
  matcher: "/room/:path*",
};
