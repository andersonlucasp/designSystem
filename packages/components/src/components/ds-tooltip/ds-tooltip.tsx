import { Component, Prop, State, h, Host } from '@stencil/core';

let uid = 0;

/**
 * Dica contextual exibida ao focar/passar o mouse no conteúdo.
 * @slot - Elemento gatilho (trigger).
 */
@Component({ tag: 'ds-tooltip', styleUrl: 'ds-tooltip.css', shadow: true })
export class DsTooltip {
  private tipId = `ds-tooltip-${uid++}`;

  /** Texto da dica. */
  @Prop() content = '';
  /** Posição. */
  @Prop({ reflect: true }) placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  @State() open = false;

  private show = () => (this.open = true);
  private hide = () => (this.open = false);

  render() {
    return (
      <Host
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
        onFocusin={this.show}
        onFocusout={this.hide}
      >
        <span class="trigger" part="trigger" aria-describedby={this.tipId}>
          <slot />
        </span>
        <span
          id={this.tipId}
          class={{ tip: true, open: this.open }}
          part="tip"
          role="tooltip"
        >{this.content}</span>
      </Host>
    );
  }
}
