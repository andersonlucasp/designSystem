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

## Publicação (npm + Changesets)

O versionamento é semântico e automatizado com [Changesets](https://github.com/changesets/changesets).

```bash
# 1. Ao terminar uma mudança, registre o impacto (patch/minor/major):
npm run changeset

# 2. (CI) Aplica as versões e atualiza os CHANGELOGs dos pacotes:
npm run version-packages

# 3. (CI) Builda e publica os pacotes no npm:
npm run release
```

No CI, o workflow [`release.yml`](.github/workflows/release.yml) abre um PR
"Version Packages" a cada push na `main`; ao mergeá-lo, publica no npm.
Requer o secret **`NPM_TOKEN`** (npmjs.com → Access Tokens → Automation).

> Os 5 pacotes (`tokens`, `components`, `react`, `angular`, `vue`) têm versão
> sincronizada (grupo `fixed`); `@andersonlucasp/docs` não é publicado (local apenas).

## Stack

| Camada | Ferramenta |
|--------|-----------|
| Monorepo | Nx + npm workspaces |
| Tokens | Style Dictionary v4 |
| Componentes | Stencil v4 |
| Wrappers | @stencil/{react,angular,vue}-output-target |
| Docs | Storybook 8 (web-components-vite) + addon-a11y |

> O componente `ds-hello-world` é apenas um **smoke test** do pipeline (não faz parte do inventário do DS). Os componentes reais entram via Prompt 4, seguindo a Definition of Done do PRD.

## Governança e contribuição

- [GOVERNANCE.md](GOVERNANCE.md) — papéis, fluxo de contribuição, versionamento, depreciação
- [CONTRIBUTING.md](CONTRIBUTING.md) — como rodar o projeto e criar/alterar componentes
- [CHANGELOG.md](CHANGELOG.md) — histórico de mudanças
