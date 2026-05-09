import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Private Room | ${SITE_NAME}`,
  description:
    "A temporary private chat room. This page is excluded from search indexing.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      nocache: true,
    },
  },
};

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
