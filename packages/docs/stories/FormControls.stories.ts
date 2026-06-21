import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Inputs/Form Controls',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Checkbox: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:8px">
    <ds-checkbox>Padrão</ds-checkbox>
    <ds-checkbox checked>Marcado</ds-checkbox>
    <ds-checkbox disabled>Desabilitado</ds-checkbox>
  </div>`,
};

export const Radio: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:8px">
    <ds-radio name="g" value="a" checked>Opção A</ds-radio>
    <ds-radio name="g" value="b">Opção B</ds-radio>
    <ds-radio name="g" value="c" disabled>Opção C</ds-radio>
  </div>`,
};

export const Switch: Story = {
  render: () => html`<div style="display:flex;flex-direction:column;gap:8px">
    <ds-switch>Desligado</ds-switch>
    <ds-switch checked>Ligado</ds-switch>
  </div>`,
};

export const Select: Story = {
  render: () => html`<ds-select label="País" placeholder="Selecione"
    options='[{"value":"br","label":"Brasil"},{"value":"pt","label":"Portugal"}]'></ds-select>`,
};

export const Textarea: Story = {
  render: () => html`<ds-textarea label="Comentário" placeholder="Escreva aqui..." helper-text="Máx. 500 caracteres"></ds-textarea>`,
};
