import { Component, Prop, h, Host } from '@stencil/core';

export type DsDividerOrientation = 'horizontal' | 'vertical';

/**
 * Separador visual entre conteúdos.
 * @slot - Rótulo opcional centralizado (apenas horizontal).
 */
@Component({ tag: 'ds-divider', styleUrl: 'ds-divider.css', shadow: true })
export class DsDivider {
  /** Orientação do divisor. */
  @Prop({ reflect: true }) orientation: DsDividerOrientation = 'horizontal';

  render() {
    return (
      <Host role="separator" aria-orientation={this.orientation}>
        <div class="divider" part="divider">
          <span class="line" />
          <span class="label"><slot /></span>
          <span class="line" />
        </div>
      </Host>
    );
  }
}
