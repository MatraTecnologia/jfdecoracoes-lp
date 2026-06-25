import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera .next/standalone (server.js mínimo + node_modules tracejados) para a
  // imagem Docker rodar sem instalar dependências em produção.
  output: "standalone",
};

export default nextConfig;
