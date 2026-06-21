# ds-checkbox



<!-- Auto Generated Below -->


## Overview

Caixa de seleção (múltipla escolha).

## Properties

| Property        | Attribute       | Description           | Type      | Default     |
| --------------- | --------------- | --------------------- | --------- | ----------- |
| `checked`       | `checked`       | Estado marcado.       | `boolean` | `false`     |
| `disabled`      | `disabled`      | Desabilitado.         | `boolean` | `false`     |
| `indeterminate` | `indeterminate` | Estado indeterminado. | `boolean` | `false`     |
| `name`          | `name`          | Nome (formulário).    | `string`  | `undefined` |
| `required`      | `required`      | Obrigatório.          | `boolean` | `false`     |
| `value`         | `value`         | Valor (formulário).   | `string`  | `undefined` |


## Events

| Event      | Description                             | Type                   |
| ---------- | --------------------------------------- | ---------------------- |
| `dsChange` | Emitido ao alternar, com o novo estado. | `CustomEvent<boolean>` |


## Slots

| Slot | Description         |
| ---- | ------------------- |
|      | Rótulo do checkbox. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"control"` |             |
| `"label"`   |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
