import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsappFloat } from "@/components/layout/WhatsappFloat";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { Portfolio } from "@/components/sections/Portfolio";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Quiz } from "@/components/sections/Quiz";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Credibility />
        <Portfolio />
        <BeforeAfter />
        <Services />
        <Differentials />
        <Process />
        <Testimonials />
        <Faq />
        <Quiz />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
