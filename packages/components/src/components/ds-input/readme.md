# ds-input



<!-- Auto Generated Below -->


## Overview

Campo de entrada de texto com rótulo e texto auxiliar.
Renderiza um <label> associado a um <input> nativo no Shadow DOM,
garantindo acessibilidade (associação label↔input, aria-invalid,
aria-describedby, required).

## Properties

| Property       | Attribute       | Description                                                                   | Type                                                                        | Default     |
| -------------- | --------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `disabled`     | `disabled`      | Desabilita o campo.                                                           | `boolean`                                                                   | `false`     |
| `errorMessage` | `error-message` | Mensagem de erro exibida quando invalid=true.                                 | `string`                                                                    | `undefined` |
| `helperText`   | `helper-text`   | Texto auxiliar abaixo do campo. Substituído por errorMessage quando inválido. | `string`                                                                    | `undefined` |
| `invalid`      | `invalid`       | Marca o campo como inválido (borda + mensagem de erro + aria-invalid).        | `boolean`                                                                   | `false`     |
| `label`        | `label`         | Rótulo do campo (associado ao input via for/id).                              | `string`                                                                    | `undefined` |
| `name`         | `name`          | Nome do campo (para formulários).                                             | `string`                                                                    | `undefined` |
| `placeholder`  | `placeholder`   | Texto de placeholder.                                                         | `string`                                                                    | `undefined` |
| `required`     | `required`      | Marca o campo como obrigatório.                                               | `boolean`                                                                   | `false`     |
| `type`         | `type`          | Tipo nativo do input.                                                         | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`        | `value`         | Valor controlado do campo.                                                    | `string`                                                                    | `''`        |


## Events

| Event      | Description                                            | Type                  |
| ---------- | ------------------------------------------------------ | --------------------- |
| `dsChange` | Emitido ao confirmar a mudança (evento change nativo). | `CustomEvent<string>` |
| `dsInput`  | Emitido a cada digitação, com o valor atual.           | `CustomEvent<string>` |


## Shadow Parts

| Part       | Description                          |
| ---------- | ------------------------------------ |
| `"field"`  | O wrapper visual ao redor do input.  |
| `"helper"` | O texto auxiliar / mensagem de erro. |
| `"input"`  | O elemento <input> nativo.           |
| `"label"`  | O rótulo do campo.                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
