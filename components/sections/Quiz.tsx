import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuizFlow } from "@/components/quiz/QuizFlow";

const perks = [
  { icon: Clock, text: "Leva menos de 1 minuto." },
  { icon: ShieldCheck, text: "Sem compromisso — só pra entender seu projeto." },
  { icon: Sparkles, text: "Resposta no mesmo dia útil, direto no WhatsApp." },
];

/**
 * Quiz de qualificação inline (antes do CTA final): conduz o visitante já
 * convencido a um orçamento, abrindo o WhatsApp com o resumo pronto.
 */
export const Quiz = () => (
  <section id="orcamento" className="section bg-surface">
    <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal>
        <SectionHeading
          eyebrow="Orçamento em 1 minuto"
          title="Responda 4 perguntas e receba seu orçamento."
        />
        <p className="text-body-lg mt-6 text-ink/80">
          Sem formulário chato. Conte rápido o que você precisa e a gente já
          chega no WhatsApp com tudo organizado pra te atender direto.
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          {perks.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-tint">
                <Icon strokeWidth={1.75} className="size-4 text-brand" aria-hidden />
              </span>
              <span className="text-body-sm text-ink/85">{text}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border border-line bg-white p-6 shadow-soft sm:p-9">
          <QuizFlow />
        </div>
      </Reveal>
    </div>
  </section>
);
