import { Component, Prop, h, Host } from '@stencil/core';

/** Barra de progresso. Indeterminada quando `value` é null/undefined. */
@Component({ tag: 'ds-progress', styleUrl: 'ds-progress.css', shadow: true })
export class DsProgress {
  /** Valor atual (0–max). Omitir para barra indeterminada. */
  @Prop() value?: number;
  /** Valor máximo. */
  @Prop() max = 100;
  /** Rótulo acessível. */
  @Prop() label = 'Progresso';
  /** Cor semântica. */
  @Prop({ reflect: true }) variant: 'primary' | 'success' | 'danger' = 'primary';

  render() {
    const indeterminate = this.value === undefined || this.value === null;
    const pct = indeterminate ? 0 : Math.max(0, Math.min(100, (this.value! / this.max) * 100));
    return (
      <Host>
        <div
          class={{ track: true, indeterminate }}
          part="track"
          role="progressbar"
          aria-label={this.label}
          aria-valuemin={0}
          aria-valuemax={this.max}
          aria-valuenow={indeterminate ? undefined : this.value}
        >
          <div class="bar" part="bar" style={indeterminate ? undefined : { width: `${pct}%` }} />
        </div>
      </Host>
    );
  }
}
