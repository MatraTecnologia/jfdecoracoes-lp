"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { QuizFlow } from "./QuizFlow";

type QuizCtx = { open: () => void; close: () => void };

const Ctx = createContext<QuizCtx | null>(null);

/** Abre o quiz sozinho após N ms — uma vez por sessão. */
const AUTO_OPEN_DELAY = 8000;
const AUTO_OPEN_KEY = "fortunato:quiz-auto";

/** Abre o quiz a partir de qualquer CTA da página. */
export const useQuiz = (): QuizCtx => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useQuiz precisa de <QuizProvider>");
  return ctx;
};

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => {
    setOpen(true);
    sessionStorage.setItem(AUTO_OPEN_KEY, "1");
  }, []);
  const close = useCallback(() => setOpen(false), []);

  // Auto-abre uma vez por sessão. Se o visitante já abriu/fechou (chave setada),
  // não reaparece — pra não virar spam e queimar a conversão.
  useEffect(() => {
    if (sessionStorage.getItem(AUTO_OPEN_KEY)) return;
    const t = setTimeout(() => {
      if (sessionStorage.getItem(AUTO_OPEN_KEY)) return;
      setOpen(true);
      sessionStorage.setItem(AUTO_OPEN_KEY, "1");
    }, AUTO_OPEN_DELAY);
    return () => clearTimeout(t);
  }, []);

  // Trava o scroll do body com o modal aberto.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, close]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={close}
              className="absolute inset-0 bg-brand-night/70 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Solicitar orçamento"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md bg-white p-6 shadow-deep sm:p-9"
            >
              <button
                type="button"
                aria-label="Fechar"
                onClick={close}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <X strokeWidth={1.75} className="size-5" />
              </button>
              <QuizFlow />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Ctx.Provider>
  );
};
