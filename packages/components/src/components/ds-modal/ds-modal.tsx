import { Component, Prop, Event, EventEmitter, Watch, h, Host } from '@stencil/core';

/**
 * Janela modal sobreposta. Usa o elemento <dialog> nativo (focus trap + Esc).
 * @slot header - Título do modal.
 * @slot - Conteúdo do modal.
 * @slot footer - Ações do modal.
 */
@Component({ tag: 'ds-modal', styleUrl: 'ds-modal.css', shadow: true })
export class DsModal {
  private dialog?: HTMLDialogElement;

  /** Controla a abertura do modal. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Título acessível (usado quando não há slot header textual). */
  @Prop() heading?: string;
  /** Exibe o botão de fechar. */
  @Prop() dismissible = true;

  /** Emitido ao fechar. */
  @Event() dsClose!: EventEmitter<void>;

  @Watch('open') sync(open: boolean) {
    if (!this.dialog) return;
    if (open && !this.dialog.open) this.dialog.showModal();
    if (!open && this.dialog.open) this.dialog.close();
  }

  componentDidLoad() { if (this.open) this.dialog?.showModal(); }

  private close = () => {
    this.open = false;
    this.dsClose.emit();
  };

  render() {
    return (
      <Host>
        <dialog
          class="dialog"
          part="dialog"
          ref={(el) => (this.dialog = el as HTMLDialogElement)}
          aria-label={this.heading}
          onClose={this.close}
          onCancel={this.close}
        >
          <div class="header" part="header">
            <span class="title"><slot name="header">{this.heading}</slot></span>
            {this.dismissible && (
              <button type="button" class="close" part="close" aria-label="Fechar" onClick={this.close}>×</button>
            )}
          </div>
          <div class="body" part="body"><slot /></div>
          <div class="footer" part="footer"><slot name="footer" /></div>
        </dialog>
      </Host>
    );
  }
}
