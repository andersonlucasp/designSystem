import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = { title: 'Layout/Accordion', component: 'ds-accordion', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-accordion single style="max-width:420px">
      <ds-accordion-item heading="O que é um Design System?" open>Um conjunto de padrões, tokens e componentes reutilizáveis.</ds-accordion-item>
      <ds-accordion-item heading="Por que Web Components?">Para consumo multi-stack (React, Angular, Vue).</ds-accordion-item>
      <ds-accordion-item heading="Como contribuir?">Abra um PR seguindo o guia de contribuição.</ds-accordion-item>
    </ds-accordion>`,
};
