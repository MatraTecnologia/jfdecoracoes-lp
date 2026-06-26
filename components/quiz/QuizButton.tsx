"use client";

import type { ReactNode } from "react";
import { useQuiz } from "./QuizProvider";
import { buttonClasses, type Variant, type Size } from "@/components/ui/Button";

type QuizButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Ação extra antes de abrir (ex.: fechar o menu mobile). */
  onClick?: () => void;
};

/** CTA que abre o quiz de orçamento (mesmo visual do Button, mas é `<button>`). */
export const QuizButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  onClick,
}: QuizButtonProps) => {
  const { open } = useQuiz();
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </button>
  );
};
