import { Component, Prop, h, Host } from '@stencil/core';

/** Placeholder de carregamento (shimmer). */
@Component({ tag: 'ds-skeleton', styleUrl: 'ds-skeleton.css', shadow: true })
export class DsSkeleton {
  /** Formato. */
  @Prop({ reflect: true }) shape: 'text' | 'circle' | 'rect' = 'text';
  /** Largura CSS (ex.: "200px", "100%"). */
  @Prop() width?: string;
  /** Altura CSS. */
  @Prop() height?: string;

  render() {
    return (
      <Host aria-hidden="true">
        <span class="skeleton" part="skeleton" style={{ width: this.width, height: this.height }} />
      </Host>
    );
  }
}
