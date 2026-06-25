import { cn } from "@/lib/utils";

type StatCardProps = {
  /** Número/valor; vazio cai para o fallback. */
  value: string;
  suffix?: string;
  label: string;
  fallback: string;
};

const hasValue = (v: string) => v.trim().length > 0;

/**
 * Card de credibilidade. Com valor preenchido mostra número grande (Oswald);
 * sem valor, exibe o fallback editorial — nunca fica vazio.
 */
export const StatCard = ({ value, suffix = "", label, fallback }: StatCardProps) => {
  const filled = hasValue(value);
  return (
    <div
      className={cn(
        "group flex h-full flex-col justify-between border border-line bg-white p-7",
        "transition-shadow duration-300 hover:shadow-lift",
      )}
    >
      {filled ? (
        <p className="text-stat text-brand">
          {value}
          <span className="text-brand/70">{suffix}</span>
        </p>
      ) : (
        <p className="text-h3 text-ink">{label}</p>
      )}

      <p className={cn("mt-6 text-body-sm", filled ? "text-ink" : "text-muted")}>
        {filled ? label : fallback}
      </p>
    </div>
  );
};
