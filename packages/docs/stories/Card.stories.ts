import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layout/Card',
  component: 'ds-card',
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['elevated', 'outlined'] } },
  args: { variant: 'elevated' },
  render: (a) => html`
    <ds-card variant=${a.variant} style="max-width:320px">
      <span slot="header">Título do card</span>
      Conteúdo principal do card com texto de exemplo.
      <span slot="footer"><ds-button size="sm">Ação</ds-button></span>
    </ds-card>`,
};
export default meta;
type Story = StoryObj;
export const Elevated: Story = {};
export const Outlined: Story = { args: { variant: 'outlined' } };
