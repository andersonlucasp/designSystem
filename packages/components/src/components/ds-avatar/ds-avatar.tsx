import { Component, Prop, State, h, Host } from '@stencil/core';

export type DsAvatarSize = 'sm' | 'md' | 'lg';
export type DsAvatarShape = 'circle' | 'square';

/**
 * Representação visual de um usuário ou entidade.
 * Exibe a imagem; em falha ou ausência, mostra as iniciais do nome.
 */
@Component({ tag: 'ds-avatar', styleUrl: 'ds-avatar.css', shadow: true })
export class DsAvatar {
  /** URL da imagem. */
  @Prop() src?: string;
  /** Nome usado para iniciais e texto alternativo. */
  @Prop() name = '';
  /** Tamanho. */
  @Prop({ reflect: true }) size: DsAvatarSize = 'md';
  /** Formato. */
  @Prop({ reflect: true }) shape: DsAvatarShape = 'circle';

  @State() failed = false;

  private initials() {
    return this.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() ?? '')
      .join('');
  }

  render() {
    const showImg = this.src && !this.failed;
    return (
      <Host>
        <span class="avatar" part="avatar" role="img" aria-label={this.name || 'avatar'}>
          {showImg ? (
            <img src={this.src} alt="" onError={() => (this.failed = true)} />
          ) : (
            <span class="initials" aria-hidden="true">{this.initials() || '?'}</span>
          )}
        </span>
      </Host>
    );
  }
}
