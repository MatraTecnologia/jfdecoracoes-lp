"use client";

import type { ReactNode } from "react";
import { useQuiz } from "./QuizProvider";
import { buttonClasses, type Variant, type Size } from "@/components/ui/Button";

type QuizButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

/** CTA que abre o quiz de orçamento (mesmo visual do Button, mas é `<button>`). */
export const QuizButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
}: QuizButtonProps) => {
  const { open } = useQuiz();
  return (
    <button
      type="button"
      onClick={open}
      className={buttonClasses(variant, size, className)}
    >
      {children}
    </button>
  );
};
