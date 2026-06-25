"use client";

import { motion, useScroll } from "framer-motion";
import { useMounted } from "@/lib/useMounted";

/**
 * Indicador de progresso na borda esquerda da viewport, materializado como a
 * seam-line (conceito "A Soleira"). Desenha-se de cima p/ baixo conforme o
 * scroll.
 *
 * Renderiza `null` no SSR e no 1º paint do cliente (mesma saída dos dois lados,
 * sem hydration mismatch); só aparece após montar.
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <motion.span
      aria-hidden
      style={{ scaleY: scrollYProgress }}
      className="fixed left-0 top-0 z-50 hidden h-screen w-[2px] origin-top bg-brand/70 lg:block"
    />
  );
};
