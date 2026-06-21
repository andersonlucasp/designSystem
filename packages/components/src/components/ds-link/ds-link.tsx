import { Component, Prop, h, Host } from '@stencil/core';

/**
 * Link de navegação estilizado.
 * @slot - Texto do link.
 */
@Component({ tag: 'ds-link', styleUrl: 'ds-link.css', shadow: true })
export class DsLink {
  /** URL de destino. */
  @Prop() href?: string;
  /** Target do link. */
  @Prop() target?: string;
  /** Relação (rel). */
  @Prop() rel?: string;
  /** Ênfase visual. */
  @Prop({ reflect: true }) variant: 'default' | 'subtle' = 'default';

  render() {
    const external = this.target === '_blank';
    return (
      <Host>
        <a
          class="link"
          part="link"
          href={this.href}
          target={this.target}
          rel={this.rel ?? (external ? 'noopener noreferrer' : undefined)}
        >
          <slot />
        </a>
      </Host>
    );
  }
}
