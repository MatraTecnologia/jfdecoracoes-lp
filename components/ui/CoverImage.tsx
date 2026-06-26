import Image from "next/image";
import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  /** Texto alternativo descritivo (acessibilidade). */
  alt: string;
  /** Classe da caixa, ex.: "aspect-[4/5]". Define proporção e tamanho. */
  className?: string;
  /** Foco do recorte quando a foto não preenche a proporção, ex.: "object-top". */
  position?: string;
  /** Hint de tamanho responsivo para o next/image. */
  sizes?: string;
  /** Zoom 1.03 no hover (quando dentro de um `group`). */
  zoom?: boolean;
  /** Carrega imediatamente (LCP da dobra). */
  eager?: boolean;
};

/**
 * Imagem real recortada (object-cover) dentro de uma caixa de proporção fixa.
 * Substitui o ImagePlaceholder agora que as fotos existem em /public.
 */
export const CoverImage = ({
  src,
  alt,
  className,
  position = "object-center",
  sizes = "100vw",
  zoom = false,
  eager = false,
}: CoverImageProps) => (
  <div className={cn("relative overflow-hidden bg-surface-2", className)}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      className={cn(
        "object-cover",
        position,
        zoom &&
          "transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]",
      )}
    />
  </div>
);
