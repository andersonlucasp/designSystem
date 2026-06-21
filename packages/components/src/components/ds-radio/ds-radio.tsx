import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

let uid = 0;

/**
 * Botão de opção (escolha única dentro de um grupo de mesmo `name`).
 * @slot - Rótulo do radio.
 */
@Component({ tag: 'ds-radio', styleUrl: 'ds-radio.css', shadow: true })
export class DsRadio {
  private id = `ds-radio-${uid++}`;

  /** Estado selecionado. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Nome do grupo (formulário). */
  @Prop() name?: string;
  /** Valor da opção. */
  @Prop() value?: string;

  /** Emitido ao selecionar, com o valor. */
  @Event() dsChange!: EventEmitter<string | undefined>;

  private onChange = () => {
    this.checked = true;
    this.dsChange.emit(this.value);
  };

  render() {
    return (
      <Host>
        <label class="wrapper" htmlFor={this.id}>
          <input
            id={this.id}
            type="radio"
            class="control"
            part="control"
            name={this.name}
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            onChange={this.onChange}
          />
          <span class="label" part="label"><slot /></span>
        </label>
      </Host>
    );
  }
}
