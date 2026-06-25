"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SeamLine } from "@/components/ui/SeamLine";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { content } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";
import { useMounted } from "@/lib/useMounted";

/**
 * Hero 100vh. O H1 e o texto de apoio são estáticos (não dependem de motion)
 * para proteger o LCP e a legibilidade imediata na dobra. Apenas a camada de
 * fundo recebe parallax discreto (~8%), ligado só após montar para não divergir
 * do HTML do servidor (sem hydration mismatch).
 */
export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const parallax = mounted;
  const { hero } = content;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-night"
    >
      {/* Fundo: placeholder escuro com gradiente + parallax */}
      <motion.div
        aria-hidden
        style={parallax ? { y } : undefined}
        className="absolute inset-0 [background:radial-gradient(120%_120%_at_75%_15%,#163e7a_0%,#0d3e85_38%,#0b2a5c_72%,#081f47_100%)]"
      >
        {/* textura sutil de linhas (esquadro drywall) */}
        <span className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <span className="caption absolute bottom-6 right-6 text-white/25">
          {content.states.imagePlaceholder}
        </span>
      </motion.div>

      {/* Vinheta para contraste do texto */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-night/85 via-brand-night/45 to-transparent"
      />

      <div className="shell relative z-10 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <SeamLine className="h-6" tone="light" />
            <AnimatedText className="eyebrow text-white/80" text={hero.eyebrow} />
          </div>

          {/* H1: texto plano no SSR (protege o LCP); anima letra a letra após montar */}
          <AnimatedText
            as="h1"
            className="text-display-hero mt-6 block text-white"
            text={hero.h1}
            amount={0.4}
          />

          <p className="text-body-lg mt-7 max-w-xl text-white/80">{hero.sub}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappLink()} variant="primary" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#portfolio" variant="outline-light" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>

          <p className="caption mt-12 text-white/55">{hero.stats}</p>
        </div>
      </div>

      <a
        href="#credibilidade"
        aria-label="Rolar para o conteúdo"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/50 transition-colors hover:text-white lg:block"
      >
        <ArrowDown strokeWidth={1.5} className="size-6 animate-bounce" />
      </a>
    </section>
  );
};
