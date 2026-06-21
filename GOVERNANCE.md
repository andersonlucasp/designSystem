# Governança do Design System

Este documento define **como o Design System é mantido e evolui** — não apenas
como é construído. (Seção 8 do PRD.)

## 1. Papéis

| Papel | Responsabilidade |
|-------|------------------|
| **Mantenedores (Core Team)** | Donos do repositório. Aprovam novos componentes, revisam PRs, definem o roadmap e cuidam dos releases. |
| **Contribuidores** | Qualquer pessoa de um time consumidor que proponha componentes ou mudanças via issue/PR. |
| **Revisores de código** | Pelo menos 1 mantenedor revisa todo PR. Mudanças em tokens ou na API pública exigem 2 aprovações. |
| **Champions de time** | Ponto de contato em cada squad consumidora; levam demandas e feedback ao Core Team. |

> Donos de áreas específicas do código são declarados em [`CODEOWNERS`](.github/CODEOWNERS).

## 2. Fluxo de contribuição

```
Ideia/necessidade
      │
      ▼
Abrir issue (proposta de componente OU bug/melhoria)
      │
      ▼
Triagem do Core Team  ──►  recusado (com justificativa) / backlog
      │ aceito
      ▼
Desenho no Figma (se novo componente)  ──►  revisão de design
      │
      ▼
Implementação em branch + Definition of Done
      │
      ▼
PR  ──►  review (1–2 mantenedores) + CI (build, testes, axe, Chromatic)
      │ aprovado
      ▼
Merge  ──►  changeset gera versão  ──►  publicação no npm
```

### Critério de inclusão de um componente
Um componente só entra no DS se:
- For usado por **mais de um time/produto**, **ou**
- Resolver um **padrão recorrente** já replicado de forma inconsistente.

Antes de criar, **audite o que já existe** para evitar duplicação.

## 3. Definition of Done (resumo)

Todo componente, para ser mergeado, precisa de:
- [ ] Implementado em Stencil, **usando apenas tokens** (sem valores hardcoded)
- [ ] Wrappers React, Angular e Vue gerados
- [ ] Story no Storybook cobrindo variantes e estados
- [ ] Teste de acessibilidade (axe-core) passando — **WCAG 2.1 AA**
- [ ] Navegação por teclado e ARIA validados
- [ ] Snapshot visual aprovado no Chromatic
- [ ] Documentado: props/atributos, slots, eventos customizados

## 4. Política de versionamento e breaking changes

- **SemVer** automatizado via [Changesets](https://github.com/changesets/changesets):
  - `patch` → correções sem mudança de API
  - `minor` → novos componentes/props retrocompatíveis
  - `major` → mudanças que quebram compatibilidade
- Todo PR que altera comportamento deve incluir um **changeset** (`npm run changeset`).
- **Breaking changes** exigem: aviso prévio, entrada destacada no CHANGELOG e,
  quando possível, um caminho de migração.

## 5. Cadência de releases

- **Contínua**: ao mergear o PR "Version Packages", a publicação acontece
  automaticamente. Não há "trem de release" fixo — mudanças prontas e aprovadas
  são publicadas.

## 6. Depreciação e remoção

1. **Marcar como deprecado**: anotar no JSDoc do componente (`@deprecated`) e no
   CHANGELOG, indicando a alternativa recomendada.
2. **Período de transição**: manter o componente funcionando por pelo menos
   **um ciclo major** após a depreciação.
3. **Comunicar** aos times consumidores via canal de feedback (ver abaixo).
4. **Remover** apenas em uma versão **major**, nunca em minor/patch.

## 7. Canal de feedback

- **Issues** do GitHub para bugs e propostas (use os templates).
- **Discussions** / canal interno para dúvidas e alinhamento entre times.
- Champions de time consolidam feedback recorrente e levam ao Core Team.
