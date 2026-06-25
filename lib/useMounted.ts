"use client";

import { useSyncExternalStore } from "react";

/** Store vazia: nunca notifica — o valor é fixo por ambiente (server/client). */
const emptySubscribe = () => () => {};

/**
 * Retorna `false` no servidor e no PRIMEIRO render do cliente; `true` após a
 * hidratação. Usa `useSyncExternalStore` (getServerSnapshot = false,
 * getSnapshot = true), evitando setState-em-effect.
 *
 * Fecha o gap de hidratação do Framer Motion: o estado renderizado no SSR e no
 * primeiro paint do cliente fica idêntico (estático), e a animação só liga
 * depois de montar — sem hydration mismatch, mesmo com `prefers-reduced-motion`.
 */
export const useMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
