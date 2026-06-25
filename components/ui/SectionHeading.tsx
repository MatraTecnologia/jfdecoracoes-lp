import type { ReactNode } from "react";
import { SeamLine } from "./SeamLine";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  /** Tema escuro inverte as cores do texto. */
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
};

/**
 * Cabeçalho de seção: junta-guia (seam-line) + eyebrow + H2.
 * Eyebrow e H2 (quando string) animam letra a letra via AnimatedText.
 */
export const SectionHeading = ({
  eyebrow,
  title,
  dark = false,
  align = "left",
  className,
  children,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    <div
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
      )}
    >
      <SeamLine className="h-6" tone={dark ? "light" : "brand"} />
      <AnimatedText
        text={eyebrow}
        className={cn("eyebrow", dark ? "text-white/70" : "text-brand")}
      />
    </div>
    {typeof title === "string" ? (
      <AnimatedText
        as="h2"
        text={title}
        className={cn("text-h2 mt-5", dark ? "text-white" : "text-ink")}
      />
    ) : (
      <h2 className={cn("text-h2 mt-5", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
    )}
    {children}
  </div>
);
