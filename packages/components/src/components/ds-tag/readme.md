# ds-tag



<!-- Auto Generated Below -->


## Overview

Chip/etiqueta, opcionalmente removível.

## Properties

| Property      | Attribute      | Description                           | Type                                                           | Default     |
| ------------- | -------------- | ------------------------------------- | -------------------------------------------------------------- | ----------- |
| `removable`   | `removable`    | Exibe o botão de remoção.             | `boolean`                                                      | `false`     |
| `removeLabel` | `remove-label` | Rótulo acessível do botão de remoção. | `string`                                                       | `'Remover'` |
| `variant`     | `variant`      | Cor semântica.                        | `"danger" \| "neutral" \| "primary" \| "success" \| "warning"` | `'neutral'` |


## Events

| Event      | Description                            | Type                |
| ---------- | -------------------------------------- | ------------------- |
| `dsRemove` | Emitido ao clicar no botão de remoção. | `CustomEvent<void>` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | Conteúdo da tag. |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"remove"` |             |
| `"tag"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
