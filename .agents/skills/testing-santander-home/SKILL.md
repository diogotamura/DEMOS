---
name: testing-santander-home
description: How to run and browser-test the santander-home Vite/React static clone of the Santander PF home page, including the header CPF login form and its intentional validation bug.
---

# Testing `santander-home`

## Run it
```bash
cd santander-home && npm install && npm run dev   # http://localhost:5174 (port is pinned in package.json)
```
No auth, no backend, no secrets. A dev server may already be running — reuse it instead of starting a second one:
`curl -s -o /dev/null -w "%{http_code}" http://localhost:5174` (expect 200) and `ps aux | grep vite`.

## Devin Secrets Needed
None.

## Reaching the feature
The only interactive logic is the CPF login form in the white header (`src/components/Header.tsx`):
input `#cpf` + red arrow submit button (`aria-label="Entrar"`). Pressing Enter in the field submits.
Validation/mask/messages live in `src/lib/auth.ts` (`formatCpf`, `isValidCpf`, `login`).
Everything else (`NavBar`, `Hero`, `ShortcutsCarousel`, `ImportantCards`, `SelfServiceGrid`, `Footer`) is static
content driven by `src/data/home.ts`.

## Known intentional bug (demo)
`isValidCpf` computes check digits from `digits[i + 1]` instead of `digits[i]` — an off-by-one that makes
**genuinely valid CPFs be rejected** with `CPF inválido. Confira o número digitado e tente novamente.`
Test data: `111.444.777-35` and `529.982.247-25` are real valid CPFs; `111.111.111-11` is invalid by the
repeated-digit rule. Verify validity independently with a small Node script implementing the standard
mod-11 algorithm rather than trusting the app. The success state (`Redirecionando para o Internet Banking...`,
`role="status"`) is therefore unreachable while the bug is present — don't treat its absence as a test failure.

## Gotcha: no dedicated empty-CPF message
Submitting an empty field falls through to the same generic `CPF inválido...` error. If a spec asks for
something like "Informe seu CPF para continuar.", grep for the string first — if it isn't in `src/`, the
behavior does not exist and the assertion will fail.

## Layout gotcha when clicking the submit button
The header is a flex-wrap row: when the inline error appears the form **rewraps to a second line**, so the
input/button move (~x=250,y=119 with error vs ~x=774,y=82 without at 1600px wide). Take a fresh screenshot
before each click, or just press Enter in the field to submit.

## Mobile viewport
Resize the real window rather than devtools device mode:
`wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz && wmctrl -r :ACTIVE: -e 0,50,0,420,900`
then `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz` to restore.
At narrow widths the search pill and "Pessoa Física" select are intentionally hidden (`hidden md:flex` /
`lg:flex`) and the red nav bar becomes horizontally scrollable — not layout bugs.

## Console checks
`browser_console` works when Chrome was launched by the harness. Clean-state output is only
`[vite] connecting…/connected` + the React DevTools info log. The buffer can appear empty after many
interactions; re-assert by running a tiny `console.log` probe then reading the console again.

## Clipboard/paste testing
`xclip`/`xsel` are not installed. To exercise the paste path, type the value into the field, then
`ctrl+a`, `ctrl+x`, `ctrl+v` — this uses the real clipboard without extra tooling.
