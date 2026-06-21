import { Component, Prop, h, Host } from '@stencil/core';

export type DsBadgeVariant = 'neutral' | 'primary' | 'success' | 'danger' | 'warning';

/**
 * Pequeno rótulo de status ou contagem.
 * @slot - Conteúdo do badge.
 */
@Component({ tag: 'ds-badge', styleUrl: 'ds-badge.css', shadow: true })
export class DsBadge {
  /** Cor semântica do badge. */
  @Prop({ reflect: true }) variant: DsBadgeVariant = 'neutral';
  /** Exibe um ponto indicador antes do conteúdo. */
  @Prop() dot = false;

  render() {
    return (
      <Host>
        <span class="badge" part="badge">
          {this.dot && <span class="dot" part="dot" aria-hidden="true" />}
          <slot />
        </span>
      </Host>
    );
  }
}
