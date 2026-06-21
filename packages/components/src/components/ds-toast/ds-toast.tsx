import { Component, Prop, Event, EventEmitter, Watch, h, Host } from '@stencil/core';

export type DsToastVariant = 'info' | 'success' | 'warning' | 'danger';

/**
 * Notificação temporária (toast).
 * @slot - Conteúdo da notificação.
 */
@Component({ tag: 'ds-toast', styleUrl: 'ds-toast.css', shadow: true })
export class DsToast {
  private timer?: any;

  /** Tipo. */
  @Prop({ reflect: true }) variant: DsToastVariant = 'info';
  /** Visível. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Auto-dispensar após N ms (0 desativa). */
  @Prop() duration = 4000;

  /** Emitido ao dispensar. */
  @Event() dsDismiss!: EventEmitter<void>;

  @Watch('open') onOpen(v: boolean) {
    clearTimeout(this.timer);
    if (v && this.duration > 0) this.timer = setTimeout(() => this.dismiss(), this.duration);
  }

  componentDidLoad() { if (this.open) this.onOpen(true); }
  disconnectedCallback() { clearTimeout(this.timer); }

  private dismiss = () => { this.open = false; this.dsDismiss.emit(); };

  render() {
    return (
      <Host>
        {this.open && (
          <div class="toast" part="toast" role={this.variant === 'danger' ? 'alert' : 'status'} aria-live="polite">
            <span class="content"><slot /></span>
            <button type="button" class="dismiss" part="dismiss" aria-label="Dispensar" onClick={this.dismiss}>×</button>
          </div>
        )}
      </Host>
    );
  }
}
