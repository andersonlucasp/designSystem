import { newE2EPage } from '@stencil/core/testing';
import { AxePuppeteer } from '@axe-core/puppeteer';

/**
 * Auditoria de acessibilidade (axe, WCAG 2.1 AA) de toda a biblioteca.
 * Cada componente é montado em um cenário representativo dentro de <main>.
 */
const markup = `
<main>
  <ds-badge variant="primary">Novo</ds-badge>
  <ds-divider>ou</ds-divider>
  <ds-avatar name="Lucas Paiva"></ds-avatar>
  <ds-spinner label="Carregando"></ds-spinner>
  <ds-tag variant="success" removable>Tag</ds-tag>
  <ds-alert variant="info" heading="Aviso">Mensagem informativa</ds-alert>
  <ds-card><span slot="header">Título</span>Conteúdo<span slot="footer">Rodapé</span></ds-card>
  <ds-checkbox>Aceito os termos</ds-checkbox>
  <ds-radio name="g" value="a">Opção A</ds-radio>
  <ds-switch>Notificações</ds-switch>
  <ds-accordion><ds-accordion-item heading="Seção 1">Conteúdo</ds-accordion-item></ds-accordion>
  <ds-breadcrumb><ds-breadcrumb-item href="/">Início</ds-breadcrumb-item><ds-breadcrumb-item current>Atual</ds-breadcrumb-item></ds-breadcrumb>
  <ds-link href="/docs">Documentação</ds-link>
  <ds-progress value="40" label="Progresso"></ds-progress>
  <ds-tabs tabs='[{"value":"a","label":"Aba A"},{"value":"b","label":"Aba B"}]'><div slot="a">A</div><div slot="b">B</div></ds-tabs>
  <ds-tooltip content="Dica"><ds-button>Hover</ds-button></ds-tooltip>
  <ds-select label="País" options='[{"value":"br","label":"Brasil"}]'></ds-select>
  <ds-textarea label="Comentário" placeholder="Escreva..."></ds-textarea>
  <ds-pagination page="2" total="5"></ds-pagination>
  <ds-calendar value="2026-06-21"></ds-calendar>
  <ds-table caption="Tabela" columns='[{"key":"a","label":"Coluna A"}]' rows='[{"a":"valor"}]'></ds-table>
  <ds-dropdown open><ds-button slot="trigger">Menu</ds-button><ds-dropdown-item>Item</ds-dropdown-item></ds-dropdown>
  <ds-toast variant="info" open duration="0">Notificação</ds-toast>
</main>
`;

describe('Design System — auditoria a11y (axe)', () => {
  it('não tem violações WCAG 2.1 AA na biblioteca', async () => {
    const page = await newE2EPage();
    await page.setContent(markup);
    await page.waitForChanges();
    const results = await new AxePuppeteer(page as any)
      .include('main')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    const summary = results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.html) }));
    expect(summary).toEqual([]);
  });
});
