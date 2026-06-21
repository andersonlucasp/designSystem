# ds-accordion-item



<!-- Auto Generated Below -->


## Overview

Item de acordeão: cabeçalho clicável que expande/colapsa o conteúdo.

## Properties

| Property   | Attribute  | Description         | Type      | Default |
| ---------- | ---------- | ------------------- | --------- | ------- |
| `disabled` | `disabled` | Desabilitado.       | `boolean` | `false` |
| `heading`  | `heading`  | Texto do cabeçalho. | `string`  | `''`    |
| `open`     | `open`     | Estado expandido.   | `boolean` | `false` |


## Events

| Event      | Description                             | Type                   |
| ---------- | --------------------------------------- | ---------------------- |
| `dsToggle` | Emitido ao alternar, com o novo estado. | `CustomEvent<boolean>` |


## Slots

| Slot | Description          |
| ---- | -------------------- |
|      | Conteúdo expansível. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"chevron"` |             |
| `"panel"`   |             |
| `"trigger"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
