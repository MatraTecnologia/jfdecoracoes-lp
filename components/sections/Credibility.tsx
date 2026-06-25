import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";

/** Faixa de credibilidade: 4 stat-cards. */
export const Credibility = () => {
  const { credibility } = content;
  return (
    <section id="credibilidade" className="section bg-surface">
      <div className="shell">
        <SectionHeading
          eyebrow={credibility.eyebrow}
          title={credibility.title}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credibility.cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.08} className="h-full">
              <StatCard
                value={card.value}
                suffix={card.suffix}
                label={card.label}
                fallback={card.fallback}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
