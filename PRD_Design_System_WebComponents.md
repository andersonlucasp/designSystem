# PRD: Design System Multi-Stack com Web Components

> Estrutura deste PRD alinhada às categorias do Design System Checklist (designsystemchecklist.com): Marca, Fundamentos, Componentes, Acessibilidade, Documentação, Processo/Governança e Ferramentas. Não consegui extrair o texto completo de cada item do checklist (o site renderiza via JavaScript e bloqueia leitura automatizada), então mapeei o PRD pelas categorias confirmadas. Recomendo abrir o checklist ao lado e marcar item a item dentro de cada seção correspondente abaixo.

## 1. Visão Geral

**Objetivo:** construir um Design System do zero, consumível por múltiplos times com stacks diferentes (React, Angular, Vue, etc.), usando Web Components como camada de componentes e o Figma MCP como ponte entre design e código dentro do Claude Code.

**Problema que resolve:** times com stacks diferentes hoje recriam componentes de forma isolada, gerando inconsistência visual e retrabalho.

**Contexto de simulação:** este PRD reproduz um cenário real de empresa multi-stack (referência: ambiente Itaú), mas é executado como projeto pessoal/portfólio.

---

## 2. Marca e Princípios

_(categoria "Brand" do checklist: garante que o DS carrega a identidade da marca, não só componentes soltos)_

- [ ] Princípios de design definidos (ex: clareza, consistência, eficiência) que vão guiar decisões de componente
- [ ] Paleta de cor derivada da identidade visual de referência, sem cores redundantes
- [ ] Voz e tom definidos para textos do próprio DS (mensagens de erro, copy de componentes, documentação)
- [ ] Terminologia padronizada (glossário de nomes: "Button" vs "Btn", "Modal" vs "Dialog", etc.)
- [ ] Esses princípios documentados como página única de referência, antes de qualquer componente ser construído

---

## 3. Fundamentos (Design Tokens)

_(categoria "Foundations": a base que todo componente consome)_

- [ ] Cor: paleta primitiva + paleta semântica (ex: `color-primary` aponta para um primitivo)
- [ ] Tipografia: escala tipográfica (tamanho, peso, line-height) versionada
- [ ] Espaçamento: unidade base e escala (ex: múltiplos de 4px ou 8px)
- [ ] Grid e breakpoints responsivos
- [ ] Ícones: biblioteca única, com critério de quando criar um novo ícone
- [ ] Contraste de cor validado contra WCAG AA já na definição da paleta, não depois
- [ ] Tokens exportados do Figma (Variables) como fonte única de verdade

**Stack:** Style Dictionary transforma os tokens do Figma em CSS Custom Properties, JSON e tipos TypeScript, consumidos por todos os componentes.

---

## 4. Componentes

_(categoria "Components")_

- [ ] Critério de inclusão: um componente só entra no DS se for usado por mais de um time/produto, ou se resolver um padrão recorrente
- [ ] Inventário inicial de componentes (auditoria do que já existe nos produtos atuais, pra evitar recriar do zero o que já está consolidado)
- [ ] Cada componente cobre: variantes visuais, estados (hover, focus, disabled, loading, erro), e responsividade
- [ ] Composição: documentar quando um componente pode ser combinado com outro (ex: Input dentro de FormField)

### Definition of Done por componente

- [ ] Implementado em Stencil, usando apenas tokens (sem valores hardcoded)
- [ ] Wrapper gerado para React, Angular e Vue
- [ ] Story no Storybook cobrindo todas as variantes e estados
- [ ] Teste de acessibilidade (axe-core) passando
- [ ] Snapshot visual aprovado no Chromatic
- [ ] Documentado: props/atributos, slots, eventos customizados

---

## 5. Acessibilidade

_(categoria própria no checklist, não é só um item dentro de componente)_

- [ ] Critério mínimo: WCAG 2.1 AA em todos os componentes
- [ ] Navegação por teclado testada em cada componente interativo
- [ ] Contraste de cor validado nos tokens (seção 3) e revalidado visualmente por componente
- [ ] Suporte a leitor de tela (atributos ARIA corretos nos Web Components)
- [ ] Teste automatizado (axe-core) rodando em CI, bloqueando merge se falhar
- [ ] Teste manual com leitor de tela em pelo menos os componentes de maior uso (Button, Input, Modal)

---

## 6. Stack Tecnológica (Ferramentas)

### 6.1 Camada de componentes: Stencil

**Recomendação: Stencil (compilador da Ionic) em vez de Lit.**

Justificativa: o requisito central deste projeto é multi-stack. Stencil compila para Web Components padrão, mas também gera automaticamente wrappers nativos por framework (React, Angular, Vue) a partir do mesmo código fonte, via output targets. Cada time consome o componente com a sintaxe que já conhece, sem manutenção paralela manual.

Lit é mais leve, mas exige criar e manter wrappers de framework manualmente. Dado o requisito de multi-stack real, esse custo recorrente pesa contra o Lit aqui.

Trade-off aceito: Stencil tem curva de aprendizado maior e bundle de runtime levemente superior ao Lit puro. Aceitável dado o ganho em DX multi-stack.

### 6.2 Estrutura de projeto

- Monorepo (Nx ou Turborepo), com build incremental e cache
- Pacotes: `tokens`, `components` (core Web Components), `react`, `angular`, `vue` (wrappers gerados), `docs` (Storybook)

### 6.3 Publicação

- Registry: npm público (portfólio) ou privado tipo GitHub Packages/Verdaccio (simulando ambiente corporativo)
- Versionamento semântico automatizado (Changesets)

### 6.4 Banco de dados

**Decisão: nenhum banco de dados na Fase 1.**

O DS nessa fase é um artefato estático e versionado (pacote publicado), não um serviço com estado. Banco de dados só se justifica quando existe necessidade de dado mutável em runtime (governança, analytics, theming dinâmico por tenant), o que fica para a Fase 2.

Quando a Fase 2 acontecer: banco **relacional (PostgreSQL)**, porque os dados de governança (componente, versão, squad consumidora, status de adoção) têm relações estruturadas entre si.

---

## 7. Documentação

_(categoria própria no checklist: cobre não só Storybook, mas guidelines de uso)_

- [ ] Storybook como documentação viva de cada componente (props, variantes, estados)
- [ ] Guidelines de uso por componente: quando usar, quando não usar, exemplos de composição
- [ ] Changelog público por versão (o que mudou, o que quebra compatibilidade)
- [ ] Guia de início rápido (instalação do pacote por framework: React, Angular, Vue)
- [ ] Documentação dos princípios de marca (seção 2) acessível no mesmo lugar

**Hospedagem recomendada: Chromatic.** Mantido pelo time do Storybook, deploy automático por PR, inclui teste de regressão visual nativo (compara snapshots a cada mudança), free tier suficiente para portfólio/projeto pessoal.

Alternativa sem regressão visual: GitHub Pages, gratuito, mas sem diff visual automático.

---

## 8. Processo e Governança

_(categoria "Process": como o DS é mantido e evolui, não só construído)_

- [ ] Papéis definidos: quem aprova um novo componente, quem revisa PRs no repositório do DS
- [ ] Fluxo de contribuição: como um time consumidor propõe um componente novo ou uma mudança
- [ ] Canal de feedback entre times consumidores e o time mantenedor do DS
- [ ] Política de versionamento e breaking changes (semver, comunicação prévia de depreciação)
- [ ] Cadência de releases (contínua vs. por sprint/ciclo)
- [ ] Critério de depreciação e remoção de componente

---

## 9. Integração com Figma MCP

### 9.1 O que o MCP entrega hoje

O Figma MCP (`get_design_context`) retorna, por padrão, uma representação estruturada em **React + Tailwind**. É o ponto de partida, não a saída final: o agente pode adaptar via prompt, mas não há suporte nativo a Web Components.

### 9.2 Implicação prática

1. MCP extrai tokens (variáveis Figma) e estrutura do componente
2. Claude Code usa essa estrutura como referência de layout/spacing/variantes
3. A implementação final em Stencil é escrita manualmente orientada por esse contexto, não copiada diretamente da saída React

### 9.3 Code Connect

Configurar Code Connect mapeando cada componente Figma ao componente Stencil correspondente, reduzindo a adivinhação do agente. Os snippets de exemplo precisam ser escritos manualmente no padrão Stencil/Web Components, já que os exemplos prontos da ferramenta são orientados a frameworks populares.

### 9.4 Limitação a documentar

Sem Code Connect configurado, o MCP devolve dados genéricos de layout. A precisão da geração depende de quão bem nomeados estão componentes, variáveis e camadas no arquivo Figma.

---

## 10. Fluxo de Trabalho no Claude Code

1. Importar tokens do Figma (via MCP) → gerar/atualizar JSON de tokens
2. Rodar Style Dictionary → gerar CSS variables e tipos
3. Selecionar componente no Figma → MCP extrai contexto (layout, variantes, estados)
4. Claude Code implementa o componente em Stencil, usando os tokens já gerados
5. Gerar story no Storybook para cada variante/estado
6. Gerar testes (unitários + acessibilidade) por componente
7. Publicar no Chromatic para revisão visual antes do merge

---

## 11. Roadmap

| Fase    | Entrega                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1 (MVP) | Marca/princípios documentados, tokens, 8 a 12 componentes core, Storybook publicado, wrappers React/Angular/Vue, acessibilidade AA |
| 2       | Backend de governança (PostgreSQL), painel de tokens, analytics de adoção                                                          |
| 3       | Theming multi-tenant em runtime                                                                                                    |

---

## 12. Riscos

- Saída do MCP é React-first: requer disciplina para não copiar estrutura React 1:1 em Stencil
- Sem Code Connect bem configurado, qualidade da geração cai bastante
- Stencil tem comunidade menor que React puro: documentação e exemplos de terceiros são mais escassos
- Seção de Processo/Governança (item 8) tende a ser negligenciada em projeto pessoal, mas é justamente o que diferencia um DS real de uma biblioteca de componentes solta

---

## 13. Métricas de sucesso

- Número de componentes publicados e consumidos por mais de um framework
- Tempo médio de implementação de um componente novo (do Figma ao pacote publicado)
- Zero regressões visuais não detectadas (validado via Chromatic)
- Cobertura de acessibilidade (% de componentes validados em AA)
