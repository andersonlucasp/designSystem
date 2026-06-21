import { newSpecPage } from '@stencil/core/testing';
import { DsAccordionItem } from './ds-accordion/ds-accordion-item';
import { DsTabs } from './ds-tabs/ds-tabs';
import { DsPagination } from './ds-pagination/ds-pagination';
import { DsAlert } from './ds-alert/ds-alert';
import { DsTag } from './ds-tag/ds-tag';
import { DsModal } from './ds-modal/ds-modal';

describe('interactive components', () => {
  it('accordion-item alterna open e emite dsToggle', async () => {
    const page = await newSpecPage({ components: [DsAccordionItem], html: `<ds-accordion-item heading="H">C</ds-accordion-item>` });
    let detail: boolean | undefined;
    page.root!.addEventListener('dsToggle', (e: any) => (detail = e.detail));
    const btn = page.root!.shadowRoot!.querySelector('button')!;
    btn.click();
    await page.waitForChanges();
    expect(page.root!.getAttribute('open')).not.toBeNull();
    expect(detail).toBe(true);
  });

  it('tabs ativa a primeira aba por padrão', async () => {
    const page = await newSpecPage({
      components: [DsTabs],
      html: `<ds-tabs tabs='[{"value":"a","label":"A"},{"value":"b","label":"B"}]'></ds-tabs>`,
    });
    const selected = page.root!.shadowRoot!.querySelector('[aria-selected="true"]')!;
    expect(selected.textContent).toBe('A');
  });

  it('pagination emite dsPageChange', async () => {
    const page = await newSpecPage({ components: [DsPagination], html: `<ds-pagination page="1" total="5"></ds-pagination>` });
    let p: number | undefined;
    page.root!.addEventListener('dsPageChange', (e: any) => (p = e.detail));
    const next = page.root!.shadowRoot!.querySelector('[part="next"]') as HTMLButtonElement;
    next.click();
    await page.waitForChanges();
    expect(p).toBe(2);
  });

  it('alert danger usa role=alert', async () => {
    const page = await newSpecPage({ components: [DsAlert], html: `<ds-alert variant="danger">erro</ds-alert>` });
    expect(page.root!.shadowRoot!.querySelector('[role="alert"]')).not.toBeNull();
  });

  it('tag emite dsRemove', async () => {
    const page = await newSpecPage({ components: [DsTag], html: `<ds-tag removable>T</ds-tag>` });
    let removed = false;
    page.root!.addEventListener('dsRemove', () => (removed = true));
    (page.root!.shadowRoot!.querySelector('.remove') as HTMLButtonElement).click();
    await page.waitForChanges();
    expect(removed).toBe(true);
  });

  it('modal renderiza dialog nativo', async () => {
    const page = await newSpecPage({ components: [DsModal], html: `<ds-modal heading="T">corpo</ds-modal>` });
    expect(page.root!.shadowRoot!.querySelector('dialog')).not.toBeNull();
  });
});
