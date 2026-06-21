import type { Preview } from '@storybook/web-components';
// Tokens globais (CSS Custom Properties) — fonte: @ds/tokens
import '@ds/tokens/css';
// Registra os custom elements do DS
import { defineCustomElements } from '@ds/components/loader';

defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    a11y: { test: 'error' },
  },
};

export default preview;
