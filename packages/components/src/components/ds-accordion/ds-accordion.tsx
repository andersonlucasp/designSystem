import { Component, Prop, h, Host, Element, Listen } from '@stencil/core';

/**
 * Container de acordeão. Em modo `single`, abrir um item fecha os demais.
 * @slot - Itens `ds-accordion-item`.
 */
@Component({ tag: 'ds-accordion', styleUrl: 'ds-accordion.css', shadow: true })
export class DsAccordion {
  @Element() host!: HTMLElement;

  /** Permite apenas um item aberto por vez. */
  @Prop() single = false;

  @Listen('dsToggle')
  handleToggle(ev: CustomEvent<boolean>) {
    if (!this.single || !ev.detail) return;
    const opened = ev.target as HTMLElement;
    const items = Array.from(this.host.querySelectorAll('ds-accordion-item'));
    items.forEach((item) => {
      if (item !== opened) (item as any).open = false;
    });
  }

  render() {
    return (
      <Host>
        <div class="accordion" part="accordion"><slot /></div>
      </Host>
    );
  }
}
