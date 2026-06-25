"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

/**
 * Item de acordeão acessível (button aria-expanded + region). A animação de
 * abertura usa grid-template-rows (0fr→1fr), suave e sem medir altura;
 * reduced-motion é coberto pelo reset global de transições no globals.css.
 */
export const AccordionItem = ({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-h3 text-ink">{question}</span>
          <Plus
            strokeWidth={1.5}
            aria-hidden
            className={cn(
              "size-5 shrink-0 text-brand transition-transform duration-300",
              open && "rotate-45",
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-body pb-6 pr-8 text-ink/75">{answer}</p>
        </div>
      </div>
    </div>
  );
};
