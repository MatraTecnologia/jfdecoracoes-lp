import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ItemProps = {
  caption: string;
  alt: string;
  ratio: string;
  src: string;
  position?: string;
  className?: string;
};

const PortfolioItem = ({
  caption,
  alt,
  ratio,
  src,
  position,
  className,
}: ItemProps) => (
  <figure className={cn("group", className)}>
    <CoverImage
      src={src}
      alt={alt}
      className={ratio}
      position={position}
      sizes="(min-width: 768px) 50vw, 100vw"
      zoom
    />
    <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-3">
      <span className="caption text-brand">{caption}</span>
    </figcaption>
  </figure>
);

/**
 * Portfólio editorial assimétrico (NÃO grid simples): uma vertical grande à
 * esquerda, duas peças escalonadas à direita e uma larga deslocada abaixo.
 */
export const Portfolio = () => {
  const { portfolio } = content;
  const [a, b, c, d] = portfolio.items;

  return (
    <section id="portfolio" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} />
          <a
            href={whatsappLink()}
            className="text-button group inline-flex shrink-0 items-center gap-2 uppercase text-brand"
          >
            {portfolio.cta}
            <ArrowRight
              strokeWidth={1.75}
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <PortfolioItem {...a} />
          </Reveal>

          <div className="flex flex-col gap-8 md:col-span-5 md:pt-20">
            <Reveal delay={0.08}>
              <PortfolioItem {...b} />
            </Reveal>
            <Reveal delay={0.16}>
              <PortfolioItem {...c} />
            </Reveal>
          </div>

          <Reveal className="md:col-span-8 md:col-start-3" delay={0.1}>
            <PortfolioItem {...d} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
