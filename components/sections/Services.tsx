import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { content } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";

/** Serviços: 6 cards (ícone + título + benefício + resultado). */
export const Services = () => {
  const { services } = content;
  return (
    <section id="servicos" className="section bg-white">
      <div className="shell">
        <SectionHeading eyebrow={services.eyebrow} title={services.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard {...item} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href={whatsappLink()} variant="primary" size="lg">
            {content.hero.ctaPrimary}
          </Button>
        </div>
      </div>
    </section>
  );
};
