import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

let uid = 0;

/**
 * Interruptor on/off.
 * @slot - Rótulo do switch.
 */
@Component({ tag: 'ds-switch', styleUrl: 'ds-switch.css', shadow: true })
export class DsSwitch {
  private id = `ds-switch-${uid++}`;

  /** Estado ligado. */
  @Prop({ mutable: true, reflect: true }) checked = false;
  /** Desabilitado. */
  @Prop({ reflect: true }) disabled = false;
  /** Nome (formulário). */
  @Prop() name?: string;

  /** Emitido ao alternar, com o novo estado. */
  @Event() dsChange!: EventEmitter<boolean>;

  private onChange = (ev: Event) => {
    this.checked = (ev.target as HTMLInputElement).checked;
    this.dsChange.emit(this.checked);
  };

  render() {
    return (
      <Host>
        <label class="wrapper" htmlFor={this.id}>
          <span class="track" part="track">
            <input
              id={this.id}
              type="checkbox"
              role="switch"
              class="control"
              part="control"
              name={this.name}
              checked={this.checked}
              disabled={this.disabled}
              aria-checked={this.checked ? 'true' : 'false'}
              onChange={this.onChange}
            />
            <span class="thumb" part="thumb" aria-hidden="true" />
          </span>
          <span class="label" part="label"><slot /></span>
        </label>
      </Host>
    );
  }
}
