import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} - Private, Ephemeral Chat`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: SITE_URL,
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#22c55e",
    categories: ["communication", "productivity", "utilities"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
