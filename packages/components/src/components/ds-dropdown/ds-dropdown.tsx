import { Component, Prop, State, Event, EventEmitter, h, Host, Element, Listen } from '@stencil/core';

/**
 * Menu suspenso de ações.
 * @slot trigger - Elemento gatilho (ex.: ds-button).
 * @slot - Itens do menu (ds-dropdown-item).
 */
@Component({ tag: 'ds-dropdown', styleUrl: 'ds-dropdown.css', shadow: true })
export class DsDropdown {
  @Element() host!: HTMLElement;

  /** Alinhamento do menu. */
  @Prop({ reflect: true }) align: 'start' | 'end' = 'start';
  /** Estado aberto. */
  @Prop({ mutable: true, reflect: true }) open = false;

  @State() x = false;

  /** Emitido ao abrir/fechar. */
  @Event() dsOpenChange!: EventEmitter<boolean>;

  private toggle = () => this.setOpen(!this.open);
  private setOpen(v: boolean) { this.open = v; this.dsOpenChange.emit(v); }

  @Listen('click', { target: 'document' })
  onDocClick(ev: MouseEvent) {
    if (this.open && !ev.composedPath().includes(this.host)) this.setOpen(false);
  }

  @Listen('keydown')
  onKey(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.open) { this.setOpen(false); return; }
    const items = Array.from(this.host.querySelectorAll('ds-dropdown-item')) as HTMLElement[];
    if (!items.length) return;
    const active = items.indexOf(document.activeElement as HTMLElement);
    if (ev.key === 'ArrowDown') { ev.preventDefault(); items[(active + 1) % items.length]?.focus(); }
    if (ev.key === 'ArrowUp') { ev.preventDefault(); items[(active - 1 + items.length) % items.length]?.focus(); }
  }

  render() {
    return (
      <Host>
        <div class="dropdown" part="dropdown">
          <span class="trigger" onClick={this.toggle}>
            <slot name="trigger" />
          </span>
          <div class={{ menu: true, open: this.open }} part="menu" hidden={!this.open}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
