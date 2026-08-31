# Santander — Página inicial (clone de demonstração)

Réplica da página inicial para Pessoa Física do [Santander](https://www.santander.com.br/) construída com Vite + React + TypeScript + Tailwind.

Uso apenas para demonstração técnica. Não afiliado ao Santander.

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:5174
npm run build   # tsc + build de produção
npm run lint
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/data/home.ts` | Textos, atalhos e links da página |
| `src/lib/auth.ts` | Formatação e fluxo de acesso pelo CPF |
| `src/components/` | Cabeçalho, navegação, seções da página e rodapé |
