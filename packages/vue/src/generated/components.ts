/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@ds/components';

import { defineCustomElement as defineDsButton } from '@ds/components/components/ds-button.js';
import { defineCustomElement as defineDsHelloWorld } from '@ds/components/components/ds-hello-world.js';
import { defineCustomElement as defineDsInput } from '@ds/components/components/ds-input.js';


export const DsButton = /*@__PURE__*/ defineContainer<JSX.DsButton>('ds-button', defineDsButton, [
  'variant',
  'size',
  'disabled',
  'loading',
  'fullWidth',
  'type',
  'label',
  'dsClick'
], [
  'dsClick'
]);


export const DsHelloWorld = /*@__PURE__*/ defineContainer<JSX.DsHelloWorld>('ds-hello-world', defineDsHelloWorld, [
  'name'
]);


export const DsInput = /*@__PURE__*/ defineContainer<JSX.DsInput>('ds-input', defineDsInput, [
  'label',
  'placeholder',
  'helperText',
  'errorMessage',
  'value',
  'type',
  'invalid',
  'disabled',
  'required',
  'name',
  'dsInput',
  'dsChange'
], [
  'dsInput',
  'dsChange'
]);

