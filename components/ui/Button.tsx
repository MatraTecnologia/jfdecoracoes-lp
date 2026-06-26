import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Variant =
  | "primary"
  | "secondary"
  | "outline-light"
  | "whatsapp"
  | "ghost";
export type Size = "md" | "lg";

const base =
  "text-button group relative inline-flex items-center justify-center gap-2 rounded-sm uppercase transition-colors duration-300 ease-out select-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const variants: Record<Variant, string> = {
  // Fill desliza brand -> brand-deep no hover.
  primary: "bg-brand text-white hover:bg-brand-deep shadow-soft",
  // Contorno hairline, vira sólido sutil no hover.
  secondary:
    "border border-line text-ink hover:border-brand hover:text-brand bg-white",
  // Contorno claro para uso sobre fundo escuro (hero, CTA final).
  "outline-light":
    "border border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white",
  // Verde só aqui, por convenção WhatsApp.
  whatsapp: "bg-whats text-white hover:bg-whats-deep shadow-soft",
  // Texto/ação leve, sublinhado cresce da esquerda.
  ghost: "text-ink hover:text-brand px-0",
};

/** Classes do botão — compartilhadas entre o `<a>` (Button) e o `<button>` que abre o quiz. */
export const buttonClasses = (
  variant: Variant = "primary",
  size: Size = "md",
  className?: string,
) =>
  cn(base, variant !== "ghost" && sizes[size], variants[variant], className);

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

/** Botão-link (a). Toda ação da página é um `<a>` (WhatsApp/âncora) para SEO. */
export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => (
  <a className={buttonClasses(variant, size, className)} {...props}>
    {children}
  </a>
);
