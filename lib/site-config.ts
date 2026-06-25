/**
 * Configuração central do site: tokens preenchíveis pelo cliente, navegação e
 * helper de link do WhatsApp. Toda a copy vive em `content.ts`.
 *
 * Tokens com string vazia disparam os fallbacks embutidos na copy — a página
 * nunca quebra nem mostra "{{TOKEN}}" cru.
 */

export const tokens = {
  /** Número no formato internacional só com dígitos, ex.: "5599999999999". */
  WHATSAPP: "5543996585050",
  /** Cidade/região de atendimento, ex.: "São Paulo". */
  CIDADE: "Londrina e região",
  /** Anos de mercado, ex.: "12". */
  ANOS_MERCADO: "",
  /** Projetos entregues, ex.: "500". */
  PROJETOS_ENTREGUES: "",
} as const;

export const siteConfig = {
  name: "Fortunato Decorações",
  shortName: "Fortunato",
  /** Domínio de produção — ajustar quando definido. */
  url: "https://fortunatodecoracoes.com.br",
  tagline: "Drywall · Construção a Seco",
} as const;

export const nav = [
  { label: "Projetos", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Dúvidas", href: "#faq" },
] as const;

/** Pré-mensagem padrão para abrir a conversa já contextualizada. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vim pela página e quero um orçamento para…";

/**
 * Monta o link wa.me com pré-mensagem. Sem número configurado, retorna um link
 * que abre o WhatsApp com o texto pronto (o cliente preenche o número depois).
 */
export const whatsappLink = (message: string = WHATSAPP_DEFAULT_MESSAGE) => {
  const text = encodeURIComponent(message);
  const digits = tokens.WHATSAPP.replace(/\D/g, "");
  return digits
    ? `https://wa.me/${digits}?text=${text}`
    : `https://wa.me/?text=${text}`;
};
