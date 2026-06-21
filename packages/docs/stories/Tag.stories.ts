import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Data Display/Tag',
  component: 'ds-tag',
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['neutral', 'primary', 'success', 'danger', 'warning'] }, removable: { control: 'boolean' } },
  args: { variant: 'neutral', removable: false },
  render: (a) => html`<ds-tag variant=${a.variant} ?removable=${a.removable}>Tag</ds-tag>`,
};
export default meta;
type Story = StoryObj;
export const Default: Story = {};
export const Removable: Story = { args: { removable: true, variant: 'primary' } };
