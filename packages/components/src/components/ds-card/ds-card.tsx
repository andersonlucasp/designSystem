import { Component, Prop, h, Host } from '@stencil/core';

export type DsCardVariant = 'elevated' | 'outlined';

/**
 * Container de conteúdo agrupado.
 * @slot header - Cabeçalho do card.
 * @slot - Corpo do card (slot default).
 * @slot footer - Rodapé do card.
 */
@Component({ tag: 'ds-card', styleUrl: 'ds-card.css', shadow: true })
export class DsCard {
  /** Estilo de elevação. */
  @Prop({ reflect: true }) variant: DsCardVariant = 'elevated';

  render() {
    return (
      <Host>
        <div class="card" part="card">
          <div class="header" part="header"><slot name="header" /></div>
          <div class="body" part="body"><slot /></div>
          <div class="footer" part="footer"><slot name="footer" /></div>
        </div>
      </Host>
    );
  }
}
