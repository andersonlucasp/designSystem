import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Navigation/Components', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Breadcrumb: Story = {
  render: () => html`
    <ds-breadcrumb>
      <ds-breadcrumb-item href="/">Início</ds-breadcrumb-item>
      <ds-breadcrumb-item href="/produtos">Produtos</ds-breadcrumb-item>
      <ds-breadcrumb-item current>Detalhe</ds-breadcrumb-item>
    </ds-breadcrumb>`,
};

export const Link: Story = {
  render: () => html`<p>Visite a <ds-link href="#">documentação</ds-link> ou o <ds-link href="#" variant="subtle">guia</ds-link>.</p>`,
};

export const Tabs: Story = {
  render: () => html`
    <ds-tabs tabs='[{"value":"a","label":"Visão geral"},{"value":"b","label":"Specs"},{"value":"c","label":"Acessibilidade"}]'>
      <div slot="a">Conteúdo da visão geral.</div>
      <div slot="b">Especificações técnicas.</div>
      <div slot="c">Notas de acessibilidade.</div>
    </ds-tabs>`,
};

export const Pagination: Story = {
  render: () => html`<ds-pagination page="3" total="10"></ds-pagination>`,
};
