import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Actions/Button',
  component: 'ds-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'Estilo visual / nível de ênfase',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão',
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    slotText: { control: 'text', description: 'Conteúdo (slot default)' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    slotText: 'Button',
  },
  render: (a) => html`
    <ds-button
      variant=${a.variant}
      size=${a.size}
      ?disabled=${a.disabled}
      ?loading=${a.loading}
      ?full-width=${a.fullWidth}
    >${a.slotText}</ds-button>
  `,
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Loading: Story = { args: { loading: true, slotText: 'Enviando' } };
export const Disabled: Story = { args: { disabled: true } };

/** Matriz completa: variantes × estados (referência do Figma). */
export const AllVariants: Story = {
  render: () => html`
    <style>
      .grid { display: grid; grid-template-columns: repeat(5, auto); gap: 16px; align-items: center; }
      .row-label { font: 600 13px Inter, sans-serif; color: #6b7280; }
      .col-head { font: 600 11px Inter, sans-serif; color: #9ca3af; text-align: center; }
    </style>
    <div class="grid">
      <span></span>
      <span class="col-head">Default</span>
      <span class="col-head">Hover*</span>
      <span class="col-head">Loading</span>
      <span class="col-head">Disabled</span>
      ${['primary', 'secondary', 'danger'].map(
        (v) => html`
          <span class="row-label">${v}</span>
          <ds-button variant=${v}>Button</ds-button>
          <ds-button variant=${v}>Button</ds-button>
          <ds-button variant=${v} loading>Loading</ds-button>
          <ds-button variant=${v} disabled>Button</ds-button>
        `
      )}
    </div>
    <p style="font:12px Inter,sans-serif;color:#9ca3af;margin-top:12px">
      * Hover e Focus são estados de interação — passe o mouse / use Tab para visualizar.
    </p>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:16px;align-items:center">
      <ds-button size="sm">Small</ds-button>
      <ds-button size="md">Medium</ds-button>
      <ds-button size="lg">Large</ds-button>
    </div>
  `,
};
