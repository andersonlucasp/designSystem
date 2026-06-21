import { Component, Prop, State, Event, EventEmitter, Watch, h, Host } from '@stencil/core';

export interface DsOption { value: string; label: string; disabled?: boolean }

let uid = 0;

/**
 * Campo de seleção (dropdown). Encapsula um <select> nativo para acessibilidade
 * e navegação por teclado completas.
 */
@Component({ tag: 'ds-select', styleUrl: 'ds-select.css', shadow: true })
export class DsSelect {
  private id = `ds-select-${uid++}`;

  /** Rótulo do campo. */
  @Prop() label?: string;
  /** Opções (array ou JSON string). */
  @Prop() options: DsOption[] | string = [];
  /** Valor selecionado. */
  @Prop({ mutable: true }) value?: string;
  /** Placeholder (opção vazia). */
  @Prop() placeholder?: string;
  /** Texto auxiliar. */
  @Prop() helperText?: string;
  /** Inválido. */
  @Prop({ reflect: true }) invalid = false;
  /** Mensagem de erro. */
  @Prop() errorMessage?: string;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Obrigatório. */
  @Prop() required = false;
  /** Nome (formulário). */
  @Prop() name?: string;

  @State() parsed: DsOption[] = [];

  /** Emitido ao trocar a seleção. */
  @Event() dsChange!: EventEmitter<string>;

  componentWillLoad() { this.parse(); }
  @Watch('options') parse() {
    this.parsed = typeof this.options === 'string' ? JSON.parse(this.options || '[]') : this.options;
  }

  private onChange = (ev: Event) => {
    this.value = (ev.target as HTMLSelectElement).value;
    this.dsChange.emit(this.value);
  };

  render() {
    const helperId = `${this.id}-helper`;
    const message = this.invalid ? this.errorMessage ?? this.helperText : this.helperText;
    return (
      <Host>
        {this.label && <label class="label" part="label" htmlFor={this.id}>{this.label}{this.required && <span class="required"> *</span>}</label>}
        <div class="field" part="field">
          <select
            id={this.id}
            class="select"
            part="select"
            name={this.name}
            disabled={this.disabled}
            required={this.required}
            aria-invalid={this.invalid ? 'true' : 'false'}
            aria-describedby={message ? helperId : undefined}
            onChange={this.onChange}
          >
            {this.placeholder && <option value="" disabled selected={!this.value}>{this.placeholder}</option>}
            {this.parsed.map((o) => (
              <option value={o.value} disabled={o.disabled} selected={o.value === this.value}>{o.label}</option>
            ))}
          </select>
          <span class="chevron" aria-hidden="true">⌄</span>
        </div>
        {message && <span id={helperId} class="helper" part="helper" role={this.invalid ? 'alert' : undefined}>{message}</span>}
      </Host>
    );
  }
}
