# Fortunato Decorações — Direção de Design (aprovada)

> Fonte da verdade de design para a implementação. Briefing original: `CLAUDE.md`. Logo: `public/logo.png`.
> Stack real: Next.js 16 (App Router) + React 19 + TS + Tailwind v4 (config via `@theme` em CSS) + npm. Instalar: `framer-motion`, `lucide-react`.

## Conceito-assinatura — "A Soleira" (The Threshold)
A logo é uma porta/painel que se abre para um ambiente melhor. A página inteira encena uma travessia de limiar:
1. **Seam-line (junta-guia):** linha vertical 2px azul `#1658B3` à esquerda de cada eyebrow de seção, que se "desenha" de baixo p/ cima no scroll. Também atua como indicador de progresso na borda esquerda da viewport.
2. **Aberturas de painel:** transições com wipe sutil via clip-path entre algumas seções.
3. **Reveal Antes/Depois:** o slider é o limiar literal — arrastar = "abrir o ambiente". Interação central.

## Marca
- **Arquétipo:** Criador (materializa visões, ofício, resultado impecável) + Governante (autoridade técnica, padrão, alto padrão). Competência tranquila, sem gritar.
- **Tom de voz:** sóbrio, técnico-elegante, frases curtas, afirmações. Vende **alívio de risco** (sem bagunça/atraso/retrabalho, junta invisível), não gesso. Nunca exclamação dupla, emoji ou jargão de marketing.
- **Jornada emocional:** Hero=Interesse → Credibilidade+Portfólio=Confiança → Antes/Depois+Serviços=Desejo → **Diferenciais+Processo=Segurança (pico, onde fecha)** → Depoimentos+FAQ→ CTA=Ação.

## Tipografia (next/font, self-host, display swap)
- **Oswald** (condensada, arquitetônica) — H1/H2 e números grandes. Máx. 1 bloco Oswald por dobra. Pesos: 600.
- **Montserrat** — eyebrows/labels/botões/captions. Pesos: 600/700.
- **Inter** — corpo/UI. Pesos: 400/500/600.

| Token | Fonte/Peso | Tamanho (clamp) | LH | Tracking | Caso |
|---|---|---|---|---|---|
| display-hero (H1) | Oswald 600 | clamp(2.75rem,6vw,5.5rem) | 0.98 | -0.01em | UPPERCASE |
| h2 | Oswald 600 | clamp(2rem,4vw,3.5rem) | 1.02 | -0.005em | UPPERCASE |
| h3 | Montserrat 700 | clamp(1.25rem,2vw,1.75rem) | 1.15 | 0 | Title |
| stat-number | Oswald 600 | clamp(2.5rem,5vw,4rem) | 1.0 | -0.01em | — |
| eyebrow | Montserrat 600 | 13px | 1.3 | 0.20em | UPPERCASE |
| body-lg | Inter 400 | clamp(1.0625rem,1.4vw,1.1875rem) | 1.6 | 0 | — |
| body | Inter 400 | 16px | 1.6 | 0 | — |
| body-sm | Inter 400 | 15px | 1.55 | 0 | — |
| caption | Inter 500 / Montserrat 600 | 13px | 1.4 | 0.04em/0.12em | — |
| button | Montserrat 600 | 15px | 1 | 0.04em | UPPERCASE opc. |

## Paleta — tokens e papéis
Azul `#1658B3` é a **ÚNICA cor de ação**. Sem segundo accent (verde só no botão WhatsApp por convenção). ~70% branco/surface, 20% ink, 10% azul.
```
--blue-600  #1658B3  AÇÃO: botões primários, links, foco, seam-line, ícones ativos
--blue-800  #0D3E85  PROFUNDIDADE: fundos escuros (hero overlay, CTA final, footer, depoimentos), hover primário
--blue-900  #0B2A5C  topo de gradientes escuros, sombra azul
--gray-400  #A7A9AC  texto secundário grande, captions, hairlines, disabled (NÃO usar p/ texto de leitura sobre branco)
--white     #FFFFFF  fundo primário
--ink       #10233F  texto/títulos sobre claro (charcoal azulado, nunca preto puro)
--surface   #F5F7FA  seções alternadas, cards
--surface-2 #EAEEF4  blocos de imagem placeholder
--tint      #E8F0FB  destaque suave (badges, hover de card)
--line      #DFE4EC  hairline 1px
```
Contraste: ink/branco ~13:1; #1658B3/branco ~5.6:1 (AA); branco/#0D3E85 ~9:1.

## Espaçamento / grid / forma
- Container max 1280px; gutter 24px mobile / 48px ≥lg. Grid 12 col, gap 24–32px.
- Ritmo de seção: `padding-block: clamp(6rem,12vw,11rem)`. Espaço em branco = luxo.
- Base 8px: 4·8·12·16·24·32·48·64·96·128·176.
- Raios: sm 4px (botões/inputs/badges), md 8px (cards, parcimônia), **imagens/blocos editoriais = 0px (aresta viva = esquadro drywall)**.
- Sombras (azul-tingidas, sutis): sm `0 1px 2px rgba(13,62,133,.06)`; md `0 18px 44px -16px rgba(13,62,133,.20)`; lg `0 32px 70px -24px rgba(11,42,92,.28)`. Elevação primeiro por hairline 1px, depois sombra.

## Imagens (sem fotos reais agora)
Placeholder premium: bloco `--surface-2` com gradiente diagonal azul + ícone de linha central + label `[ FOTO — substituir ]`. Componente `ImagePlaceholder` (depois vira `<Image/>`). Aresta viva. Hover zoom scale(1.03) 600ms ease-out, overflow hidden. Caption editorial: hairline + Montserrat tracking 0.12em.
Specs p/ fotos reais: Hero 16:9 horizontal; Portfólio destaque 4:5/3:4 vertical; secundário 3:2; Antes/Depois 16:9 mesmo enquadramento; Depoimentos 1:1; CTA final 21:9.

## Ícones
Lucide, linha stroke 1.5px, geométricos, cantos retos, mono `--ink`/`--blue-600`. Sem ícones preenchidos coloridos.

## Motion (Framer Motion, sutil)
- Scroll reveal: opacity 0→1 + translateY(20→0), 600ms cubic-bezier(.2,.7,.2,1), stagger 80ms, `whileInView` once.
- Parallax discreto: hero e CTA final ~8% no scroll (transform, composited).
- Hover: imagem zoom 1.03; botão primário fill desliza #1658B3→#0D3E85; links underline cresce da esquerda; cards sobem 4px + sombra md.
- Seam-line desenha-se (scaleY) ao entrar na viewport.
- `prefers-reduced-motion: reduce` → corta parallax/reveals, mantém fade instantâneo. Não atrasar leitura. Framer só em client components; H1 NÃO depende de motion (LCP).

## Estrutura da página (ordem)
Header (sticky transparente→sólida) → Hero (100vh) → Credibilidade (4 stat-cards) → Portfólio (editorial assimétrico, NÃO grid) → Antes/Depois (slider) → Serviços (6 cards: ícone+título+benefício+resultado) → Diferenciais (split texto+imagem) → Processo (timeline 5 etapas 01–05) → Depoimentos (fundo escuro, aspa grande) → FAQ (acordeão 2 col) → CTA final (full-bleed escuro, parallax) → Footer (azul-900) + WhatsApp flutuante (surge após hero).

## Copy aprovada
- **Hero H1 (APROVADA):** "Transformamos espaços em ambientes que valorizam o seu imóvel."
  - Eyebrow: `DRYWALL · CONSTRUÇÃO A SECO`
  - Sub: "Drywall, forros e sancas executados com padrão de arquitetura — para projetos residenciais e corporativos."
  - CTAs: `Solicitar Orçamento` (primário) · `Ver Projetos` (secundário)
  - Stats com fallback: preenchido "{{ANOS_MERCADO}}+ anos de obra fina · {{PROJETOS_ENTREGUES}}+ projetos entregues · Padrão Fortunato"; vazio "Obra fina · Equipe própria · Padrão Fortunato".
- **Credibilidade** — eyebrow `POR QUE FORTUNATO`. Cards: "{{PROJETOS_ENTREGUES}}+ Projetos entregues" (fallback "Projetos residenciais e corporativos") · "{{ANOS_MERCADO}}+ Anos de mercado" (fallback "Experiência em obra fina") · "100% no prazo combinado" · "Atendimento especializado".
- **Portfólio** — eyebrow `PROJETOS`, headline "Cada ambiente entregue com o mesmo padrão." Captions: `RESIDENCIAL · FORRO + SANCA`, `CORPORATIVO · DIVISÓRIAS`. CTA `Ver todos os projetos →`.
- **Antes/Depois** — eyebrow `TRANSFORMAÇÃO`, headline "De espaço cru a ambiente pronto." Microcopy "Arraste para ver a transformação." Caption "Mesmo ângulo. Mesma luz. Outro padrão."
- **Serviços** — eyebrow `O QUE FAZEMOS`, headline "Soluções em construção a seco, do projeto à entrega."
  - Drywall — "Divisórias e paredes secas, rápidas e sem quebra-quebra." → Resultado: ambientes redesenhados em dias, não semanas.
  - Forros — "Forros lisos e acústicos, sem trinca." → Resultado: teto perfeito e mais conforto.
  - Sancas — "Sancas e iluminação embutida sob medida." → Resultado: ambiente com cara de projeto assinado.
  - Revestimentos — "Acabamentos que valorizam cada parede." → Resultado: superfícies impecáveis e duráveis.
  - Acabamentos — "O detalhe fino que faz a diferença." → Resultado: junta invisível, nada de retrabalho.
  - Reformas — "Reformas residenciais e corporativas completas." → Resultado: espaço renovado, no prazo combinado.
- **Diferenciais** — eyebrow `O PADRÃO FORTUNATO`, headline "Por que contratar quem leva acabamento a sério." Itens: planejamento antes de qualquer corte de placa; equipe própria especializada em obra fina; acabamento refinado (junta invisível, parede sem onda); obra organizada e limpa todos os dias; cronograma cumprido — você sabe quando termina.
- **Processo** — eyebrow `COMO TRABALHAMOS`, headline "Do primeiro contato à entrega limpa." 01 Contato "Você nos conta o projeto." · 02 Visita Técnica "Medição e diagnóstico no local." · 03 Plano & Orçamento "Escopo, prazo e valor claros, por escrito." · 04 Execução Limpa "Equipe na obra, no prazo, sem bagunça." · 05 Entrega & Garantia "Ambiente pronto no dia combinado."
- **Depoimentos** — eyebrow `QUEM JÁ CONTRATOU`, headline "A obra que termina como prometido." Placeholders editáveis; atribuição "Nome — Tipo de projeto · {{CIDADE}}". Avatar genérico até fotos reais.
- **FAQ** — eyebrow `DÚVIDAS FREQUENTES`:
  - Qual o prazo da obra? "Depende do escopo, mas você recebe o prazo por escrito antes de começar — e a gente cumpre."
  - Vocês fazem visita técnica? "Sim. Vamos até o local medir e diagnosticar antes de qualquer orçamento."
  - Atendem empresas? "Sim. Atendemos projetos residenciais e corporativos, com escritórios e arquitetos."
  - Como funciona o orçamento? "Após a visita, enviamos escopo, prazo e valor claros. Sem surpresa no meio da obra."
  - Trabalham com projeto de arquiteto? "Sim. Executamos com fidelidade ao projeto e dialogamos direto com o profissional."
  - Atendem qual região? "{{CIDADE}} e região." (fallback se vazio: "Consulte sua região no WhatsApp.")
- **CTA final** — headline "Pronto para abrir um ambiente melhor?" Sub "Conte seu projeto. Em poucas horas você recebe um diagnóstico e um caminho claro." Botões `Falar no WhatsApp` (verde-whats) + `Solicitar Orçamento`. Microcopy "Atendimento {{CIDADE}} e região · resposta no mesmo dia útil."
- **Estados:** sucesso "Recebido. Entramos em contato pelo WhatsApp em breve."; erro "Informe um WhatsApp válido para conseguirmos te responder."; loading "Enviando…"; placeholder img "[ FOTO — substituir pela imagem real do projeto ]".

## Conversão
Um único objetivo (falar com a Fortunato), 3 portas (orçamento/WhatsApp/visita), zero distração (sem link externo no corpo). CTAs nos pós-picos: Hero → fim Antes/Depois → fim Diferenciais/Processo → CTA final. WhatsApp flutuante surge após o hero, canto inferior direito, com pré-mensagem ("Olá, vim pela página e quero um orçamento para…"), pulso 1x, respeita reduce-motion. Prova social distribuída. Urgência só legítima de agenda ("resposta no mesmo dia útil"), NUNCA contador/vagas. Form mínimo: Nome, WhatsApp, Tipo de projeto (residencial/corporativo), mensagem opcional.

## Componentes + arquivos (blueprint)
```
app/ layout.tsx (fonts, metadata, JSON-LD) · page.tsx (compõe seções) · globals.css (@theme tokens) · opengraph-image.tsx · sitemap.ts · robots.ts
components/layout/ Header.tsx · Footer.tsx · WhatsappFloat.tsx
components/sections/ Hero · Credibility · Portfolio · BeforeAfter · Services · Differentials · Process · Testimonials · Faq · FinalCta
components/ui/ Button (primary|secondary|whatsapp|ghost) · SectionHeading (eyebrow+seam-line+H2) · SeamLine · StatCard (fallback token vazio) · ServiceCard · ProcessStep · TestimonialCard · AccordionItem · ImagePlaceholder · Reveal (whileInView + reduce-motion) · ScrollProgress
lib/ content.ts (TODA copy + tokens) · site-config.ts (nav, links, whatsapp helper) · motion.ts (variants fadeUp/stagger/parallax)
public/ logo.png (+ logo-white.svg p/ header escuro — gerar)
```
- Conteúdo centralizado em `lib/content.ts` com tokens `{{WHATSAPP}}` `{{CIDADE}}` `{{ANOS_MERCADO}}` `{{PROJETOS_ENTREGUES}}` e fallbacks embutidos.
- Seções "burras" (recebem dados de content.ts); primitivos ui reutilizáveis.

## SEO / Performance (Lighthouse > 90)
- Hero `next/image` priority/fetchPriority high/sizes 100vw/AVIF-WebP/blur. Enquanto sem foto, placeholder CSS (LCP leve = H1). H1 não depende de Framer.
- Fontes self-host via next/font, subset latin, só pesos usados, display swap + adjustFontFallback (evita CLS).
- Imagens abaixo da dobra lazy, sizes corretos, aspect-ratio fixo.
- Framer só em client components; seções estáticas = server components.
- metadata completa (title/description com "drywall {{CIDADE}}", OG/Twitter), lang pt-BR. JSON-LD LocalBusiness + FAQPage. H1 único, hierarquia H2. sitemap/robots/canonical. CTAs WhatsApp como `<a href="https://wa.me/...">` (eventos GA4/Meta Pixel no clique). Dimensões explícitas (CLS).

## Pendências
1. `logo-white.svg` para header transparente (gerar a partir do logo.png).
2. Cliente preenche tokens em `lib/content.ts` quando tiver ({{WHATSAPP}}, {{CIDADE}}, números reais).
3. Fotos reais substituem `ImagePlaceholder`.
