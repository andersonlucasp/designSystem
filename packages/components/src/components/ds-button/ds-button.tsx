import {
  Component,
  Prop,
  Event,
  EventEmitter,
  h,
  Host,
  Element,
} from '@stencil/core';

export type DsButtonVariant = 'primary' | 'secondary' | 'danger';
export type DsButtonSize = 'sm' | 'md' | 'lg';
export type DsButtonType = 'button' | 'submit' | 'reset';

/**
 * Botão de ação. Consome exclusivamente design tokens (CSS Custom Properties).
 * Implementa um <button> nativo no Shadow DOM para garantir acessibilidade
 * (teclado, foco e semântica de leitor de tela).
 *
 * @slot - Conteúdo/rótulo do botão (slot default).
 * @slot start - Ícone ou elemento exibido antes do rótulo.
 * @slot end - Ícone ou elemento exibido após o rótulo.
 *
 * @part button - O elemento <button> interno.
 * @part spinner - O indicador de carregamento (visível quando loading).
 * @part icon-start - Container do slot "start".
 * @part icon-end - Container do slot "end".
 */
@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  @Element() host!: HTMLElement;

  /** Estilo visual / nível de ênfase. */
  @Prop({ reflect: true }) variant: DsButtonVariant = 'primary';

  /** Tamanho do botão. */
  @Prop({ reflect: true }) size: DsButtonSize = 'md';

  /** Desabilita o botão (impede clique e foco). */
  @Prop({ reflect: true }) disabled = false;

  /** Estado de carregamento: mostra spinner e bloqueia interação. */
  @Prop({ reflect: true }) loading = false;

  /** Ocupa 100% da largura do container. */
  @Prop({ reflect: true }) fullWidth = false;

  /** Tipo nativo do botão. */
  @Prop() type: DsButtonType = 'button';

  /** Rótulo acessível quando o botão não tem texto visível (ex.: só ícone). */
  @Prop() label?: string;

  /** Emitido ao clicar (quando habilitado e fora de loading). */
  @Event() dsClick!: EventEmitter<MouseEvent>;

  private handleClick = (ev: MouseEvent) => {
    if (this.disabled || this.loading) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.dsClick.emit(ev);
  };

  render() {
    const isInactive = this.disabled || this.loading;
    return (
      <Host>
        <button
          type={this.type}
          class="btn"
          part="button"
          disabled={this.disabled}
          aria-busy={this.loading ? 'true' : 'false'}
          aria-label={this.label}
          aria-disabled={isInactive ? 'true' : 'false'}
          onClick={this.handleClick}
        >
          {this.loading && (
            <span class="spinner" part="spinner" aria-hidden="true" />
          )}
          <span class="icon-start" part="icon-start" aria-hidden="true">
            <slot name="start" />
          </span>
          <span class="content">
            <slot />
          </span>
          <span class="icon-end" part="icon-end" aria-hidden="true">
            <slot name="end" />
          </span>
        </button>
      </Host>
    );
  }
}
