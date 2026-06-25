import { cn } from "@/lib/utils";

/**
 * Marca da Fortunato. A "soleira" (porta/painel que se abre) é redesenhada em
 * SVG monocromático (currentColor) para controle total de cor por estado de
 * header — mais nítida que rasterizar o PNG. O wordmark usa as fontes da marca.
 *
 * TODO: o original `public/logo.png` permanece disponível; substituir por SVG
 * vetorizado fiel quando o cliente enviar o arquivo de marca em curvas.
 */
type BrandMarkProps = {
  /** "light" para header transparente sobre o hero; "dark" para fundo branco. */
  tone?: "light" | "dark";
  className?: string;
  withWordmark?: boolean;
};

export const BrandMark = ({
  tone = "dark",
  className,
  withWordmark = true,
}: BrandMarkProps) => {
  const isLight = tone === "light";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        className={cn("size-9 shrink-0", isLight ? "text-white" : "text-brand")}
        aria-hidden
        fill="none"
      >
        {/* Folha esquerda (cheia) */}
        <path d="M6 11 L23 7 V41 L6 37 Z" fill="currentColor" />
        {/* Folha direita (em perspectiva, mais clara) */}
        <path d="M25 7 L42 11 V37 L25 41 Z" fill="currentColor" opacity="0.4" />
        {/* Junta central (seam) */}
        <rect x="23.2" y="7" width="1.6" height="34" fill="currentColor" />
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-[1.15rem] font-semibold tracking-[0.04em] uppercase [font-family:var(--font-display)]",
              isLight ? "text-white" : "text-ink",
            )}
          >
            Fortunato
          </span>
          <span
            className={cn(
              "mt-[2px] text-[0.62rem] font-semibold uppercase tracking-[0.34em]",
              isLight ? "text-white/60" : "text-muted",
            )}
          >
            Decorações
          </span>
        </span>
      )}
    </span>
  );
};
