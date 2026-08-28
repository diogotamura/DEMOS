---
name: testing-asaas-precos
description: How to run and browser-test the asaas-precos-taxas Vite/React demo (pricing page + card fee simulator), including viewport, console and modal checks.
---

# Testing `asaas-precos-taxas`

## Run it
```bash
cd asaas-precos-taxas && npm install && npm run dev   # http://localhost:5173
```
No auth, no backend, no secrets. A dev server may already be running on 5173 — reuse it
(`curl -s -o /dev/null -w "%{http_code}" http://localhost:5173`) instead of starting a second one.

## Devin Secrets Needed
None.

## Reaching the feature
- Simulator modal: scroll to the **Recebimento** section → button **"Simular venda no cartão"**
  (rendered in `src/App.tsx`, modal in `src/components/SimulatorModal.tsx`).
- Section anchors: sticky nav (`src/components/SectionNav.tsx`) links to ids
  `servicos-gratuitos, recebimento, asaas-tap, notificacoes, antecipacao, nota-fiscal, saques`.

## Verifying simulator numbers instead of eyeballing
Fee constants live in `src/data/fees.ts` (`CREDIT_CARD_TIERS`, `CREDIT_CARD_FIXED_FEE = 0.49`,
`ANTICIPATION_MONTHLY_PERCENT = 1.25`) and the math in `src/lib/simulator.ts`:
`percentFee = amount * tier.percent/100`, `anticipationFee = amount * 1.25% * (installments+1)/2`.
Precompute the expected pt-BR strings (e.g. R$ 1.000,00 @ 6x → 3,49%, R$ 34,90 + R$ 0,49,
líquido R$ 964,61) and assert on them — a broken build will show different digits.
Derive expectations from `simulator.ts` itself, and separately compare the tier label and
percentage against the pricing table rendered on the page.

## Mobile viewport
Resize the actual window rather than devtools device mode:
`wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz && wmctrl -r :ACTIVE: -e 0,50,0,420,900`
and maximize again with `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.

## Console checks
If `browser_console` reports "Could not connect to Chrome via CDP" (happens when Chrome was
launched manually with `google-chrome --new-window ...`), fall back to pressing **F12** and
reading the Console panel from a screenshot. Set the level filter to **Verbose** to reveal
messages hidden behind the "N hidden" badge. Expected clean-state output for this app:
`[vite] connecting…/connected` plus the React DevTools suggestion, and no errors.
The DevTools **Issues** tab may show an informational "A form field element should have an id
or name attribute" for the "Antecipar recebimento" checkbox — informational, not a console error.
