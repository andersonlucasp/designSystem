# ds-alert



<!-- Auto Generated Below -->


## Overview

Mensagem contextual de feedback.

## Properties

| Property       | Attribute       | Description                             | Type                                           | Default       |
| -------------- | --------------- | --------------------------------------- | ---------------------------------------------- | ------------- |
| `dismissLabel` | `dismiss-label` | Rótulo acessível do botão de dispensar. | `string`                                       | `'Dispensar'` |
| `dismissible`  | `dismissible`   | Permite dispensar o alerta.             | `boolean`                                      | `false`       |
| `heading`      | `heading`       | Título opcional.                        | `string`                                       | `undefined`   |
| `variant`      | `variant`       | Tipo do alerta.                         | `"danger" \| "info" \| "success" \| "warning"` | `'info'`      |


## Events

| Event       | Description           | Type                |
| ----------- | --------------------- | ------------------- |
| `dsDismiss` | Emitido ao dispensar. | `CustomEvent<void>` |


## Slots

| Slot | Description                   |
| ---- | ----------------------------- |
|      | Conteúdo/descrição do alerta. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"alert"`   |             |
| `"dismiss"` |             |
| `"heading"` |             |
| `"icon"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
