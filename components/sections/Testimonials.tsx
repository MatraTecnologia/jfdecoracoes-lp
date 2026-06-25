import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";

/** Depoimentos sobre fundo escuro (azul-deep). */
export const Testimonials = () => {
  const { testimonials } = content;
  return (
    <section id="depoimentos" className="section bg-brand-deep">
      <div className="shell">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          dark
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={item.quote} delay={i * 0.08} className="h-full">
              <TestimonialCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
