import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = `${SITE_NAME} private self-destructing chat rooms`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#22c55e",
              display: "flex",
              fontSize: 34,
              fontWeight: 800,
              gap: 14,
              letterSpacing: 0,
            }}
          >
            <span>{">"}</span>
            <span>{SITE_NAME}</span>
          </div>
          <div
            style={{
              border: "1px solid #3f3f46",
              color: "#a1a1aa",
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              padding: "12px 18px",
            }}
          >
            10 MIN TTL
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 880,
          }}
        >
          <div
            style={{
              color: "#f4f4f5",
              display: "flex",
              fontSize: 76,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 1,
            }}
          >
            Private chat rooms that vanish after 10 minutes.
          </div>
          <div
            style={{
              color: "#a1a1aa",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 840,
            }}
          >
            {SITE_DESCRIPTION}
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid #27272a",
            color: "#71717a",
            display: "flex",
            fontSize: 24,
            justifyContent: "space-between",
            paddingTop: 24,
          }}
        >
          <span>temporary rooms</span>
          <span>self-destructing messages</span>
          <span>disposable links</span>
        </div>
      </div>
    ),
    size,
  );
}
