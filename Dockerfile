# syntax=docker/dockerfile:1

# ----------------------------------------------------------------------------
# Fortunato Decorações — imagem de produção Next.js 16 (output: standalone)
# Multi-stage: deps -> builder -> runner. Pensado para EasyPanel (build por
# Dockerfile, sem Nixpacks). O runner roda o server.js mínimo do standalone.
# ----------------------------------------------------------------------------

FROM node:22-alpine AS base
# libc6-compat: compatibilidade glibc (necessária p/ sharp do next/image em Alpine)
RUN apk add --no-cache libc6-compat

# --- Dependências (cacheável: só refaz se package*.json mudar) ---------------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- Build ------------------------------------------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- Runner (imagem final) --------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuário sem privilégios
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# public (imagens, logo, svgs) + saída standalone + assets estáticos
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
