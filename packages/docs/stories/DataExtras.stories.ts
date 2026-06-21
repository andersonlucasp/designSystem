import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Data Display/Extras', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Table: Story = {
  render: () => html`
    <ds-table striped caption="Usuários ativos"
      columns='[{"key":"nome","label":"Nome"},{"key":"email","label":"E-mail"},{"key":"plano","label":"Plano","align":"right"}]'
      rows='[{"nome":"Lucas","email":"lucas@ex.com","plano":"Pro"},{"nome":"Maria","email":"maria@ex.com","plano":"Free"}]'
    ></ds-table>`,
};

export const Dropdown: Story = {
  render: () => html`
    <div style="padding:8px 0">
      <ds-dropdown>
        <ds-button slot="trigger">Ações ⌄</ds-button>
        <ds-dropdown-item>Editar</ds-dropdown-item>
        <ds-dropdown-item>Duplicar</ds-dropdown-item>
        <ds-dropdown-item variant="danger">Excluir</ds-dropdown-item>
      </ds-dropdown>
    </div>`,
};

export const Toast: Story = {
  render: () => html`
    <ds-toast variant="success" open duration="0">Alterações salvas com sucesso.</ds-toast>`,
};
