import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
  Host,
} from '@stencil/core';

export type DsInputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

let inputUid = 0;

/**
 * Campo de entrada de texto com rótulo e texto auxiliar.
 * Renderiza um <label> associado a um <input> nativo no Shadow DOM,
 * garantindo acessibilidade (associação label↔input, aria-invalid,
 * aria-describedby, required).
 *
 * @part field - O wrapper visual ao redor do input.
 * @part input - O elemento <input> nativo.
 * @part label - O rótulo do campo.
 * @part helper - O texto auxiliar / mensagem de erro.
 */
@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DsInput {
  private inputId = `ds-input-${inputUid++}`;

  /** Rótulo do campo (associado ao input via for/id). */
  @Prop() label?: string;

  /** Texto de placeholder. */
  @Prop() placeholder?: string;

  /** Texto auxiliar abaixo do campo. Substituído por errorMessage quando inválido. */
  @Prop() helperText?: string;

  /** Mensagem de erro exibida quando invalid=true. */
  @Prop() errorMessage?: string;

  /** Valor controlado do campo. */
  @Prop({ mutable: true }) value = '';

  /** Tipo nativo do input. */
  @Prop() type: DsInputType = 'text';

  /** Marca o campo como inválido (borda + mensagem de erro + aria-invalid). */
  @Prop({ reflect: true }) invalid = false;

  /** Desabilita o campo. */
  @Prop({ reflect: true }) disabled = false;

  /** Marca o campo como obrigatório. */
  @Prop({ reflect: true }) required = false;

  /** Nome do campo (para formulários). */
  @Prop() name?: string;

  @State() focused = false;

  /** Emitido a cada digitação, com o valor atual. */
  @Event() dsInput!: EventEmitter<string>;

  /** Emitido ao confirmar a mudança (evento change nativo). */
  @Event() dsChange!: EventEmitter<string>;

  private handleInput = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    this.value = target.value;
    this.dsInput.emit(this.value);
  };

  private handleChange = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    this.dsChange.emit(target.value);
  };

  render() {
    const helperId = `${this.inputId}-helper`;
    const message = this.invalid ? this.errorMessage ?? this.helperText : this.helperText;
    const hasHelper = !!message;
    return (
      <Host>
        {this.label && (
          <label class="label" part="label" htmlFor={this.inputId}>
            {this.label}
            {this.required && <span class="required" aria-hidden="true"> *</span>}
          </label>
        )}
        <div class="field" part="field">
          <input
            id={this.inputId}
            class="input"
            part="input"
            type={this.type}
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={this.invalid ? 'true' : 'false'}
            aria-describedby={hasHelper ? helperId : undefined}
            onInput={this.handleInput}
            onChange={this.handleChange}
            onFocus={() => (this.focused = true)}
            onBlur={() => (this.focused = false)}
          />
        </div>
        {hasHelper && (
          <span
            id={helperId}
            class="helper"
            part="helper"
            role={this.invalid ? 'alert' : undefined}
          >
            {message}
          </span>
        )}
      </Host>
    );
  }
}
