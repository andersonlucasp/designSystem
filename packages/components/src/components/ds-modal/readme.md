# ds-modal



<!-- Auto Generated Below -->


## Overview

Janela modal sobreposta. Usa o elemento <dialog> nativo (focus trap + Esc).

## Properties

| Property      | Attribute     | Description                                                 | Type      | Default     |
| ------------- | ------------- | ----------------------------------------------------------- | --------- | ----------- |
| `dismissible` | `dismissible` | Exibe o botão de fechar.                                    | `boolean` | `true`      |
| `heading`     | `heading`     | Título acessível (usado quando não há slot header textual). | `string`  | `undefined` |
| `open`        | `open`        | Controla a abertura do modal.                               | `boolean` | `false`     |


## Events

| Event     | Description        | Type                |
| --------- | ------------------ | ------------------- |
| `dsClose` | Emitido ao fechar. | `CustomEvent<void>` |


## Slots

| Slot       | Description        |
| ---------- | ------------------ |
|            | Conteúdo do modal. |
| `"footer"` | Ações do modal.    |
| `"header"` | Título do modal.   |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"body"`   |             |
| `"close"`  |             |
| `"dialog"` |             |
| `"footer"` |             |
| `"header"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
