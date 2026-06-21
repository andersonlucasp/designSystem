import { Component, Prop, State, Event, EventEmitter, h, Host } from '@stencil/core';

/** Calendário de mês para seleção de data (valor em formato ISO YYYY-MM-DD). */
@Component({ tag: 'ds-calendar', styleUrl: 'ds-calendar.css', shadow: true })
export class DsCalendar {
  /** Data selecionada (ISO YYYY-MM-DD). */
  @Prop({ mutable: true }) value?: string;
  /** Localidade para nomes de mês/dia. */
  @Prop() locale = 'pt-BR';

  @State() view!: Date; // primeiro dia do mês exibido

  /** Emitido ao selecionar uma data (ISO). */
  @Event() dsSelect!: EventEmitter<string>;

  componentWillLoad() {
    const base = this.value ? new Date(this.value + 'T00:00:00') : new Date();
    this.view = new Date(base.getFullYear(), base.getMonth(), 1);
  }

  private iso(d: Date) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private changeMonth(delta: number) {
    this.view = new Date(this.view.getFullYear(), this.view.getMonth() + delta, 1);
  }

  private select(d: Date) {
    this.value = this.iso(d);
    this.dsSelect.emit(this.value);
  }

  private buildGrid(): (Date | null)[] {
    const year = this.view.getFullYear();
    const month = this.view.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    return cells;
  }

  render() {
    const monthLabel = this.view.toLocaleDateString(this.locale, { month: 'long', year: 'numeric' });
    const weekdays = Array.from({ length: 7 }, (_, i) =>
      new Date(2024, 0, 7 + i).toLocaleDateString(this.locale, { weekday: 'short' })
    );
    const today = this.iso(new Date());
    return (
      <Host>
        <div class="calendar" part="calendar" role="group" aria-label={monthLabel}>
          <div class="header">
            <button type="button" class="nav" aria-label="Mês anterior" onClick={() => this.changeMonth(-1)}>‹</button>
            <span class="month" part="month">{monthLabel}</span>
            <button type="button" class="nav" aria-label="Próximo mês" onClick={() => this.changeMonth(1)}>›</button>
          </div>
          <div class="grid">
            {weekdays.map((w) => <span class="weekday" aria-hidden="true">{w}</span>)}
            {this.buildGrid().map((d) =>
              d === null ? (
                <span class="empty" />
              ) : (
                <button
                  type="button"
                  class={{ day: true, selected: this.iso(d) === this.value, today: this.iso(d) === today }}
                  aria-pressed={this.iso(d) === this.value ? 'true' : 'false'}
                  aria-label={d.toLocaleDateString(this.locale, { day: 'numeric', month: 'long', year: 'numeric' })}
                  onClick={() => this.select(d)}
                >{d.getDate()}</button>
              )
            )}
          </div>
        </div>
      </Host>
    );
  }
}
