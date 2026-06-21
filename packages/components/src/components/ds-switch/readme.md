# ds-switch



<!-- Auto Generated Below -->


## Overview

Interruptor on/off.

## Properties

| Property   | Attribute  | Description        | Type      | Default     |
| ---------- | ---------- | ------------------ | --------- | ----------- |
| `checked`  | `checked`  | Estado ligado.     | `boolean` | `false`     |
| `disabled` | `disabled` | Desabilitado.      | `boolean` | `false`     |
| `name`     | `name`     | Nome (formulário). | `string`  | `undefined` |


## Events

| Event      | Description                             | Type                   |
| ---------- | --------------------------------------- | ---------------------- |
| `dsChange` | Emitido ao alternar, com o novo estado. | `CustomEvent<boolean>` |


## Slots

| Slot | Description       |
| ---- | ----------------- |
|      | Rótulo do switch. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"control"` |             |
| `"label"`   |             |
| `"thumb"`   |             |
| `"track"`   |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
