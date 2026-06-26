/**
 * Toda a copy aprovada (DESIGN.md), já com os tokens resolvidos e fallbacks
 * embutidos. As seções são "burras": só consomem este conteúdo.
 */
import { tokens } from "./site-config";

const { CIDADE, ANOS_MERCADO, PROJETOS_ENTREGUES } = tokens;

const has = (v: string) => v.trim().length > 0;
/** Usa o valor preenchido ou o fallback quando o token está vazio. */
const orElse = (v: string, fallback: string) => (has(v) ? v.trim() : fallback);

const cidade = orElse(CIDADE, "sua região");

export const content = {
  hero: {
    eyebrow: "Drywall · Construção a Seco",
    h1: "Transformamos espaços em ambientes que valorizam o seu imóvel.",
    sub: "Drywall, forros e sancas executados com padrão de arquitetura — para projetos residenciais e corporativos.",
    ctaPrimary: "Solicitar Orçamento",
    ctaSecondary: "Ver Projetos",
    // Linha de selos: cheia quando há números, enxuta no fallback.
    stats:
      has(ANOS_MERCADO) && has(PROJETOS_ENTREGUES)
        ? `${ANOS_MERCADO.trim()}+ anos de obra fina · ${PROJETOS_ENTREGUES.trim()}+ projetos entregues · Padrão Fortunato`
        : "Obra fina · Equipe própria · Padrão Fortunato",
  },

  credibility: {
    eyebrow: "Por que Fortunato",
    title: "Competência técnica, do projeto à entrega.",
    cards: [
      {
        value: orElse(PROJETOS_ENTREGUES, ""),
        suffix: "+",
        label: "Projetos entregues",
        fallback: "Projetos residenciais e corporativos",
      },
      {
        value: orElse(ANOS_MERCADO, ""),
        suffix: "+",
        label: "Anos de mercado",
        fallback: "Experiência em obra fina",
      },
      {
        value: "100%",
        suffix: "",
        label: "No prazo combinado",
        fallback: "No prazo combinado",
      },
      {
        value: "",
        suffix: "",
        label: "Atendimento especializado",
        fallback: "Residencial e corporativo",
      },
    ],
  },

  portfolio: {
    eyebrow: "Projetos",
    title: "Cada ambiente entregue com o mesmo padrão.",
    cta: "Ver todos os projetos",
    items: [
      {
        caption: "Residencial · Forro + Sanca",
        alt: "Projeto residencial com forro e sanca de luz embutida em drywall",
        ratio: "aspect-[4/5]",
        src: "/portfolio-1.webp",
        position: "object-center",
      },
      {
        caption: "Corporativo · Divisórias",
        alt: "Projeto corporativo com divisórias de drywall e vidro",
        ratio: "aspect-[3/2]",
        src: "/portfolio-2.webp",
        position: "object-center",
      },
      {
        caption: "Residencial · Iluminação Embutida",
        alt: "Corredor com iluminação linear embutida em sanca de drywall",
        ratio: "aspect-[3/4]",
        src: "/portfolio-3.webp",
        position: "object-center",
      },
      {
        caption: "Corporativo · Forro + Acabamento",
        alt: "Interior comercial de alto padrão com forro em drywall",
        ratio: "aspect-[3/2]",
        src: "/portfolio-4.webp",
        position: "object-center",
      },
    ],
  },

  beforeAfter: {
    eyebrow: "Transformação",
    title: "De espaço cru a ambiente pronto.",
    microcopy: "Arraste para ver a transformação.",
    caption: "Da estrutura crua ao acabamento pronto.",
    beforeLabel: "Antes",
    afterLabel: "Depois",
    altBefore: "Ambiente antes da execução, com estrutura metálica de construção a seco",
    altAfter: "Ambiente depois da execução, com acabamento Fortunato",
    srcBefore: "/antes.webp",
    srcAfter: "/depois.webp",
  },

  services: {
    eyebrow: "O que fazemos",
    title: "Soluções em construção a seco, do projeto à entrega.",
    items: [
      {
        icon: "LayoutPanelLeft",
        title: "Drywall",
        benefit: "Divisórias e paredes secas, rápidas e sem quebra-quebra.",
        result: "Ambientes redesenhados em dias, não semanas.",
      },
      {
        icon: "PanelTop",
        title: "Forros",
        benefit: "Forros lisos e acústicos, sem trinca.",
        result: "Teto perfeito e mais conforto.",
      },
      {
        icon: "Lightbulb",
        title: "Sancas",
        benefit: "Sancas e iluminação embutida sob medida.",
        result: "Ambiente com cara de projeto assinado.",
      },
      {
        icon: "Layers",
        title: "Revestimentos",
        benefit: "Acabamentos que valorizam cada parede.",
        result: "Superfícies impecáveis e duráveis.",
      },
      {
        icon: "Ruler",
        title: "Acabamentos",
        benefit: "O detalhe fino que faz a diferença.",
        result: "Junta invisível, nada de retrabalho.",
      },
      {
        icon: "Hammer",
        title: "Reformas",
        benefit: "Reformas residenciais e corporativas completas.",
        result: "Espaço renovado, no prazo combinado.",
      },
    ],
  },

  differentials: {
    eyebrow: "O padrão Fortunato",
    title: "Por que contratar quem leva acabamento a sério.",
    altImage: "Detalhe de sanca de luz com acabamento impecável em drywall",
    srcImage: "/diferenciais.webp",
    items: [
      "Planejamento antes de qualquer corte de placa.",
      "Equipe própria especializada em obra fina.",
      "Acabamento refinado: junta invisível, parede sem onda.",
      "Obra organizada e limpa todos os dias.",
      "Cronograma cumprido — você sabe quando termina.",
    ],
  },

  process: {
    eyebrow: "Como trabalhamos",
    title: "Do primeiro contato à entrega limpa.",
    steps: [
      { n: "01", title: "Contato", text: "Você nos conta o projeto." },
      {
        n: "02",
        title: "Visita Técnica",
        text: "Medição e diagnóstico no local.",
      },
      {
        n: "03",
        title: "Plano & Orçamento",
        text: "Escopo, prazo e valor claros, por escrito.",
      },
      {
        n: "04",
        title: "Execução Limpa",
        text: "Equipe na obra, no prazo, sem bagunça.",
      },
      {
        n: "05",
        title: "Entrega & Garantia",
        text: "Ambiente pronto no dia combinado.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Quem já contratou",
    title: "A obra que termina como prometido.",
    items: [
      {
        quote:
          "Acabamento impecável e, principalmente, obra limpa e no prazo. Não tive dor de cabeça em nenhuma etapa.",
        name: "Cliente residencial",
        role: `Reforma de apartamento · ${cidade}`,
      },
      {
        quote:
          "Executaram o projeto do arquiteto com fidelidade total. Sancas e iluminação ficaram exatamente como no desenho.",
        name: "Cliente residencial",
        role: `Casa em construção · ${cidade}`,
      },
      {
        quote:
          "Dividiram nosso escritório inteiro sem parar a operação. Organização e prazo de quem leva a sério.",
        name: "Cliente corporativo",
        role: `Escritório comercial · ${cidade}`,
      },
    ],
  },

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Tudo claro antes de começar.",
    items: [
      {
        q: "Qual o prazo da obra?",
        a: "Depende do escopo, mas você recebe o prazo por escrito antes de começar — e a gente cumpre.",
      },
      {
        q: "Vocês fazem visita técnica?",
        a: "Sim. Vamos até o local medir e diagnosticar antes de qualquer orçamento.",
      },
      {
        q: "Atendem empresas?",
        a: "Sim. Atendemos projetos residenciais e corporativos, com escritórios e arquitetos.",
      },
      {
        q: "Como funciona o orçamento?",
        a: "Após a visita, enviamos escopo, prazo e valor claros. Sem surpresa no meio da obra.",
      },
      {
        q: "Trabalham com projeto de arquiteto?",
        a: "Sim. Executamos com fidelidade ao projeto e dialogamos direto com o profissional.",
      },
      {
        q: "Atendem qual região?",
        a: has(CIDADE)
          ? `${CIDADE.trim()} e região.`
          : "Consulte sua região no WhatsApp.",
      },
    ],
  },

  finalCta: {
    title: "Pronto para abrir um ambiente melhor?",
    sub: "Conte seu projeto. Em poucas horas você recebe um diagnóstico e um caminho claro.",
    ctaWhatsapp: "Falar no WhatsApp",
    ctaQuote: "Solicitar Orçamento",
    microcopy: has(CIDADE)
      ? `Atendimento ${CIDADE.trim()} e região · resposta no mesmo dia útil.`
      : "Resposta no mesmo dia útil.",
  },

  // Estados reutilizáveis e label de placeholder de imagem.
  states: {
    success: "Recebido. Entramos em contato pelo WhatsApp em breve.",
    error: "Informe um WhatsApp válido para conseguirmos te responder.",
    loading: "Enviando…",
    imagePlaceholder: "[ FOTO — substituir ]",
  },

  footer: {
    blurb:
      "Drywall e construção a seco com padrão de arquitetura. Forros, sancas, divisórias e acabamentos para projetos residenciais e corporativos.",
    rights: "Todos os direitos reservados.",
    region: has(CIDADE)
      ? `Atendimento em ${CIDADE.trim()} e região.`
      : "Consulte sua região de atendimento.",
  },
} as const;

export type Content = typeof content;
