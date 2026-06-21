# Prompts para Claude Code: Construção do Design System

Use estes prompts em sequência, um de cada vez, dentro do Claude Code. Cada um assume que o PRD (`PRD_Design_System_WebComponents.md`) está acessível no projeto. Ajuste o caminho do arquivo se necessário.

---

## Prompt 0: Contexto inicial (rodar uma vez, no começo da sessão)

```
Leia o arquivo PRD_Design_System_WebComponents.md antes de qualquer ação.
Esse PRD é a fonte de verdade deste projeto: stack, decisões de arquitetura,
escopo de Fase 1 e critérios de Definition of Done por componente.

Contexto do arquivo Figma de referência:
URL: https://www.figma.com/design/QX6W7BTRYuikstsBtcRpNJ/Design-system

Antes de implementar qualquer coisa, confirme comigo que entendeu:
1. Por que Web Components (Stencil) foi escolhido em vez de React puro
2. Por que não há banco de dados na Fase 1
3. Quais são as 7 categorias do PRD (Marca, Fundamentos, Componentes,
   Acessibilidade, Documentação, Processo, Ferramentas)

Não comece a construir nada ainda, só confirme o entendimento.
```

---

## Prompt 1: Estruturar o arquivo Figma

_Objetivo: o Figma hoje está praticamente vazio (uma página com um frame solto). Esse prompt organiza o arquivo nas páginas que o PRD e o checklist de design system esperam, antes de qualquer componente ser desenhado._

```
Usando o MCP do Figma (use_figma), estruture o arquivo
https://www.figma.com/design/QX6W7BTRYuikstsBtcRpNJ/Design-system
com as seguintes páginas, na seguinte ordem:

1. Cover (capa do projeto, com nome do Design System e versão)
2. Foundations (cor, tipografia, espaçamento, grid, ícones, contraste)
3. Components (um frame por componente, organizado por categoria:
   Inputs, Actions, Feedback, Navigation, Layout)
4. Patterns (composições de componentes, ex: formulário completo)
5. Documentation (guidelines de uso, princípios de marca, terminologia)

Dentro de Foundations, crie frames separados para:
- Color (paleta primitiva + paleta semântica)
- Typography (escala tipográfica)
- Spacing (escala de espaçamento)
- Grid & Breakpoints
- Iconography

Não desenhe componentes ainda nesse passo, só crie a estrutura de páginas
e frames vazios, nomeados, prontos para receber conteúdo.

O conteúdo atual da página "Page 1" (frame "web" com texto "DESIGN" e
imagens soltas) pode ser movido para uma página "Archive" ou removido,
me pergunte antes de apagar qualquer coisa.
```

---

## Prompt 2: Criar as Variables (tokens) no Figma

_Objetivo: criar as Figma Variables que servirão de fonte única de verdade para o Style Dictionary, conforme a seção 3 do PRD._

```
Usando o MCP do Figma (use_figma), crie as Variables do Design System
dentro da página Foundations, seguindo a seção 3 (Fundamentos) do PRD:

- Coleção "Primitives": cores cruas (ex: blue-100 a blue-900, gray-100
  a gray-900, etc.)
- Coleção "Semantic": cores que referenciam os primitivos
  (ex: color-primary, color-danger, color-surface, color-text)
- Coleção "Spacing": escala baseada em múltiplos de 8px
- Coleção "Typography": tamanhos, pesos e line-heights como variáveis
  numéricas (o Figma ainda não suporta variável de tipografia composta
  nativamente, então documente como múltiplas variáveis relacionadas)

Garanta que toda cor semântica de texto sobre fundo tenha contraste
mínimo AA (seção 5 do PRD, Acessibilidade) antes de finalizar.

Ao final, gere um resumo de todas as variables criadas para eu revisar
antes de seguirmos para os componentes.
```

---

## Prompt 3: Scaffolding do repositório

_Objetivo: criar a estrutura de código que vai consumir os tokens e hospedar os componentes, conforme a seção 6 do PRD._

```
Com base na seção 6 (Stack Tecnológica) do PRD, crie a estrutura inicial
do monorepo:

- Ferramenta de monorepo: Nx
- Pacotes: tokens, components (Stencil), react, angular, vue, docs (Storybook)
- Pipeline de tokens com Style Dictionary, lendo o JSON exportado do Figma
  e gerando CSS Custom Properties + tipos TypeScript
- Configuração inicial do Stencil com output targets para React, Angular e Vue
- Configuração inicial do Storybook apontando para o pacote components

Não implemente componentes ainda, só a estrutura, configuração de build
e um exemplo mínimo (um componente "Hello World") para validar que o
pipeline completo funciona: token → componente → wrapper de cada
framework → story no Storybook.
```

---

## Prompt 4: Loop de implementação de componente (repetir por componente)

_Objetivo: usado um componente de cada vez, depois que ele já existe desenhado no Figma (seção 4 do PRD). Substitua [NOME_DO_COMPONENTE] e [NODE_ID]._

```
Implemente o componente [NOME_DO_COMPONENTE] seguindo a Definition of
Done da seção 4 do PRD.

1. Use get_design_context no node [NODE_ID] do Figma para extrair layout,
   variantes e estados
2. A saída do MCP vem em React + Tailwind: não copie a estrutura
   diretamente. Use como referência de layout, spacing e variantes, e
   implemente nativamente em Stencil, consumindo só tokens (sem valores
   hardcoded)
3. Gere os wrappers React, Angular e Vue automaticamente via output
   targets do Stencil
4. Crie a story no Storybook cobrindo todas as variantes e estados
   (default, hover, focus, disabled, loading, erro)
5. Adicione teste de acessibilidade com axe-core
6. Valide navegação por teclado e atributos ARIA (seção 5 do PRD)
7. Documente props, atributos, slots e eventos customizados

Ao final, rode a checklist da seção 4 (Definition of Done) e me diga
explicitamente quais itens foram cumpridos e quais ficaram pendentes.
```

---

## Prompt 5: Publicar documentação e validação visual

_Objetivo: seção 7 do PRD, depois que já existem componentes implementados._

```
Configure a publicação do Storybook no Chromatic, conforme a seção 7
do PRD:

1. Configure o Chromatic no projeto, com deploy automático a cada PR
2. Garanta que a primeira execução gere o baseline de snapshots visuais
3. Adicione ao Storybook: guia de início rápido (instalação por
   framework), changelog inicial, e link para os princípios de marca
   documentados no Figma (seção 2 do PRD)

Não pule a configuração de regressão visual: ela é o principal
mecanismo de proteção contra inconsistência silenciosa entre versões.
```

---

## Como usar este arquivo

Rode os prompts na ordem (0 a 5). O Prompt 4 se repete uma vez por
componente. Sempre que o Claude Code tomar uma decisão que desvie do
PRD, peça para ele justificar por escrito antes de continuar, isso
mantém o PRD como fonte de verdade real, não só como documento de
referência inicial.
