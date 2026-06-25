"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportRepeat } from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";

/** Tags suportadas pelo Reveal (componentes motion criados fora do render). */
const tags = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
} as const;

type RevealProps = {
  children: ReactNode;
  as?: keyof typeof tags;
  delay?: number;
  className?: string;
};

/**
 * Scroll-reveal (fade + translateY) que reanima toda vez que entra/sai da
 * viewport (decisão de projeto). SSR e 1º paint do cliente são estáticos e
 * visíveis (sem mismatch, conteúdo nunca preso em opacity:0); a animação só
 * liga após montar.
 */
export const Reveal = ({
  children,
  as = "div",
  delay = 0,
  className,
}: RevealProps) => {
  const mounted = useMounted();
  const MotionTag = tags[as];

  if (!mounted) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportRepeat}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};
