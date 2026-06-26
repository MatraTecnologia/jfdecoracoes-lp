"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuizButton } from "@/components/quiz/QuizButton";
import { SeamLine } from "@/components/ui/SeamLine";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { content } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";
import { useMounted } from "@/lib/useMounted";

/** CTA final full-bleed escuro, com parallax discreto no fundo. */
export const FinalCta = () => {
  const ref = useRef<HTMLElement>(null);
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const parallax = mounted;
  const { finalCta } = content;

  return (
    <section
      ref={ref}
      id="contato"
      className="relative overflow-hidden bg-brand-night"
    >
      <motion.div
        aria-hidden
        style={parallax ? { y } : undefined}
        className="absolute inset-0"
      >
        <Image
          src="/cta.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Tint navy escuro: mantém clima premium e legibilidade do texto branco */}
        <span className="absolute inset-0 [background:radial-gradient(120%_120%_at_30%_20%,rgba(22,62,122,0.82)_0%,rgba(13,62,133,0.86)_42%,rgba(11,42,92,0.92)_78%,rgba(8,31,71,0.96)_100%)]" />
        <span className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      </motion.div>

      <div className="shell relative z-10 flex flex-col items-center py-28 text-center md:py-36">
        <SeamLine className="h-8" tone="light" />
        <AnimatedText
          as="h2"
          className="text-h2 mt-6 max-w-3xl text-white"
          text={finalCta.title}
          amount={0.4}
        />
        <p className="text-body-lg mt-6 max-w-xl text-white/80">
          {finalCta.sub}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={whatsappLink()} variant="whatsapp" size="lg">
            <MessageCircle strokeWidth={1.75} className="size-5" aria-hidden />
            {finalCta.ctaWhatsapp}
          </Button>
          <QuizButton variant="outline-light" size="lg">
            {finalCta.ctaQuote}
          </QuizButton>
        </div>

        <p className="caption mt-10 text-white/55">{finalCta.microcopy}</p>
      </div>
    </section>
  );
};
