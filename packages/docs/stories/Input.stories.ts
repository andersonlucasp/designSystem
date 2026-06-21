import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Inputs/Input',
  component: 'ds-input',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Helper text',
    type: 'text',
    invalid: false,
    disabled: false,
    required: false,
  },
  render: (a) => html`
    <ds-input
      style="width:280px"
      label=${a.label}
      placeholder=${a.placeholder}
      helper-text=${a.helperText}
      error-message=${a.errorMessage ?? ''}
      type=${a.type}
      ?invalid=${a.invalid}
      ?disabled=${a.disabled}
      ?required=${a.required}
    ></ds-input>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const Error: Story = {
  args: { invalid: true, errorMessage: 'Este campo é obrigatório' },
};
export const Disabled: Story = { args: { disabled: true } };
export const Password: Story = {
  args: { type: 'password', label: 'Senha', placeholder: '••••••••' },
};

/** Matriz de estados (referência do Figma). */
export const AllStates: Story = {
  render: () => html`
    <div style="display:flex;gap:40px;flex-wrap:wrap">
      <ds-input style="width:240px" label="Default" placeholder="Placeholder" helper-text="Helper text"></ds-input>
      <ds-input style="width:240px" label="Error" placeholder="Placeholder" invalid error-message="Mensagem de erro"></ds-input>
      <ds-input style="width:240px" label="Disabled" placeholder="Placeholder" helper-text="Helper text" disabled></ds-input>
    </div>
  `,
};
