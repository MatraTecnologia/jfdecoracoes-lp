/**
 * Configuração do quiz de qualificação de lead. As respostas viram uma mensagem
 * pré-preenchida no WhatsApp (sem backend) — o "lead pronto" chega na conversa.
 */

export type QuizOption = { value: string; label: string; hint?: string };

export type QuizStep = {
  id: string;
  question: string;
  helper?: string;
  type: "single" | "multi";
  options: QuizOption[];
};

export const quizSteps: readonly QuizStep[] = [
  {
    id: "tipo",
    question: "Seu projeto é...",
    helper: "Pra direcionar pro time certo.",
    type: "single",
    options: [
      { value: "Residencial", label: "Residencial", hint: "Casa, apê, reforma" },
      { value: "Corporativo", label: "Corporativo", hint: "Escritório, loja, empresa" },
    ],
  },
  {
    id: "servicos",
    question: "O que você precisa?",
    helper: "Pode marcar mais de um.",
    type: "multi",
    options: [
      { value: "Drywall / Divisórias", label: "Drywall / Divisórias" },
      { value: "Forro", label: "Forro" },
      { value: "Sanca / Iluminação", label: "Sanca / Iluminação" },
      { value: "Revestimentos / Acabamento", label: "Revestimentos / Acabamento" },
      { value: "Reforma completa", label: "Reforma completa" },
      { value: "Ainda não sei", label: "Ainda não sei" },
    ],
  },
  {
    id: "etapa",
    question: "Em que etapa você está?",
    type: "single",
    options: [
      { value: "Só planejando", label: "Só planejando" },
      { value: "Já tenho o projeto", label: "Já tenho o projeto" },
      { value: "Obra em andamento", label: "Obra em andamento" },
      { value: "Pronto pra começar", label: "Pronto pra começar" },
    ],
  },
  {
    id: "prazo",
    question: "Quando pretende começar?",
    type: "single",
    options: [
      { value: "O quanto antes", label: "O quanto antes" },
      { value: "Em até 30 dias", label: "Em até 30 dias" },
      { value: "1 a 3 meses", label: "1 a 3 meses" },
      { value: "Só pesquisando", label: "Só pesquisando" },
    ],
  },
] as const;

export type QuizAnswers = Record<string, string | string[]>;

const fmt = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v.join(", ") : (v ?? "—");

/** Monta a mensagem de WhatsApp com o resumo das respostas + nome do lead. */
export const buildQuizMessage = (answers: QuizAnswers, name: string) => {
  const linhas = quizSteps.map((s) => `• ${rotulo[s.id]}: ${fmt(answers[s.id])}`);
  const nome = name.trim();
  return [
    "Olá! Vim pela página da Fortunato e quero um orçamento. 🙂",
    "",
    ...linhas,
    nome ? `• Nome: ${nome}` : "",
    "",
    "Pode me ajudar?",
  ]
    .filter((l, i, arr) => !(l === "" && arr[i - 1] === ""))
    .join("\n");
};

/** Rótulos curtos para cada passo na mensagem final. */
const rotulo: Record<string, string> = {
  tipo: "Projeto",
  servicos: "Preciso de",
  etapa: "Etapa",
  prazo: "Início",
};
