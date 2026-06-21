import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Layout/Extras', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Divider: Story = {
  render: () => html`<div style="width:320px">
    <p>Seção acima</p>
    <ds-divider></ds-divider>
    <p>Seção abaixo</p>
    <ds-divider>ou</ds-divider>
  </div>`,
};

export const Calendar: Story = {
  render: () => html`<ds-calendar value="2026-06-21"></ds-calendar>`,
};
