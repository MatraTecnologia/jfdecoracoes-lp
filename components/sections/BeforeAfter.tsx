"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Reveal Antes/Depois: o slider é o limiar literal — arrastar "abre" o ambiente.
 * Interação central da página. Acessível: handle com role=slider, teclado
 * (setas), e arraste por ponteiro.
 */
export const BeforeAfter = () => {
  const { beforeAfter: ba } = content;
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPos(0);
    if (e.key === "End") setPos(100);
  };

  return (
    <section id="antes-depois" className="section bg-surface">
      <div className="shell">
        <SectionHeading eyebrow={ba.eyebrow} title={ba.title} />

        <div className="mt-12">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="relative aspect-video w-full cursor-ew-resize touch-none select-none overflow-hidden border border-line"
          >
            {/* Depois (base) */}
            <div className="absolute inset-0">
              <ImagePlaceholder
                alt={ba.altAfter}
                className="h-full w-full"
              />
              <span className="caption absolute right-4 top-4 bg-brand px-3 py-1 text-white">
                {ba.afterLabel}
              </span>
            </div>

            {/* Antes (recortado pela posição do slider) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <ImagePlaceholder
                alt={ba.altBefore}
                className="h-full w-full [background-image:linear-gradient(135deg,#d7dde6_0%,#c2cad6_100%)]"
              />
              <span className="caption absolute left-4 top-4 bg-ink px-3 py-1 text-white">
                {ba.beforeLabel}
              </span>
            </div>

            {/* Linha-limiar + handle */}
            <div
              className="absolute inset-y-0 z-10 w-[2px] -translate-x-1/2 bg-white shadow-deep"
              style={{ left: `${pos}%` }}
            >
              <button
                type="button"
                role="slider"
                aria-label="Comparar antes e depois"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(pos)}
                aria-valuetext={`${Math.round(pos)}% revelado`}
                onKeyDown={onKeyDown}
                className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand shadow-deep"
              >
                <MoveHorizontal strokeWidth={1.75} className="size-5" aria-hidden />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p
              className={cn(
                "text-body-sm inline-flex items-center gap-2 text-muted",
              )}
            >
              <MoveHorizontal strokeWidth={1.5} className="size-4" aria-hidden />
              {ba.microcopy}
            </p>
            <p className="caption text-ink/60">{ba.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
