import { Component, Prop, Event, EventEmitter, h, Host, Element } from '@stencil/core';

let uid = 0;

/**
 * Item de acordeão: cabeçalho clicável que expande/colapsa o conteúdo.
 * @slot - Conteúdo expansível.
 */
@Component({ tag: 'ds-accordion-item', styleUrl: 'ds-accordion-item.css', shadow: true })
export class DsAccordionItem {
  @Element() host!: HTMLElement;
  private btnId = `ds-acc-btn-${uid}`;
  private panelId = `ds-acc-panel-${uid++}`;

  /** Texto do cabeçalho. */
  @Prop() heading = '';
  /** Estado expandido. */
  @Prop({ mutable: true, reflect: true }) open = false;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;

  /** Emitido ao alternar, com o novo estado. */
  @Event() dsToggle!: EventEmitter<boolean>;

  private toggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
    this.dsToggle.emit(this.open);
  };

  render() {
    return (
      <Host>
        <h3 class="header">
          <button
            id={this.btnId}
            type="button"
            class="trigger"
            part="trigger"
            aria-expanded={this.open ? 'true' : 'false'}
            aria-controls={this.panelId}
            disabled={this.disabled}
            onClick={this.toggle}
          >
            <span class="heading">{this.heading}</span>
            <span class="chevron" part="chevron" aria-hidden="true">⌄</span>
          </button>
        </h3>
        <div
          id={this.panelId}
          class="panel"
          part="panel"
          role="region"
          aria-labelledby={this.btnId}
          hidden={!this.open}
        >
          <div class="panel-inner"><slot /></div>
        </div>
      </Host>
    );
  }
}
