/**
 * Style Dictionary v4 — pipeline de tokens.
 * Fonte: tokens/*.json (export das Figma Variables).
 * Saídas: CSS Custom Properties + JS (ES6) + tipos TypeScript.
 */
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { outputReferences: true }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/es6'
        },
        {
          destination: 'index.d.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    }
  }
};
