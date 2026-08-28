# Asaas — Preços e Taxas (clone de demonstração)

Réplica da página [asaas.com/precos-e-taxas](https://www.asaas.com/precos-e-taxas) construída com Vite + React + TypeScript + Tailwind, incluindo um simulador de vendas no cartão de crédito.

Uso apenas para demonstração técnica. Não afiliado ao Asaas.

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # tsc + build de produção
npm run lint
```

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `src/data/fees.ts` | Tabelas de preços e textos da página |
| `src/lib/simulator.ts` | Cálculo de taxas do simulador |
| `src/components/` | Seções da página e o modal do simulador |

O simulador aplica, sobre o valor da venda, a taxa percentual da faixa de parcelamento correspondente, a tarifa fixa por transação e, opcionalmente, a taxa de antecipação.
