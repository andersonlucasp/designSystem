import { Component, Prop, h, Host } from '@stencil/core';

/**
 * Item de breadcrumb. Renderiza link quando há `href`; o item atual usa `current`.
 * @slot - Rótulo do item.
 */
@Component({ tag: 'ds-breadcrumb-item', styleUrl: 'ds-breadcrumb-item.css', shadow: true })
export class DsBreadcrumbItem {
  /** URL de destino. */
  @Prop() href?: string;
  /** Marca como página atual (não navegável). */
  @Prop({ reflect: true }) current = false;

  render() {
    return (
      <Host role="listitem">
        {this.href && !this.current ? (
          <a class="link" part="link" href={this.href}><slot /></a>
        ) : (
          <span class="current" part="current" aria-current={this.current ? 'page' : undefined}><slot /></span>
        )}
        <span class="sep" part="separator" aria-hidden="true">/</span>
      </Host>
    );
  }
}
