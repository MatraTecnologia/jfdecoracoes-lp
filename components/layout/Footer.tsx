import { MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { nav, siteConfig, whatsappLink } from "@/lib/site-config";
import { content } from "@/lib/content";

const year = new Date().getFullYear();

/** Rodapé sobre fundo azul-900. */
export const Footer = () => (
  <footer className="bg-brand-night text-white">
    <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div className="max-w-sm">
        <BrandMark tone="light" />
        <p className="text-body-sm mt-6 text-white/65">{content.footer.blurb}</p>
        <p className="caption mt-6 text-white/45">{content.footer.region}</p>
      </div>

      <nav aria-label="Rodapé" className="flex flex-col gap-3">
        <p className="caption mb-2 text-white/40">Navegação</p>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-body-sm text-white/75 transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3">
        <p className="caption mb-2 text-white/40">Contato</p>
        <a
          href={whatsappLink()}
          className="text-body-sm inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
        >
          <MessageCircle strokeWidth={1.5} className="size-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="shell flex flex-col gap-2 py-6 text-white/45 md:flex-row md:items-center md:justify-between">
        <p className="caption">
          © {year} {siteConfig.name}
        </p>
        <p className="text-body-sm">{content.footer.rights}</p>
      </div>
    </div>
  </footer>
);
