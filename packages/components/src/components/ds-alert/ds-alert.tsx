import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type DsAlertVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Mensagem contextual de feedback.
 * @slot - Conteúdo/descrição do alerta.
 */
@Component({ tag: 'ds-alert', styleUrl: 'ds-alert.css', shadow: true })
export class DsAlert {
  /** Tipo do alerta. */
  @Prop({ reflect: true }) variant: DsAlertVariant = 'info';
  /** Título opcional. */
  @Prop() heading?: string;
  /** Permite dispensar o alerta. */
  @Prop() dismissible = false;
  /** Rótulo acessível do botão de dispensar. */
  @Prop() dismissLabel = 'Dispensar';

  /** Emitido ao dispensar. */
  @Event() dsDismiss!: EventEmitter<void>;

  private icon() {
    const map = { info: 'ℹ', success: '✓', warning: '⚠', danger: '✕' };
    return map[this.variant];
  }

  render() {
    return (
      <Host>
        <div class="alert" part="alert" role={this.variant === 'danger' ? 'alert' : 'status'}>
          <span class="icon" part="icon" aria-hidden="true">{this.icon()}</span>
          <div class="body">
            {this.heading && <strong class="heading" part="heading">{this.heading}</strong>}
            <div class="content"><slot /></div>
          </div>
          {this.dismissible && (
            <button type="button" class="dismiss" part="dismiss" aria-label={this.dismissLabel} onClick={() => this.dsDismiss.emit()}>×</button>
          )}
        </div>
      </Host>
    );
  }
}
