import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from './ds-button';

describe('ds-button', () => {
  it('renderiza com variant/size padrão', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button>Salvar</ds-button>`,
    });
    expect(page.root).toEqualAttribute('variant', 'primary');
    expect(page.root).toEqualAttribute('size', 'md');
    const btn = page.root!.shadowRoot!.querySelector('button')!;
    expect(btn).not.toBeNull();
    expect(btn.getAttribute('type')).toBe('button');
  });

  it('reflete loading com aria-busy e mostra spinner', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button loading>Enviando</ds-button>`,
    });
    const btn = page.root!.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-busy')).toBe('true');
    expect(page.root!.shadowRoot!.querySelector('.spinner')).not.toBeNull();
  });

  it('marca disabled corretamente', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button disabled>Bloqueado</ds-button>`,
    });
    const btn = page.root!.shadowRoot!.querySelector('button')!;
    expect(btn.hasAttribute('disabled')).toBe(true);
    expect(btn.getAttribute('aria-disabled')).toBe('true');
  });

  it('não emite dsClick quando disabled', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button disabled>X</ds-button>`,
    });
    let calls = 0;
    page.root!.addEventListener('dsClick', () => calls++);
    const btn = page.root!.shadowRoot!.querySelector('button')!;
    btn.click();
    await page.waitForChanges();
    expect(calls).toBe(0);
  });
});
