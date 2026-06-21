import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

let uid = 0;

/**
 * Caixa de seleção (múltipla escolha).
 * @slot - Rótulo do checkbox.
 */
@Component({ tag: 'ds-checkbox', styleUrl: 'ds-checkbox.css', shadow: true })
export class DsCheckbox {
  private id = `ds-checkbox-${uid++}`;

  /** Estado marcado. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Estado indeterminado. */
  @Prop({ mutable: true }) indeterminate = false;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Obrigatório. */
  @Prop() required = false;
  /** Nome (formulário). */
  @Prop() name?: string;
  /** Valor (formulário). */
  @Prop() value?: string;

  /** Emitido ao alternar, com o novo estado. */
  @Event() dsChange!: EventEmitter<boolean>;

  private onChange = (ev: Event) => {
    const t = ev.target as HTMLInputElement;
    this.checked = t.checked;
    this.indeterminate = false;
    this.dsChange.emit(this.checked);
  };

  render() {
    return (
      <Host>
        <label class="wrapper" htmlFor={this.id}>
          <input
            id={this.id}
            type="checkbox"
            class="control"
            part="control"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            required={this.required}
            aria-checked={this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
            ref={(el) => el && (el.indeterminate = this.indeterminate)}
            onChange={this.onChange}
          />
          <span class="label" part="label"><slot /></span>
        </label>
      </Host>
    );
  }
}
