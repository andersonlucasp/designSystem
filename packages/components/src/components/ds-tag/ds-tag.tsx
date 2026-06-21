import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type DsTagVariant = 'neutral' | 'primary' | 'success' | 'danger' | 'warning';

/**
 * Chip/etiqueta, opcionalmente removível.
 * @slot - Conteúdo da tag.
 */
@Component({ tag: 'ds-tag', styleUrl: 'ds-tag.css', shadow: true })
export class DsTag {
  /** Cor semântica. */
  @Prop({ reflect: true }) variant: DsTagVariant = 'neutral';
  /** Exibe o botão de remoção. */
  @Prop() removable = false;
  /** Rótulo acessível do botão de remoção. */
  @Prop() removeLabel = 'Remover';

  /** Emitido ao clicar no botão de remoção. */
  @Event() dsRemove!: EventEmitter<void>;

  render() {
    return (
      <Host>
        <span class="tag" part="tag">
          <span class="content"><slot /></span>
          {this.removable && (
            <button
              type="button"
              class="remove"
              part="remove"
              aria-label={this.removeLabel}
              onClick={() => this.dsRemove.emit()}
            >×</button>
          )}
        </span>
      </Host>
    );
  }
}
