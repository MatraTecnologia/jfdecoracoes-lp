import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { QuizButton } from "@/components/quiz/QuizButton";
import { content } from "@/lib/content";

/**
 * Diferenciais (split): texto + lista à esquerda, imagem à direita.
 * Pico de segurança da jornada — onde a decisão amadurece.
 */
export const Differentials = () => {
  const { differentials } = content;
  return (
    <section id="diferenciais" className="section bg-surface">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={differentials.eyebrow}
            title={differentials.title}
          />

          <ul className="mt-10 flex flex-col gap-5">
            {differentials.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-sm bg-tint">
                    <Check strokeWidth={2} className="size-4 text-brand" aria-hidden />
                  </span>
                  <p className="text-body-lg text-ink/85">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <QuizButton variant="primary" size="lg">
              {content.hero.ctaPrimary}
            </QuizButton>
          </div>
        </div>

        <Reveal delay={0.1} className="group">
          <CoverImage
            src={differentials.srcImage}
            alt={differentials.altImage}
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            zoom
          />
        </Reveal>
      </div>
    </section>
  );
};
