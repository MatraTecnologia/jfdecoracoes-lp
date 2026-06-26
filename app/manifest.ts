import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/** Web manifest (PWA + sinais de SEO/mobile). */
const manifest = (): MetadataRoute.Manifest => ({
  name: `${siteConfig.name} — Drywall e Construção a Seco`,
  short_name: siteConfig.shortName,
  description: siteConfig.tagline,
  start_url: "/",
  display: "standalone",
  background_color: "#081f47",
  theme_color: "#0b2a5c",
  icons: [
    { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
  ],
});

export default manifest;
