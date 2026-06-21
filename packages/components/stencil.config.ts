import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ds-components',
  outputTargets: [
    // Web Components padrão (custom elements + lazy loader)
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // Documentação JSON (consumida pelo Storybook / docs)
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    // Wrappers gerados por framework
    reactOutputTarget({
      outDir: '../react/src/generated',
    }),
    angularOutputTarget({
      componentCorePackage: '@ds/components',
      outputType: 'component',
      directivesProxyFile: '../angular/src/generated/components.ts',
      directivesArrayFile: '../angular/src/generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@ds/components',
      proxiesFile: '../vue/src/generated/components.ts',
      includeImportCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
