import { newSpecPage } from '@stencil/core/testing';
import { DsInput } from './ds-input';

describe('ds-input', () => {
  it('associa label ao input via for/id', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input label="Email"></ds-input>`,
    });
    const root = page.root!.shadowRoot!;
    const label = root.querySelector('label')!;
    const input = root.querySelector('input')!;
    expect(label.getAttribute('for')).toBe(input.id);
    expect(input.id).toBeTruthy();
  });

  it('exibe errorMessage e aria-invalid quando invalid', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input invalid error-message="Campo obrigatório" helper-text="ajuda"></ds-input>`,
    });
    const root = page.root!.shadowRoot!;
    const input = root.querySelector('input')!;
    const helper = root.querySelector('.helper')!;
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(helper.textContent).toBe('Campo obrigatório');
    expect(helper.getAttribute('role')).toBe('alert');
  });

  it('liga aria-describedby ao helper', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input helper-text="Use seu email corporativo"></ds-input>`,
    });
    const root = page.root!.shadowRoot!;
    const input = root.querySelector('input')!;
    const helper = root.querySelector('.helper')!;
    expect(input.getAttribute('aria-describedby')).toBe(helper.id);
  });

  it('reflete disabled e required', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input disabled required></ds-input>`,
    });
    const input = page.root!.shadowRoot!.querySelector('input')!;
    expect(input.hasAttribute('disabled')).toBe(true);
    expect(input.hasAttribute('required')).toBe(true);
  });
});
