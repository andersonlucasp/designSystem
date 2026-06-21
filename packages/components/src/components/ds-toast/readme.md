# ds-toast



<!-- Auto Generated Below -->


## Overview

Notificação temporária (toast).

## Properties

| Property   | Attribute  | Description                            | Type                                           | Default  |
| ---------- | ---------- | -------------------------------------- | ---------------------------------------------- | -------- |
| `duration` | `duration` | Auto-dispensar após N ms (0 desativa). | `number`                                       | `4000`   |
| `open`     | `open`     | Visível.                               | `boolean`                                      | `false`  |
| `variant`  | `variant`  | Tipo.                                  | `"danger" \| "info" \| "success" \| "warning"` | `'info'` |


## Events

| Event       | Description           | Type                |
| ----------- | --------------------- | ------------------- |
| `dsDismiss` | Emitido ao dispensar. | `CustomEvent<void>` |


## Slots

| Slot | Description              |
| ---- | ------------------------ |
|      | Conteúdo da notificação. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"dismiss"` |             |
| `"toast"`   |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
