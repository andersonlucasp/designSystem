/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@ds/components';

import { defineCustomElement as defineDsAccordion } from '@ds/components/components/ds-accordion.js';
import { defineCustomElement as defineDsAccordionItem } from '@ds/components/components/ds-accordion-item.js';
import { defineCustomElement as defineDsAlert } from '@ds/components/components/ds-alert.js';
import { defineCustomElement as defineDsAvatar } from '@ds/components/components/ds-avatar.js';
import { defineCustomElement as defineDsBadge } from '@ds/components/components/ds-badge.js';
import { defineCustomElement as defineDsBreadcrumb } from '@ds/components/components/ds-breadcrumb.js';
import { defineCustomElement as defineDsBreadcrumbItem } from '@ds/components/components/ds-breadcrumb-item.js';
import { defineCustomElement as defineDsButton } from '@ds/components/components/ds-button.js';
import { defineCustomElement as defineDsCalendar } from '@ds/components/components/ds-calendar.js';
import { defineCustomElement as defineDsCard } from '@ds/components/components/ds-card.js';
import { defineCustomElement as defineDsCheckbox } from '@ds/components/components/ds-checkbox.js';
import { defineCustomElement as defineDsDivider } from '@ds/components/components/ds-divider.js';
import { defineCustomElement as defineDsHelloWorld } from '@ds/components/components/ds-hello-world.js';
import { defineCustomElement as defineDsInput } from '@ds/components/components/ds-input.js';
import { defineCustomElement as defineDsLink } from '@ds/components/components/ds-link.js';
import { defineCustomElement as defineDsModal } from '@ds/components/components/ds-modal.js';
import { defineCustomElement as defineDsPagination } from '@ds/components/components/ds-pagination.js';
import { defineCustomElement as defineDsProgress } from '@ds/components/components/ds-progress.js';
import { defineCustomElement as defineDsRadio } from '@ds/components/components/ds-radio.js';
import { defineCustomElement as defineDsSelect } from '@ds/components/components/ds-select.js';
import { defineCustomElement as defineDsSkeleton } from '@ds/components/components/ds-skeleton.js';
import { defineCustomElement as defineDsSpinner } from '@ds/components/components/ds-spinner.js';
import { defineCustomElement as defineDsSwitch } from '@ds/components/components/ds-switch.js';
import { defineCustomElement as defineDsTabs } from '@ds/components/components/ds-tabs.js';
import { defineCustomElement as defineDsTag } from '@ds/components/components/ds-tag.js';
import { defineCustomElement as defineDsTextarea } from '@ds/components/components/ds-textarea.js';
import { defineCustomElement as defineDsTooltip } from '@ds/components/components/ds-tooltip.js';


export const DsAccordion = /*@__PURE__*/ defineContainer<JSX.DsAccordion>('ds-accordion', defineDsAccordion, [
  'single'
]);


export const DsAccordionItem = /*@__PURE__*/ defineContainer<JSX.DsAccordionItem>('ds-accordion-item', defineDsAccordionItem, [
  'heading',
  'open',
  'disabled',
  'dsToggle'
], [
  'dsToggle'
]);


export const DsAlert = /*@__PURE__*/ defineContainer<JSX.DsAlert>('ds-alert', defineDsAlert, [
  'variant',
  'heading',
  'dismissible',
  'dismissLabel',
  'dsDismiss'
], [
  'dsDismiss'
]);


export const DsAvatar = /*@__PURE__*/ defineContainer<JSX.DsAvatar>('ds-avatar', defineDsAvatar, [
  'src',
  'name',
  'size',
  'shape'
]);


export const DsBadge = /*@__PURE__*/ defineContainer<JSX.DsBadge>('ds-badge', defineDsBadge, [
  'variant',
  'dot'
]);


export const DsBreadcrumb = /*@__PURE__*/ defineContainer<JSX.DsBreadcrumb>('ds-breadcrumb', defineDsBreadcrumb);


export const DsBreadcrumbItem = /*@__PURE__*/ defineContainer<JSX.DsBreadcrumbItem>('ds-breadcrumb-item', defineDsBreadcrumbItem, [
  'href',
  'current'
]);


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


export const DsCalendar = /*@__PURE__*/ defineContainer<JSX.DsCalendar>('ds-calendar', defineDsCalendar, [
  'value',
  'locale',
  'dsSelect'
], [
  'dsSelect'
]);


export const DsCard = /*@__PURE__*/ defineContainer<JSX.DsCard>('ds-card', defineDsCard, [
  'variant'
]);


export const DsCheckbox = /*@__PURE__*/ defineContainer<JSX.DsCheckbox>('ds-checkbox', defineDsCheckbox, [
  'checked',
  'indeterminate',
  'disabled',
  'required',
  'name',
  'value',
  'dsChange'
], [
  'dsChange'
]);


export const DsDivider = /*@__PURE__*/ defineContainer<JSX.DsDivider>('ds-divider', defineDsDivider, [
  'orientation'
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


export const DsLink = /*@__PURE__*/ defineContainer<JSX.DsLink>('ds-link', defineDsLink, [
  'href',
  'target',
  'rel',
  'variant'
]);


export const DsModal = /*@__PURE__*/ defineContainer<JSX.DsModal>('ds-modal', defineDsModal, [
  'open',
  'heading',
  'dismissible',
  'dsClose'
], [
  'dsClose'
]);


export const DsPagination = /*@__PURE__*/ defineContainer<JSX.DsPagination>('ds-pagination', defineDsPagination, [
  'page',
  'total',
  'siblings',
  'dsPageChange'
], [
  'dsPageChange'
]);


export const DsProgress = /*@__PURE__*/ defineContainer<JSX.DsProgress>('ds-progress', defineDsProgress, [
  'value',
  'max',
  'label',
  'variant'
]);


export const DsRadio = /*@__PURE__*/ defineContainer<JSX.DsRadio>('ds-radio', defineDsRadio, [
  'checked',
  'disabled',
  'name',
  'value',
  'dsChange'
], [
  'dsChange'
]);


export const DsSelect = /*@__PURE__*/ defineContainer<JSX.DsSelect>('ds-select', defineDsSelect, [
  'label',
  'options',
  'value',
  'placeholder',
  'helperText',
  'invalid',
  'errorMessage',
  'disabled',
  'required',
  'name',
  'dsChange'
], [
  'dsChange'
]);


export const DsSkeleton = /*@__PURE__*/ defineContainer<JSX.DsSkeleton>('ds-skeleton', defineDsSkeleton, [
  'shape',
  'width',
  'height'
]);


export const DsSpinner = /*@__PURE__*/ defineContainer<JSX.DsSpinner>('ds-spinner', defineDsSpinner, [
  'size',
  'label'
]);


export const DsSwitch = /*@__PURE__*/ defineContainer<JSX.DsSwitch>('ds-switch', defineDsSwitch, [
  'checked',
  'disabled',
  'name',
  'dsChange'
], [
  'dsChange'
]);


export const DsTabs = /*@__PURE__*/ defineContainer<JSX.DsTabs>('ds-tabs', defineDsTabs, [
  'tabs',
  'active',
  'dsTabChange'
], [
  'dsTabChange'
]);


export const DsTag = /*@__PURE__*/ defineContainer<JSX.DsTag>('ds-tag', defineDsTag, [
  'variant',
  'removable',
  'removeLabel',
  'dsRemove'
], [
  'dsRemove'
]);


export const DsTextarea = /*@__PURE__*/ defineContainer<JSX.DsTextarea>('ds-textarea', defineDsTextarea, [
  'label',
  'placeholder',
  'helperText',
  'errorMessage',
  'value',
  'rows',
  'invalid',
  'disabled',
  'required',
  'name',
  'dsInput'
], [
  'dsInput'
]);


export const DsTooltip = /*@__PURE__*/ defineContainer<JSX.DsTooltip>('ds-tooltip', defineDsTooltip, [
  'content',
  'placement'
]);

