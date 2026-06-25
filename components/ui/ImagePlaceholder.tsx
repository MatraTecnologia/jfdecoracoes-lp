import { ImageOff } from "lucide-react";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Texto alternativo descritivo (acessibilidade). */
  alt: string;
  /** Classe de proporção, ex.: "aspect-[4/5]". */
  className?: string;
  /** Habilita zoom 1.03 no hover (quando dentro de um grupo). */
  zoom?: boolean;
  label?: string;
};

/**
 * Placeholder premium de imagem: bloco surface-2 com gradiente diagonal azul,
 * ícone de linha central e label "[ FOTO — substituir ]". Aresta viva.
 * Depois vira `<Image/>` com a foto real.
 */
export const ImagePlaceholder = ({
  alt,
  className,
  zoom = false,
  label = content.states.imagePlaceholder,
}: ImagePlaceholderProps) => (
  <div
    role="img"
    aria-label={alt}
    className={cn(
      "relative flex items-center justify-center overflow-hidden bg-surface-2",
      "[background-image:linear-gradient(135deg,var(--color-surface-2)_0%,var(--color-tint)_55%,var(--color-surface-2)_100%)]",
      className,
    )}
  >
    <div
      className={cn(
        "flex flex-col items-center gap-3 px-6 text-center transition-transform duration-[600ms] ease-out",
        zoom && "group-hover:scale-[1.03]",
      )}
    >
      <ImageOff
        strokeWidth={1.5}
        className="size-8 text-brand/45"
        aria-hidden
      />
      <span className="caption text-brand/55">{label}</span>
    </div>
    {/* Moldura hairline para reforçar a aresta viva */}
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 border border-line"
    />
  </div>
);
