# ds-tabs



<!-- Auto Generated Below -->


## Overview

Conjunto de abas. Os painéis são slots nomeados com o `value` de cada aba.

## Properties

| Property | Attribute | Description                           | Type                | Default     |
| -------- | --------- | ------------------------------------- | ------------------- | ----------- |
| `active` | `active`  | Valor da aba ativa.                   | `string`            | `undefined` |
| `tabs`   | `tabs`    | Lista de abas (array ou JSON string). | `DsTab[] \| string` | `[]`        |


## Events

| Event         | Description               | Type                  |
| ------------- | ------------------------- | --------------------- |
| `dsTabChange` | Emitido ao trocar de aba. | `CustomEvent<string>` |


## Slots

| Slot        | Description                                   |
| ----------- | --------------------------------------------- |
| `"{value}"` | Conteúdo do painel correspondente a cada aba. |


## Shadow Parts

| Part        | Description |
| ----------- | ----------- |
| `"panel"`   |             |
| `"tab"`     |             |
| `"tablist"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
