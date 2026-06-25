import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Drywall e Construção a Seco`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG estático e branded (apenas flexbox — restrição do ImageResponse).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 75% 15%, #163e7a 0%, #0d3e85 40%, #0b2a5c 75%, #081f47 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <path d="M6 11 L23 7 V41 L6 37 Z" fill="#ffffff" />
            <path d="M25 7 L42 11 V37 L25 41 Z" fill="#ffffff" opacity="0.4" />
            <rect x="23.2" y="7" width="1.6" height="34" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Fortunato
            </span>
            <span
              style={{
                fontSize: "15px",
                letterSpacing: "8px",
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
              }}
            >
              Decorações
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "6px",
              color: "#6ea3e6",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Drywall · Construção a Seco
          </span>
          <span
            style={{
              fontSize: "66px",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Transformamos espaços em ambientes que valorizam o seu imóvel.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
