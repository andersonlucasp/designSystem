import { Component, Prop, State, Event, EventEmitter, h, Host, Watch } from '@stencil/core';

export interface DsTab { value: string; label: string; disabled?: boolean }

/**
 * Conjunto de abas. Os painéis são slots nomeados com o `value` de cada aba.
 * @slot {value} - Conteúdo do painel correspondente a cada aba.
 */
@Component({ tag: 'ds-tabs', styleUrl: 'ds-tabs.css', shadow: true })
export class DsTabs {
  /** Lista de abas (array ou JSON string). */
  @Prop() tabs: DsTab[] | string = [];
  /** Valor da aba ativa. */
  @Prop({ mutable: true }) active?: string;

  @State() parsed: DsTab[] = [];

  /** Emitido ao trocar de aba. */
  @Event() dsTabChange!: EventEmitter<string>;

  componentWillLoad() { this.parse(); }
  @Watch('tabs') parse() {
    this.parsed = typeof this.tabs === 'string' ? JSON.parse(this.tabs || '[]') : this.tabs;
    if (!this.active && this.parsed.length) this.active = this.parsed[0].value;
  }

  private select(value: string) {
    this.active = value;
    this.dsTabChange.emit(value);
  }

  private onKey = (ev: KeyboardEvent, idx: number) => {
    const enabled = this.parsed.filter((t) => !t.disabled);
    const curr = enabled.findIndex((t) => t.value === this.parsed[idx].value);
    let next = -1;
    if (ev.key === 'ArrowRight') next = (curr + 1) % enabled.length;
    if (ev.key === 'ArrowLeft') next = (curr - 1 + enabled.length) % enabled.length;
    if (ev.key === 'Home') next = 0;
    if (ev.key === 'End') next = enabled.length - 1;
    if (next >= 0) {
      ev.preventDefault();
      this.select(enabled[next].value);
    }
  };

  render() {
    return (
      <Host>
        <div class="tablist" part="tablist" role="tablist">
          {this.parsed.map((t, i) => (
            <button
              type="button"
              class={{ tab: true, active: t.value === this.active }}
              part="tab"
              role="tab"
              aria-selected={t.value === this.active ? 'true' : 'false'}
              tabindex={t.value === this.active ? '0' : '-1'}
              disabled={t.disabled}
              onClick={() => this.select(t.value)}
              onKeyDown={(e) => this.onKey(e, i)}
            >{t.label}</button>
          ))}
        </div>
        <div class="panel" part="panel" role="tabpanel">
          {this.active && <slot name={this.active} />}
        </div>
      </Host>
    );
  }
}
