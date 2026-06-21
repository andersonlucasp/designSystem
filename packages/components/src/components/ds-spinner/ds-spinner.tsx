import { Component, Prop, h, Host } from '@stencil/core';

export type DsSpinnerSize = 'sm' | 'md' | 'lg';

/** Indicador de carregamento. */
@Component({ tag: 'ds-spinner', styleUrl: 'ds-spinner.css', shadow: true })
export class DsSpinner {
  /** Tamanho. */
  @Prop({ reflect: true }) size: DsSpinnerSize = 'md';
  /** Rótulo acessível. */
  @Prop() label = 'Carregando';

  render() {
    return (
      <Host>
        <span class="spinner" part="spinner" role="status" aria-live="polite" aria-label={this.label} />
      </Host>
    );
  }
}
