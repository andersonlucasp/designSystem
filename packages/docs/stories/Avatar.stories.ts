import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Data Display/Avatar',
  component: 'ds-avatar',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    src: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    shape: { control: 'select', options: ['circle', 'square'] },
  },
  args: { name: 'Lucas Paiva', size: 'md', shape: 'circle' },
  render: (a) => html`<ds-avatar name=${a.name} src=${a.src ?? ''} size=${a.size} shape=${a.shape}></ds-avatar>`,
};
export default meta;
type Story = StoryObj;
export const Initials: Story = {};
export const Sizes: Story = {
  render: () => html`<div style="display:flex;gap:12px;align-items:center">
    <ds-avatar name="A B" size="sm"></ds-avatar><ds-avatar name="A B" size="md"></ds-avatar><ds-avatar name="A B" size="lg"></ds-avatar>
  </div>`,
};
