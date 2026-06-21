# Guia de Contribuição

Obrigado por contribuir com o Design System! Leia também a [GOVERNANCE.md](GOVERNANCE.md).

## Pré-requisitos

- Node 22+
- npm 10+

## Setup

```bash
git clone https://github.com/andersonlucasp/designSystem.git
cd designSystem
npm install
npm run build        # builda todos os pacotes (nx)
npm run storybook    # abre o Storybook em http://localhost:6006
```

## Estrutura

| Pasta | Conteúdo |
|-------|----------|
| `packages/tokens` | Design tokens (Style Dictionary) |
| `packages/components` | Web Components (Stencil) — **fonte única** |
| `packages/{react,angular,vue}` | Wrappers gerados (não editar à mão) |
| `packages/docs` | Storybook |

> ⚠️ Nunca edite os arquivos em `packages/*/src/generated` — eles são
> regenerados pelo Stencil a cada build dos componentes.

## Criando ou alterando um componente

1. Abra (ou referencie) uma **issue** descrevendo a necessidade.
2. Crie uma branch: `feat/nome-do-componente` ou `fix/descricao`.
3. Implemente em `packages/components/src/components/ds-<nome>/`:
   - `.tsx` + `.css` consumindo **apenas tokens** (CSS Custom Properties).
   - `.spec.ts` (unit) e, para interativos, `.e2e.ts` (incl. axe).
   - Documente props/slots/eventos via JSDoc (`@slot`, `@part`).
4. Adicione uma **story** em `packages/docs/stories/`.
5. Exporte o componente em `packages/components/src/index.ts`.
6. Rode localmente:
   ```bash
   npm run build:components       # gera dist + wrappers + readme
   npx nx run components:test     # specs + e2e
   ```
7. **Registre um changeset**:
   ```bash
   npm run changeset
   ```
8. Abra o PR. O CI roda build, testes, axe e Chromatic.

## Definition of Done

Veja a checklist completa na [GOVERNANCE.md](GOVERNANCE.md#3-definition-of-done-resumo).

## Estilo de commit

Recomendado [Conventional Commits](https://www.conventionalcommits.org/pt-br/):
`feat(button): ...`, `fix(input): ...`, `docs: ...`, `chore: ...`.
