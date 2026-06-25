import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { content } from "@/lib/content";

/** FAQ em acordeão, distribuído em 2 colunas em telas largas. */
export const Faq = () => {
  const { faq } = content;
  const mid = Math.ceil(faq.items.length / 2);
  const columns = [faq.items.slice(0, mid), faq.items.slice(mid)];

  return (
    <section id="faq" className="section bg-white">
      <div className="shell">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mt-12 grid gap-x-16 md:grid-cols-2">
          {columns.map((col, ci) => (
            <div key={ci}>
              {col.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  defaultOpen={ci === 0 && i === 0}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
