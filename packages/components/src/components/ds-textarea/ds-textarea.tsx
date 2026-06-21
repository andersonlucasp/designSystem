import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

let uid = 0;

/** Campo de texto multilinha. */
@Component({ tag: 'ds-textarea', styleUrl: 'ds-textarea.css', shadow: true })
export class DsTextarea {
  private id = `ds-textarea-${uid++}`;

  /** Rótulo. */
  @Prop() label?: string;
  /** Placeholder. */
  @Prop() placeholder?: string;
  /** Texto auxiliar. */
  @Prop() helperText?: string;
  /** Mensagem de erro. */
  @Prop() errorMessage?: string;
  /** Valor. */
  @Prop({ mutable: true }) value = '';
  /** Número de linhas visíveis. */
  @Prop() rows = 4;
  /** Inválido. */
  @Prop({ reflect: true }) invalid = false;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Obrigatório. */
  @Prop() required = false;
  /** Nome. */
  @Prop() name?: string;

  /** Emitido a cada digitação. */
  @Event() dsInput!: EventEmitter<string>;

  private onInput = (ev: Event) => {
    this.value = (ev.target as HTMLTextAreaElement).value;
    this.dsInput.emit(this.value);
  };

  render() {
    const helperId = `${this.id}-helper`;
    const message = this.invalid ? this.errorMessage ?? this.helperText : this.helperText;
    return (
      <Host>
        {this.label && <label class="label" part="label" htmlFor={this.id}>{this.label}{this.required && <span class="required"> *</span>}</label>}
        <textarea
          id={this.id}
          class="textarea"
          part="textarea"
          name={this.name}
          rows={this.rows}
          placeholder={this.placeholder}
          disabled={this.disabled}
          required={this.required}
          aria-invalid={this.invalid ? 'true' : 'false'}
          aria-describedby={message ? helperId : undefined}
          onInput={this.onInput}
        >{this.value}</textarea>
        {message && <span id={helperId} class="helper" part="helper" role={this.invalid ? 'alert' : undefined}>{message}</span>}
      </Host>
    );
  }
}
