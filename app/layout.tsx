import type { Metadata, Viewport } from "next";
import { Oswald, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, tokens } from "@/lib/site-config";
import { content } from "@/lib/content";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { QuizProvider } from "@/components/quiz/QuizProvider";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-oswald",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const cidade = tokens.CIDADE.trim();
const cidadeLabel = cidade || "sua região";

const description = `Drywall e construção a seco com padrão de arquitetura em ${cidadeLabel}. Forros, sancas, divisórias e acabamentos para projetos residenciais e corporativos, no prazo combinado.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Drywall e Construção a Seco`,
    template: `%s · ${siteConfig.name}`,
  },
  description,
  keywords: [
    "drywall",
    "construção a seco",
    "forros",
    "sancas",
    "divisórias",
    "acabamentos",
    "reformas",
    `drywall ${cidadeLabel}`,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  applicationName: siteConfig.name,
  category: "construction",
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Drywall e Construção a Seco`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Drywall e Construção a Seco`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2a5c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}#business`,
      name: siteConfig.name,
      description,
      url: siteConfig.url,
      ...(cidade
        ? { areaServed: cidade, address: { "@type": "PostalAddress", addressLocality: cidade } }
        : {}),
      ...(tokens.WHATSAPP.trim()
        ? { telephone: `+${tokens.WHATSAPP.replace(/\D/g, "")}` }
        : {}),
      knowsAbout: [
        "Drywall",
        "Construção a seco",
        "Forros",
        "Sancas",
        "Revestimentos",
        "Acabamentos",
        "Reformas",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${oswald.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <QuizProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </QuizProvider>
      </body>
    </html>
  );
}
