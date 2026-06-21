import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Feedback/Badge',
  component: 'ds-badge',
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['neutral', 'primary', 'success', 'danger', 'warning'] }, dot: { control: 'boolean' } },
  args: { variant: 'primary', dot: false },
  render: (a) => html`<ds-badge variant=${a.variant} ?dot=${a.dot}>Badge</ds-badge>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const All: Story = {
  render: () => html`<div style="display:flex;gap:8px">
    ${['neutral', 'primary', 'success', 'danger', 'warning'].map((v) => html`<ds-badge variant=${v}>${v}</ds-badge>`)}
  </div>`,
};
