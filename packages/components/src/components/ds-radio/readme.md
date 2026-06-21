# ds-radio



<!-- Auto Generated Below -->


## Overview

Botão de opção (escolha única dentro de um grupo de mesmo `name`).

## Properties

| Property   | Attribute  | Description                 | Type      | Default     |
| ---------- | ---------- | --------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Estado selecionado.         | `boolean` | `false`     |
| `disabled` | `disabled` | Desabilitado.               | `boolean` | `false`     |
| `name`     | `name`     | Nome do grupo (formulário). | `string`  | `undefined` |
| `value`    | `value`    | Valor da opção.             | `string`  | `undefined` |


## Events

| Event      | Description                         | Type                  |
| ---------- | ----------------------------------- | --------------------- |
| `dsChange` | Emitido ao selecionar, com o valor. | `CustomEvent<string>` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | Rótulo do radio. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"control"` |             |
| `"label"`   |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
