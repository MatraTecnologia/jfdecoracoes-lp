"use client";

import { motion } from "framer-motion";
import { seamDraw, viewportRepeat } from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";
import { cn } from "@/lib/utils";

type SeamLineProps = {
  /** Altura da junta-guia. */
  className?: string;
  tone?: "brand" | "light";
};

/**
 * Junta-guia (seam-line): linha vertical 2px que se "desenha" de baixo p/ cima
 * ao entrar na viewport e recolhe ao sair — reanimando toda vez. Conceito
 * "A Soleira".
 *
 * SSR e 1º paint do cliente renderizam a linha já visível (sem mismatch e
 * visível sem JS); o "desenho" só liga depois de montar.
 */
export const SeamLine = ({ className, tone = "brand" }: SeamLineProps) => {
  const mounted = useMounted();
  const baseClass = cn(
    "block w-[2px] origin-bottom",
    tone === "brand" ? "bg-brand" : "bg-white/70",
    className,
  );

  if (!mounted) {
    return <span aria-hidden className={baseClass} />;
  }

  return (
    <motion.span
      aria-hidden
      className={baseClass}
      variants={seamDraw}
      initial="hidden"
      whileInView="visible"
      viewport={viewportRepeat}
    />
  );
};
