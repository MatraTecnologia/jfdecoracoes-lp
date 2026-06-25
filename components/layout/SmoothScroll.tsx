"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll com inércia (Lenis) aplicado à página inteira. Mantém o scroll
 * nativo no toque (mobile) e suaviza o wheel no desktop. `anchors` faz os links
 * do tipo `#secao` (menu, CTAs) rolarem suavemente, com offset para não ficarem
 * sob o header fixo.
 *
 * Lenis rola o documento real (via rAF), então IntersectionObserver/`whileInView`
 * e o parallax do Framer continuam funcionando normalmente.
 */
export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Rola âncoras (#secao) suavemente, parando ~88px acima (header fixo).
      anchors: { offset: -88 },
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
