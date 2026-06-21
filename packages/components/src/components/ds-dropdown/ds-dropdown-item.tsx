import { Component, Prop, Event, EventEmitter, h, Host, Method } from '@stencil/core';

/**
 * Item de menu suspenso.
 * @slot - Conteúdo do item.
 */
@Component({ tag: 'ds-dropdown-item', styleUrl: 'ds-dropdown-item.css', shadow: true })
export class DsDropdownItem {
  private btn?: HTMLButtonElement;

  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Variante destrutiva. */
  @Prop({ reflect: true }) variant: 'default' | 'danger' = 'default';

  /** Emitido ao selecionar. */
  @Event() dsSelect!: EventEmitter<void>;

  /** Foca o item (usado pela navegação por teclado do menu). */
  @Method() async setFocus() { this.btn?.focus(); }

  render() {
    return (
      <Host onFocus={() => this.btn?.focus()} tabindex={this.disabled ? undefined : '-1'}>
        <button
          type="button"
          class="item"
          part="item"
          disabled={this.disabled}
          ref={(el) => (this.btn = el as HTMLButtonElement)}
          onClick={() => !this.disabled && this.dsSelect.emit()}
        ><slot /></button>
      </Host>
    );
  }
}
