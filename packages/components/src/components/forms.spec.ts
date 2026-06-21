import { newSpecPage } from '@stencil/core/testing';
import { DsCheckbox } from './ds-checkbox/ds-checkbox';
import { DsRadio } from './ds-radio/ds-radio';
import { DsSwitch } from './ds-switch/ds-switch';
import { DsSelect } from './ds-select/ds-select';
import { DsTextarea } from './ds-textarea/ds-textarea';

describe('form controls', () => {
  it('checkbox emite dsChange ao marcar', async () => {
    const page = await newSpecPage({ components: [DsCheckbox], html: `<ds-checkbox>X</ds-checkbox>` });
    let val: boolean | undefined;
    page.root!.addEventListener('dsChange', (e: any) => (val = e.detail));
    const input = page.root!.shadowRoot!.querySelector('input')!;
    input.checked = true;
    input.dispatchEvent(new Event('change'));
    await page.waitForChanges();
    expect(val).toBe(true);
  });

  it('radio expõe value e checked', async () => {
    const page = await newSpecPage({ components: [DsRadio], html: `<ds-radio name="g" value="a" checked>A</ds-radio>` });
    const input = page.root!.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('type')).toBe('radio');
    expect(input.checked).toBe(true);
  });

  it('switch usa role=switch e reflete checked', async () => {
    const page = await newSpecPage({ components: [DsSwitch], html: `<ds-switch checked>On</ds-switch>` });
    const input = page.root!.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('role')).toBe('switch');
    expect(input.getAttribute('aria-checked')).toBe('true');
  });

  it('select renderiza opções a partir de JSON', async () => {
    const page = await newSpecPage({
      components: [DsSelect],
      html: `<ds-select label="P" options='[{"value":"a","label":"A"},{"value":"b","label":"B"}]'></ds-select>`,
    });
    const opts = page.root!.shadowRoot!.querySelectorAll('option');
    expect(opts.length).toBe(2);
  });

  it('textarea marca aria-invalid e mostra erro', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea invalid error-message="Erro"></ds-textarea>`,
    });
    const ta = page.root!.shadowRoot!.querySelector('textarea')!;
    expect(ta.getAttribute('aria-invalid')).toBe('true');
    expect(page.root!.shadowRoot!.querySelector('.helper')!.textContent).toBe('Erro');
  });
});
