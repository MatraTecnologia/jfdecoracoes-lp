"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { nav, whatsappLink } from "@/lib/site-config";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Header sticky: transparente sobre o hero, vira sólido (branco + hairline)
 * ao rolar. Menu mobile em overlay.
 */
export const Header = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const tone = solid || open ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "border-b border-line bg-white/95 backdrop-blur-sm"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-18 items-center justify-between py-4">
        <a href="#top" aria-label="Fortunato Decorações — início">
          <BrandMark tone={tone} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-button group relative uppercase transition-colors",
                solid ? "text-ink hover:text-brand" : "text-white/90 hover:text-white",
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLink()} variant="primary" size="md">
            {content.hero.ctaPrimary}
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-7 text-ink" strokeWidth={1.5} />
          ) : (
            <Menu
              className={cn("size-7", solid ? "text-ink" : "text-white")}
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>

      {/* Overlay mobile */}
      {open && (
        <div className="fixed inset-0 top-18 z-40 bg-white lg:hidden">
          <nav
            aria-label="Principal (mobile)"
            className="shell flex flex-col gap-2 py-8"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-h3 border-b border-line py-4 text-ink"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={whatsappLink()}
              variant="primary"
              size="lg"
              className="mt-6 w-full"
            >
              {content.hero.ctaPrimary}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
