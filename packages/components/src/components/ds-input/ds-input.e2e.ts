import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';

describe('ds-input (e2e + a11y)', () => {
  it('emite dsInput ao digitar', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ds-input label="Nome"></ds-input>`);
    const spy = await page.spyOnEvent('dsInput');
    const input = await page.find('ds-input >>> input');
    await input.type('abc');
    await page.waitForChanges();
    expect(spy.events.length).toBe(3);
    expect(spy.lastEvent.detail).toBe('abc');
  });

  it('é focável por teclado (Tab)', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ds-input label="Nome"></ds-input>`);
    await page.keyboard.press('Tab');
    const isFocused = await page.evaluate(() => {
      const el = document.querySelector('ds-input')!;
      return el.shadowRoot!.activeElement?.tagName === 'INPUT';
    });
    expect(isFocused).toBe(true);
  });

  it('não tem violações de acessibilidade (axe)', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <main>
        <ds-input label="Default" helper-text="ajuda"></ds-input>
        <ds-input label="Erro" invalid error-message="Obrigatório"></ds-input>
        <ds-input label="Desabilitado" disabled></ds-input>
        <ds-input label="Obrigatório" required></ds-input>
      </main>
    `);
    const results = await new AxePuppeteer(page as any)
      .include('main')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    const summary = results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.html) }));
    expect(summary).toEqual([]);
  });
});
