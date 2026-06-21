# Design System — Multi-Stack Web Components

Design System consumível por múltiplos stacks (React, Angular, Vue) usando **Web Components (Stencil)** como camada única de componentes. Veja o [PRD](PRD_Design_System_WebComponents.md) para visão, decisões e Definition of Done.

## Arquitetura do monorepo (Nx + npm workspaces)

```
packages/
  tokens/      → Design tokens (Style Dictionary) → CSS Custom Properties + JS/TS
  components/  → Web Components (Stencil) — fonte única
  react/       → Wrappers React   (gerados pelo Stencil)
  angular/     → Wrappers Angular (gerados pelo Stencil)
  vue/         → Wrappers Vue     (gerados pelo Stencil)
  docs/        → Storybook (documentação viva + a11y addon)
```

## Pipeline (token → componente → wrapper → story)

1. `tokens` lê `tokens/*.json` (export das Figma Variables) e gera `build/tokens.css` + `build/index.js` (+ tipos).
2. `components` (Stencil) implementa os Web Components consumindo **apenas tokens** (CSS vars), e via *output targets* gera os wrappers React/Angular/Vue automaticamente.
3. `docs` (Storybook) registra os custom elements e importa os tokens globais.

## Scripts

```bash
npm run build            # build de todos os pacotes (nx run-many)
npm run build:tokens     # só os tokens
npm run build:components # Stencil + geração de wrappers
npm run storybook        # Storybook em dev (porta 6006)
```

## Stack

| Camada | Ferramenta |
|--------|-----------|
| Monorepo | Nx + npm workspaces |
| Tokens | Style Dictionary v4 |
| Componentes | Stencil v4 |
| Wrappers | @stencil/{react,angular,vue}-output-target |
| Docs | Storybook 8 (web-components-vite) + addon-a11y |

> O componente `ds-hello-world` é apenas um **smoke test** do pipeline (não faz parte do inventário do DS). Os componentes reais entram via Prompt 4, seguindo a Definition of Done do PRD.
