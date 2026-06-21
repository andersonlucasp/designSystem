import { Component, Prop, h, Host } from '@stencil/core';

/**
 * Componente de validação do pipeline (token → componente → wrapper → story).
 * Não faz parte do inventário real do DS; serve para provar o fluxo end-to-end.
 */
@Component({
  tag: 'ds-hello-world',
  styleUrl: 'ds-hello-world.css',
  shadow: true,
})
export class DsHelloWorld {
  /** Nome exibido na saudação. */
  @Prop() name = 'World';

  render() {
    return (
      <Host>
        <div class="hello" part="container">
          <span class="dot" part="dot" />
          <span class="text">Hello, {this.name}!</span>
        </div>
      </Host>
    );
  }
}
