import { Component, h, Host } from '@stencil/core';

/**
 * Trilha de navegação hierárquica.
 * @slot - Itens `ds-breadcrumb-item`.
 */
@Component({ tag: 'ds-breadcrumb', styleUrl: 'ds-breadcrumb.css', shadow: true })
export class DsBreadcrumb {
  render() {
    return (
      <Host>
        <nav part="nav" aria-label="Breadcrumb">
          <ol class="list" part="list"><slot /></ol>
        </nav>
      </Host>
    );
  }
}
