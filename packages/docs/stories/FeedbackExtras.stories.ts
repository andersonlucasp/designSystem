import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Feedback/Extras', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Spinner: Story = {
  render: () => html`<div style="display:flex;gap:16px;align-items:center">
    <ds-spinner size="sm"></ds-spinner><ds-spinner></ds-spinner><ds-spinner size="lg"></ds-spinner>
  </div>`,
};

export const Progress: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:12px;width:280px">
    <ds-progress value="30"></ds-progress>
    <ds-progress value="70" variant="success"></ds-progress>
    <ds-progress></ds-progress>
  </div>`,
};

export const Skeleton: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:8px;width:280px">
    <ds-skeleton shape="text" width="60%"></ds-skeleton>
    <ds-skeleton shape="text"></ds-skeleton>
    <ds-skeleton shape="rect"></ds-skeleton>
  </div>`,
};

export const Tooltip: Story = {
  render: () => html`<div style="padding:40px"><ds-tooltip content="Dica útil"><ds-button>Passe o mouse</ds-button></ds-tooltip></div>`,
};

export const Modal: Story = {
  render: () => html`
    <div>
      <ds-button id="open-modal">Abrir modal</ds-button>
      <ds-modal id="demo-modal" heading="Confirmação">
        Tem certeza que deseja continuar?
        <span slot="footer">
          <ds-button variant="secondary" id="cancel-modal">Cancelar</ds-button>
          <ds-button id="confirm-modal">Confirmar</ds-button>
        </span>
      </ds-modal>
      <script>
        (() => {
          const m = document.getElementById('demo-modal');
          document.getElementById('open-modal').addEventListener('click', () => (m.open = true));
          document.getElementById('cancel-modal').addEventListener('click', () => (m.open = false));
          document.getElementById('confirm-modal').addEventListener('click', () => (m.open = false));
        })();
      </script>
    </div>`,
};
