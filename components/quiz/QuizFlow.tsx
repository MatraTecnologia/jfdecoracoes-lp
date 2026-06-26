"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";
import {
  quizSteps,
  buildQuizMessage,
  type QuizAnswers,
} from "@/lib/quiz";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type QuizFlowProps = {
  /** Chamado depois que o lead dispara o WhatsApp (ex.: fechar modal). */
  onComplete?: () => void;
};

const TOTAL = quizSteps.length + 1; // passos + contato

/** Quiz de qualificação: conduz por etapas e abre o WhatsApp com o lead pronto. */
export const QuizFlow = ({ onComplete }: QuizFlowProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const isContact = step === quizSteps.length;
  const current = quizSteps[step];
  const progress = Math.round(((done ? TOTAL : step) / TOTAL) * 100);

  const selectSingle = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setStep((s) => s + 1);
  };

  const toggleMulti = (id: string, value: string) => {
    setAnswers((a) => {
      const list = Array.isArray(a[id]) ? (a[id] as string[]) : [];
      return {
        ...a,
        [id]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });
  };

  const multiCount = current?.type === "multi"
    ? ((answers[current.id] as string[]) ?? []).length
    : 0;

  const submit = () => {
    const link = whatsappLink(buildQuizMessage(answers, name));
    window.open(link, "_blank", "noopener");
    setDone(true);
    onComplete?.();
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setName("");
    setDone(false);
  };

  return (
    <div className="flex flex-col">
      {/* Barra de progresso */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <span className="caption text-brand">
            {done ? "Concluído" : `Etapa ${step + 1} de ${TOTAL}`}
          </span>
          <span className="caption text-muted">{progress}%</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-tint">
          <motion.div
            className="h-full bg-brand"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center py-6 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-whats/12">
              <MessageCircle strokeWidth={1.75} className="size-7 text-whats" />
            </span>
            <h3 className="text-h3 mt-6 text-ink">Tudo certo!</h3>
            <p className="text-body-lg mt-3 max-w-sm text-muted">
              Abrimos o WhatsApp com seu resumo pronto. É só enviar que a gente
              responde no mesmo dia útil.
            </p>
            <button
              type="button"
              onClick={() => window.open(whatsappLink(buildQuizMessage(answers, name)), "_blank", "noopener")}
              className={cn(buttonClasses("whatsapp", "lg"), "mt-8")}
            >
              <MessageCircle strokeWidth={1.75} className="size-5" />
              Abrir o WhatsApp de novo
            </button>
            <button
              type="button"
              onClick={reset}
              className="caption mt-4 text-muted underline-offset-4 hover:text-brand hover:underline"
            >
              Refazer
            </button>
          </motion.div>
        ) : isContact ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-h3 text-ink">Quase lá! Como te chamamos?</h3>
            <p className="text-body-sm mt-2 text-muted">
              Seu nome vai junto no resumo pro atendimento ser direto.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && name.trim()) submit();
              }}
              autoFocus
              placeholder="Seu nome"
              className="mt-6 w-full rounded-sm border border-line bg-surface px-4 py-4 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand"
            />
            <button
              type="button"
              disabled={!name.trim()}
              onClick={submit}
              className={cn(
                buttonClasses("whatsapp", "lg"),
                "mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40",
              )}
            >
              <MessageCircle strokeWidth={1.75} className="size-5" />
              Falar no WhatsApp
            </button>
            <BackButton onClick={() => setStep((s) => s - 1)} />
          </motion.div>
        ) : (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-h3 text-ink">{current.question}</h3>
            {current.helper ? (
              <p className="text-body-sm mt-2 text-muted">{current.helper}</p>
            ) : null}

            <div
              className={cn(
                "mt-6 grid gap-3",
                current.options.length > 3 ? "sm:grid-cols-2" : "grid-cols-1",
              )}
            >
              {current.options.map((opt) => {
                const selected =
                  current.type === "multi"
                    ? ((answers[current.id] as string[]) ?? []).includes(opt.value)
                    : answers[current.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() =>
                      current.type === "multi"
                        ? toggleMulti(current.id, opt.value)
                        : selectSingle(current.id, opt.value)
                    }
                    className={cn(
                      "group flex items-center justify-between gap-3 rounded-sm border px-5 py-4 text-left transition-colors",
                      selected
                        ? "border-brand bg-tint"
                        : "border-line bg-white hover:border-brand/60",
                    )}
                  >
                    <span>
                      <span className="block font-medium text-ink">{opt.label}</span>
                      {opt.hint ? (
                        <span className="caption block text-muted">{opt.hint}</span>
                      ) : null}
                    </span>
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                        selected
                          ? "border-brand bg-brand text-white"
                          : "border-line text-transparent",
                      )}
                    >
                      <Check strokeWidth={3} className="size-3" />
                    </span>
                  </button>
                );
              })}
            </div>

            {current.type === "multi" ? (
              <button
                type="button"
                disabled={multiCount === 0}
                onClick={() => setStep((s) => s + 1)}
                className={cn(
                  buttonClasses("primary", "lg"),
                  "mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40",
                )}
              >
                Continuar
                <ArrowRight strokeWidth={1.75} className="size-4" />
              </button>
            ) : null}

            {step > 0 ? <BackButton onClick={() => setStep((s) => s - 1)} /> : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="caption mt-5 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-brand"
  >
    <ArrowLeft strokeWidth={1.75} className="size-3.5" />
    Voltar
  </button>
);
