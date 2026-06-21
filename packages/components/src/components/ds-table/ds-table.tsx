import { Component, Prop, State, Watch, h, Host } from '@stencil/core';

export interface DsColumn { key: string; label: string; align?: 'left' | 'right' | 'center' }

/** Tabela de dados simples, orientada por colunas e linhas. */
@Component({ tag: 'ds-table', styleUrl: 'ds-table.css', shadow: true })
export class DsTable {
  /** Definição das colunas (array ou JSON). */
  @Prop() columns: DsColumn[] | string = [];
  /** Linhas de dados (array de objetos ou JSON). */
  @Prop() rows: Record<string, any>[] | string = [];
  /** Legenda acessível da tabela. */
  @Prop() caption?: string;
  /** Destaca linhas alternadas. */
  @Prop() striped = false;

  @State() cols: DsColumn[] = [];
  @State() data: Record<string, any>[] = [];

  componentWillLoad() { this.parse(); }
  @Watch('columns') @Watch('rows') parse() {
    this.cols = typeof this.columns === 'string' ? JSON.parse(this.columns || '[]') : this.columns;
    this.data = typeof this.rows === 'string' ? JSON.parse(this.rows || '[]') : this.rows;
  }

  render() {
    return (
      <Host>
        <table class={{ table: true, striped: this.striped }} part="table">
          {this.caption && <caption>{this.caption}</caption>}
          <thead>
            <tr>{this.cols.map((c) => <th scope="col" style={{ textAlign: c.align ?? 'left' }}>{c.label}</th>)}</tr>
          </thead>
          <tbody>
            {this.data.map((row) => (
              <tr>{this.cols.map((c) => <td style={{ textAlign: c.align ?? 'left' }}>{row[c.key]}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </Host>
    );
  }
}
