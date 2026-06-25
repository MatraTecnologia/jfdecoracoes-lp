"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { letter, letterContainer, viewportRepeat } from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";

/** Tags suportadas como container animado. */
const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

type AnimatedTextProps = {
  text: string;
  as?: keyof typeof tags;
  className?: string;
  /** Atraso extra antes de iniciar o escalonamento das letras. */
  delay?: number;
  /** Fração visível para disparar (default 0.25). */
  amount?: number;
};

/**
 * Kinetic typography: anima letra a letra (flip + fade) ao entrar na viewport e
 * desanima ao sair — reanimando toda vez (decisão de projeto).
 *
 * Acessibilidade: o container carrega `aria-label` com o texto completo e as
 * letras são `aria-hidden`, então leitores de tela leem a palavra inteira.
 * SSR / 1º paint: renderiza o texto plano (sem mismatch e visível sem JS); a
 * animação só liga após montar.
 */
export const AnimatedText = ({
  text,
  as = "span",
  className,
  delay = 0,
  amount = 0.25,
}: AnimatedTextProps) => {
  const mounted = useMounted();
  const MotionTag = tags[as];

  if (!mounted) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      aria-label={text}
      variants={letterContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportRepeat, amount }}
      transition={{ delayChildren: delay }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span aria-hidden style={{ display: "inline-block" }}>
            {Array.from(word).map((char, ci) => (
              <motion.span
                key={ci}
                variants={letter}
                style={{ display: "inline-block", transformPerspective: 600 }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
};
