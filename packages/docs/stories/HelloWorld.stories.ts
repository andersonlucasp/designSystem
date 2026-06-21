import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Validation/Hello World',
  component: 'ds-hello-world',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text', description: 'Nome exibido na saudação' },
  },
  args: { name: 'Design System' },
  render: (args) => html`<ds-hello-world name=${args.name}></ds-hello-world>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const CustomName: Story = {
  args: { name: 'Lucas' },
};
