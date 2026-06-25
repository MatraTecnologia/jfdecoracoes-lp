import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStep } from "@/components/ui/ProcessStep";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";

/** Processo: timeline de 5 etapas (01–05). */
export const Process = () => {
  const { process } = content;
  return (
    <section id="processo" className="section bg-white">
      <div className="shell">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />

        <div className="mt-14 max-w-2xl">
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <ProcessStep
                n={step.n}
                title={step.title}
                text={step.text}
                last={i === process.steps.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
