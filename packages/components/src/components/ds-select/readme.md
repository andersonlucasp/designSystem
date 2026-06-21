# ds-select



<!-- Auto Generated Below -->


## Overview

Campo de seleção (dropdown). Encapsula um <select> nativo para acessibilidade
e navegação por teclado completas.

## Properties

| Property       | Attribute       | Description                    | Type                   | Default     |
| -------------- | --------------- | ------------------------------ | ---------------------- | ----------- |
| `disabled`     | `disabled`      | Desabilitado.                  | `boolean`              | `false`     |
| `errorMessage` | `error-message` | Mensagem de erro.              | `string`               | `undefined` |
| `helperText`   | `helper-text`   | Texto auxiliar.                | `string`               | `undefined` |
| `invalid`      | `invalid`       | Inválido.                      | `boolean`              | `false`     |
| `label`        | `label`         | Rótulo do campo.               | `string`               | `undefined` |
| `name`         | `name`          | Nome (formulário).             | `string`               | `undefined` |
| `options`      | `options`       | Opções (array ou JSON string). | `DsOption[] \| string` | `[]`        |
| `placeholder`  | `placeholder`   | Placeholder (opção vazia).     | `string`               | `undefined` |
| `required`     | `required`      | Obrigatório.                   | `boolean`              | `false`     |
| `value`        | `value`         | Valor selecionado.             | `string`               | `undefined` |


## Events

| Event      | Description                  | Type                  |
| ---------- | ---------------------------- | --------------------- |
| `dsChange` | Emitido ao trocar a seleção. | `CustomEvent<string>` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"field"`  |             |
| `"helper"` |             |
| `"label"`  |             |
| `"select"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
