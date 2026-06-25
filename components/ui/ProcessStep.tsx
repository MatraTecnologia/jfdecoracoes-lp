import { cn } from "@/lib/utils";

type ProcessStepProps = {
  n: string;
  title: string;
  text: string;
  /** Última etapa não desenha o conector. */
  last?: boolean;
};

/** Etapa da timeline de processo (01–05) com conector vertical (seam). */
export const ProcessStep = ({ n, title, text, last = false }: ProcessStepProps) => (
  <div className="relative flex gap-6 pb-12 last:pb-0">
    {/* Marcador + conector */}
    <div className="flex flex-col items-center">
      <span className="flex size-3 shrink-0 rounded-full bg-brand ring-4 ring-tint" />
      {!last && (
        <span aria-hidden className="mt-2 w-px flex-1 bg-line" />
      )}
    </div>

    <div className={cn("-mt-1 pb-2")}>
      <span className="text-stat block leading-none text-brand/15">{n}</span>
      <h3 className="text-h3 mt-2 text-ink">{title}</h3>
      <p className="text-body mt-2 max-w-md text-ink/75">{text}</p>
    </div>
  </div>
);
