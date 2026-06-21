import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

/** Navegação entre páginas de resultados. */
@Component({ tag: 'ds-pagination', styleUrl: 'ds-pagination.css', shadow: true })
export class DsPagination {
  /** Página atual (1-based). */
  @Prop({ mutable: true }) page = 1;
  /** Total de páginas. */
  @Prop() total = 1;
  /** Quantidade de páginas vizinhas exibidas ao redor da atual. */
  @Prop() siblings = 1;

  /** Emitido ao mudar de página. */
  @Event() dsPageChange!: EventEmitter<number>;

  private go(p: number) {
    if (p < 1 || p > this.total || p === this.page) return;
    this.page = p;
    this.dsPageChange.emit(p);
  }

  private pages(): (number | '…')[] {
    const { page, total, siblings } = this;
    const range: (number | '…')[] = [];
    const left = Math.max(2, page - siblings);
    const right = Math.min(total - 1, page + siblings);
    range.push(1);
    if (left > 2) range.push('…');
    for (let i = left; i <= right; i++) range.push(i);
    if (right < total - 1) range.push('…');
    if (total > 1) range.push(total);
    return range;
  }

  render() {
    return (
      <Host>
        <nav class="pagination" part="pagination" aria-label="Paginação">
          <button type="button" class="btn" part="prev" aria-label="Página anterior" disabled={this.page <= 1} onClick={() => this.go(this.page - 1)}>‹</button>
          {this.pages().map((p) =>
            p === '…' ? (
              <span class="ellipsis" aria-hidden="true">…</span>
            ) : (
              <button
                type="button"
                class={{ btn: true, active: p === this.page }}
                aria-current={p === this.page ? 'page' : undefined}
                aria-label={`Página ${p}`}
                onClick={() => this.go(p as number)}
              >{p}</button>
            )
          )}
          <button type="button" class="btn" part="next" aria-label="Próxima página" disabled={this.page >= this.total} onClick={() => this.go(this.page + 1)}>›</button>
        </nav>
      </Host>
    );
  }
}
