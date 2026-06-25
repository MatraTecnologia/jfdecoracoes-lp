import { Quote, User } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

/** Depoimento sobre fundo escuro: aspa grande + texto + atribuição. */
export const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => (
  <figure className="flex h-full flex-col border border-white/10 bg-white/[0.04] p-8">
    <Quote
      strokeWidth={1.5}
      className="size-9 text-brand/70"
      aria-hidden
    />
    <blockquote className="text-body-lg mt-5 flex-1 text-white/90">
      {quote}
    </blockquote>
    <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
      <span className="flex size-11 items-center justify-center rounded-full bg-white/10">
        <User strokeWidth={1.5} className="size-5 text-white/60" aria-hidden />
      </span>
      <span>
        <span className="block text-body-sm font-medium text-white">{name}</span>
        <span className="caption block text-white/50">{role}</span>
      </span>
    </figcaption>
  </figure>
);
