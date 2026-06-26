"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuizButton } from "@/components/quiz/QuizButton";
import { SeamLine } from "@/components/ui/SeamLine";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { content } from "@/lib/content";
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
      {/* Fundo: foto real do ambiente + tint navy + parallax */}
      <motion.div
        aria-hidden
        style={parallax ? { y } : undefined}
        className="absolute inset-0"
      >
        <Image
          src="/hero.webp"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Tint da marca para coesão e contraste */}
        <span className="absolute inset-0 [background:radial-gradient(120%_120%_at_75%_15%,rgba(22,62,122,0.55)_0%,rgba(13,62,133,0.6)_38%,rgba(11,42,92,0.78)_72%,rgba(8,31,71,0.9)_100%)]" />
        {/* textura sutil de linhas (esquadro drywall) */}
        <span className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      </motion.div>

      {/* Vinheta para contraste do texto */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brand-night/90 via-brand-night/55 to-brand-night/20"
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
            <QuizButton variant="primary" size="lg">
              {hero.ctaPrimary}
            </QuizButton>
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
