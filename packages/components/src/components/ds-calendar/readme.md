# ds-calendar



<!-- Auto Generated Below -->


## Overview

Calendário de mês para seleção de data (valor em formato ISO YYYY-MM-DD).

## Properties

| Property | Attribute | Description                        | Type     | Default     |
| -------- | --------- | ---------------------------------- | -------- | ----------- |
| `locale` | `locale`  | Localidade para nomes de mês/dia.  | `string` | `'pt-BR'`   |
| `value`  | `value`   | Data selecionada (ISO YYYY-MM-DD). | `string` | `undefined` |


## Events

| Event      | Description                           | Type                  |
| ---------- | ------------------------------------- | --------------------- |
| `dsSelect` | Emitido ao selecionar uma data (ISO). | `CustomEvent<string>` |


## Shadow Parts

| Part         | Description |
| ------------ | ----------- |
| `"calendar"` |             |
| `"month"`    |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
