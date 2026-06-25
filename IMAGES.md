# Prompts de imagem — Fortunato Decorações

Gerar no Gemini/Imagen. Prompts em inglês (melhor resultado). Manter coerência: mesma
"empresa", fotografia arquitetônica realista, alto padrão, foco em drywall/forro/sanca,
luz natural, paleta fria (branco/cinza/azul), **sem pessoas, sem texto, sem logo**.

Salvar os arquivos em `public/images/` com os nomes indicados. Depois eu troco os
`ImagePlaceholder` por `<Image/>` do Next.

## Estilo base (vale para todas)
> Photorealistic architectural interior photography, high-end modern Brazilian interior,
> minimalist design, drywall details (smooth seamless walls, illuminated cove lighting
> "sanca", clean suspended ceiling "forro"), natural daylight, soft diffused light, cool
> neutral palette of white, light grey and subtle blue tones, matte finishes, full-frame
> 35mm lens, ultra sharp, 8k, editorial real-estate magazine quality.

## Negativo (acrescentar em todas)
> no people, no faces, no text, no watermark, no logo, no signage, no clutter, not messy,
> no distorted geometry, no warped lines, no fisheye, not oversaturated, no HDR halos,
> no cartoon, no illustration, no cgi look.

---

## 1. Hero — `hero.jpg` · 16:9 (horizontal, full-bleed)
> [estilo base] A wide, elegant living room with a multi-level drywall ceiling and a
> continuous illuminated cove (sanca) casting a soft warm glow, a sleek seamless drywall
> partition wall, a large window with calm daylight on the right, the LEFT THIRD of the
> frame intentionally darker / in soft shadow to leave room for white headline text,
> cinematic, sophisticated, serene. Aspect ratio 16:9.

## 2. Portfólio A — `portfolio-1.jpg` · 4:5 (vertical) — "Residencial · Forro + Sanca"
> [estilo base] Vertical composition of a refined living/dining area featuring a
> multi-level drywall ceiling with a continuous illuminated cove (sanca) and recessed
> spotlights, balanced warm-cool light, premium furniture, focus on the flawless seamless
> ceiling finish. Aspect ratio 4:5.

## 3. Portfólio B — `portfolio-2.jpg` · 3:2 (horizontal) — "Corporativo · Divisórias"
> [estilo base] Modern corporate office interior with floor-to-ceiling drywall partition
> walls combined with glass, clean straight lines, neutral palette, bright daylight,
> organized professional workspace, wide horizontal view. Aspect ratio 3:2.

## 4. Portfólio C — `portfolio-3.jpg` · 3:4 (vertical) — "Residencial · Iluminação Embutida"
> [estilo base] Vertical shot emphasizing embedded recessed lighting in a drywall cove
> ceiling at dusk, elegant continuous warm light lines, sophisticated living corner or
> bedroom, moody and refined. Aspect ratio 3:4.

## 5. Portfólio D — `portfolio-4.jpg` · 3:2 (horizontal) — "Corporativo · Forro Acústico"
> [estilo base] Open-plan office with a clean acoustic drywall suspended ceiling, neat
> linear recessed light fixtures, a calm meeting area, bright and airy, wide horizontal
> framing. Aspect ratio 3:2.

## 6. Antes — `antes.jpg` · 16:9 (horizontal)
> [estilo base, exceto o acabamento] A raw room interior mid-renovation: exposed metal
> drywall framing studs, unfinished walls, bare floor, clearly the "before" construction
> stage, neutral daylight, clean and organized site. IMPORTANT: same camera angle, lens
> and framing as the "after" image. Aspect ratio 16:9.

## 7. Depois — `depois.jpg` · 16:9 (horizontal)
> [estilo base] The SAME room now fully finished: smooth painted seamless drywall walls,
> elegant illuminated cove ceiling (sanca), polished floor, tasteful furniture, warm and
> inviting. IMPORTANT: identical camera angle, lens and framing as the "before" image.
> Aspect ratio 16:9.
>
> Dica: gere o "Depois" primeiro e use-o como referência (image-to-image / "same angle")
> para o "Antes", garantindo o mesmo enquadramento.

## 8. Diferenciais — `diferenciais.jpg` · 3:4 (vertical)
> [estilo base] Extreme close-up detail of a flawless seamless drywall corner and joint,
> perfectly smooth matte white wall meeting an illuminated cove, raking grazing light
> revealing the impeccable finish, macro architectural craftsmanship detail. Aspect ratio 3:4.

## 9. Depoimentos — `depo-1.jpg`, `depo-2.jpg`, `depo-3.jpg` · 1:1 (quadrado)
> Recomendo usar AMBIENTES entregues (não rostos gerados por IA — para depoimento real,
> use foto do cliente com autorização).
> - depo-1: [estilo base] Square crop of a cozy finished residential living room with cove
>   lighting, inviting and warm. Aspect ratio 1:1.
> - depo-2: [estilo base] Square crop of an elegant home interior detail with sanca cove
>   lighting on a smooth drywall ceiling. Aspect ratio 1:1.
> - depo-3: [estilo base] Square crop of a modern finished office reception with a drywall
>   feature wall and clean ceiling. Aspect ratio 1:1.

## 10. CTA final — `cta.jpg` · 21:9 (panorâmica, escura)
> [estilo base] Ultra-wide panoramic premium interior at dusk, dramatic illuminated drywall
> cove ceiling lines receding into perspective, moody dark blue tones, luxurious and
> elegant, generous negative space in the center for white text. Aspect ratio 21:9.

---

### Dicas de geração
- Peça ao Gemini a proporção exata ("aspect ratio 16:9"); se ele não respeitar, recorte depois.
- Mantém a MESMA paleta e luz em todas para a página parecer um portfólio único.
- Antes/Depois: mesmo ângulo é o efeito principal do slider — caprichar nisso.
- Exportar em JPG (qualidade ~85) ou WebP; largura ~2000px nas full-bleed (hero/cta),
  ~1400px nas demais. Eu otimizo com next/image depois.
