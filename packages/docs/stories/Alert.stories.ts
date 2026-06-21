import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Feedback/Alert',
  component: 'ds-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    heading: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  args: { variant: 'info', heading: 'Atenção', dismissible: false },
  render: (a) => html`<ds-alert variant=${a.variant} heading=${a.heading} ?dismissible=${a.dismissible}>Mensagem do alerta.</ds-alert>`,
};
export default meta;
type Story = StoryObj;
export const Info: Story = {};
export const All: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:12px">
    ${['info', 'success', 'warning', 'danger'].map((v) => html`<ds-alert variant=${v} heading=${v}>Mensagem ${v}.</ds-alert>`)}
  </div>`,
};
