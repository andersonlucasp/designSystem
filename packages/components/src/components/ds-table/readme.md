# ds-table



<!-- Auto Generated Below -->


## Overview

Tabela de dados simples, orientada por colunas e linhas.

## Properties

| Property  | Attribute | Description                                 | Type                              | Default     |
| --------- | --------- | ------------------------------------------- | --------------------------------- | ----------- |
| `caption` | `caption` | Legenda acessível da tabela.                | `string`                          | `undefined` |
| `columns` | `columns` | Definição das colunas (array ou JSON).      | `DsColumn[] \| string`            | `[]`        |
| `rows`    | `rows`    | Linhas de dados (array de objetos ou JSON). | `Record<string, any>[] \| string` | `[]`        |
| `striped` | `striped` | Destaca linhas alternadas.                  | `boolean`                         | `false`     |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"table"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
