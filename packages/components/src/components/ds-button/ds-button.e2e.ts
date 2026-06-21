import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';

describe('ds-button (e2e + a11y)', () => {
  it('renderiza e dispara dsClick ao clicar', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ds-button>Salvar</ds-button>`);
    const clickSpy = await page.spyOnEvent('dsClick');
    const el = await page.find('ds-button');
    await el.click();
    await page.waitForChanges();
    expect(clickSpy).toHaveReceivedEventTimes(1);
  });

  it('é acionável por teclado (Enter)', async () => {
    const page = await newE2EPage();
    await page.setContent(`<ds-button>OK</ds-button>`);
    const clickSpy = await page.spyOnEvent('dsClick');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();
    expect(clickSpy.events.length).toBeGreaterThanOrEqual(1);
  });

  it('não tem violações de acessibilidade (axe) nas três variantes', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <main>
        <ds-button variant="primary">Primary</ds-button>
        <ds-button variant="secondary">Secondary</ds-button>
        <ds-button variant="danger">Danger</ds-button>
        <ds-button disabled>Disabled</ds-button>
      </main>
    `);
    const results = await new AxePuppeteer(page as any)
      .include('main')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    const summary = results.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => n.html),
    }));
    expect(summary).toEqual([]);
  });
});
