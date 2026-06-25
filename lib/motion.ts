/**
 * Variants compartilhadas do Framer Motion. Motion sutil, sempre composited
 * (transform/opacity). Animações são FORÇADAS (decisão de projeto): a página
 * anima para todos, então não há ramificação por `prefers-reduced-motion`. O
 * gate anti-hidratação fica nos componentes via `useMounted`.
 */
import type { Variants } from "framer-motion";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Container que escalona a entrada dos filhos (80ms). */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Desenho vertical da seam-line (scaleY a partir da base). */
export const seamDraw: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* ---------------------------------------------------------------------------
   Kinetic typography (animação por letra) — títulos/eyebrows
--------------------------------------------------------------------------- */

/** Container das letras: escalona cada caractere ao entrar/sair. */
export const letterContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.028, delayChildren: 0.02 },
  },
};

/** Cada letra: sobe e "vira" para o lugar (flip sutil em rotateX). */
export const letter: Variants = {
  hidden: { opacity: 0, y: "0.55em", rotateX: -85 },
  visible: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Anima uma vez e fica. */
export const viewportOnce = { once: true, amount: 0.3 } as const;

/** Reanima toda vez que entra/sai da viewport (decisão de projeto). */
export const viewportRepeat = { once: false, amount: 0.25 } as const;

export { EASE };
