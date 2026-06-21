# ds-button



<!-- Auto Generated Below -->


## Overview

Botão de ação. Consome exclusivamente design tokens (CSS Custom Properties).
Implementa um <button> nativo no Shadow DOM para garantir acessibilidade
(teclado, foco e semântica de leitor de tela).

## Properties

| Property    | Attribute    | Description                                                            | Type                                   | Default     |
| ----------- | ------------ | ---------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `disabled`  | `disabled`   | Desabilita o botão (impede clique e foco).                             | `boolean`                              | `false`     |
| `fullWidth` | `full-width` | Ocupa 100% da largura do container.                                    | `boolean`                              | `false`     |
| `label`     | `label`      | Rótulo acessível quando o botão não tem texto visível (ex.: só ícone). | `string`                               | `undefined` |
| `loading`   | `loading`    | Estado de carregamento: mostra spinner e bloqueia interação.           | `boolean`                              | `false`     |
| `size`      | `size`       | Tamanho do botão.                                                      | `"lg" \| "md" \| "sm"`                 | `'md'`      |
| `type`      | `type`       | Tipo nativo do botão.                                                  | `"button" \| "reset" \| "submit"`      | `'button'`  |
| `variant`   | `variant`    | Estilo visual / nível de ênfase.                                       | `"danger" \| "primary" \| "secondary"` | `'primary'` |


## Events

| Event     | Description                                              | Type                      |
| --------- | -------------------------------------------------------- | ------------------------- |
| `dsClick` | Emitido ao clicar (quando habilitado e fora de loading). | `CustomEvent<MouseEvent>` |


## Slots

| Slot      | Description                                |
| --------- | ------------------------------------------ |
|           | Conteúdo/rótulo do botão (slot default).   |
| `"end"`   | Ícone ou elemento exibido após o rótulo.   |
| `"start"` | Ícone ou elemento exibido antes do rótulo. |


## Shadow Parts

| Part           | Description                                           |
| -------------- | ----------------------------------------------------- |
| `"button"`     | O elemento <button> interno.                          |
| `"icon-end"`   | Container do slot "end".                              |
| `"icon-start"` | Container do slot "start".                            |
| `"spinner"`    | O indicador de carregamento (visível quando loading). |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
