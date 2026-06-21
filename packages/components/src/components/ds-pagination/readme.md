# ds-pagination



<!-- Auto Generated Below -->


## Overview

Navegação entre páginas de resultados.

## Properties

| Property   | Attribute  | Description                                                | Type     | Default |
| ---------- | ---------- | ---------------------------------------------------------- | -------- | ------- |
| `page`     | `page`     | Página atual (1-based).                                    | `number` | `1`     |
| `siblings` | `siblings` | Quantidade de páginas vizinhas exibidas ao redor da atual. | `number` | `1`     |
| `total`    | `total`    | Total de páginas.                                          | `number` | `1`     |


## Events

| Event          | Description                 | Type                  |
| -------------- | --------------------------- | --------------------- |
| `dsPageChange` | Emitido ao mudar de página. | `CustomEvent<number>` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"next"`       |             |
| `"pagination"` |             |
| `"prev"`       |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
