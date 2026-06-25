import {
  Hammer,
  Layers,
  LayoutPanelLeft,
  Lightbulb,
  PanelTop,
  Ruler,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  LayoutPanelLeft,
  PanelTop,
  Lightbulb,
  Layers,
  Ruler,
  Hammer,
};

type ServiceCardProps = {
  icon: string;
  title: string;
  benefit: string;
  result: string;
};

/** Card de serviço: ícone + título + benefício + resultado esperado. */
export const ServiceCard = ({ icon, title, benefit, result }: ServiceCardProps) => {
  const Icon = icons[icon] ?? Layers;
  return (
    <div
      className={cn(
        "group flex h-full flex-col border border-line bg-white p-8",
        "transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift",
      )}
    >
      <Icon
        strokeWidth={1.5}
        className="size-8 text-brand transition-colors"
        aria-hidden
      />
      <h3 className="text-h3 mt-6 text-ink">{title}</h3>
      <p className="text-body mt-3 text-ink/80">{benefit}</p>

      <div className="mt-6 flex items-start gap-3 border-t border-line pt-5">
        <span className="caption mt-[2px] shrink-0 text-brand">Resultado</span>
        <p className="text-body-sm text-muted">{result}</p>
      </div>
    </div>
  );
};
