/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ds/components';


@ProxyCmp({
  inputs: ['single']
})
@Component({
  selector: 'ds-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['single'],
})
export class DsAccordion {
  protected el: HTMLDsAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsAccordion extends Components.DsAccordion {}


@ProxyCmp({
  inputs: ['disabled', 'heading', 'open']
})
@Component({
  selector: 'ds-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'heading', 'open'],
})
export class DsAccordionItem {
  protected el: HTMLDsAccordionItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsToggle']);
  }
}


export declare interface DsAccordionItem extends Components.DsAccordionItem {
  /**
   * Emitido ao alternar, com o novo estado.
   */
  dsToggle: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['dismissLabel', 'dismissible', 'heading', 'variant']
})
@Component({
  selector: 'ds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissLabel', 'dismissible', 'heading', 'variant'],
})
export class DsAlert {
  protected el: HTMLDsAlertElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsDismiss']);
  }
}


export declare interface DsAlert extends Components.DsAlert {
  /**
   * Emitido ao dispensar.
   */
  dsDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['name', 'shape', 'size', 'src']
})
@Component({
  selector: 'ds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'shape', 'size', 'src'],
})
export class DsAvatar {
  protected el: HTMLDsAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsAvatar extends Components.DsAvatar {}


@ProxyCmp({
  inputs: ['dot', 'variant']
})
@Component({
  selector: 'ds-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dot', 'variant'],
})
export class DsBadge {
  protected el: HTMLDsBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBadge extends Components.DsBadge {}


@ProxyCmp({
})
@Component({
  selector: 'ds-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class DsBreadcrumb {
  protected el: HTMLDsBreadcrumbElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBreadcrumb extends Components.DsBreadcrumb {}


@ProxyCmp({
  inputs: ['current', 'href']
})
@Component({
  selector: 'ds-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href'],
})
export class DsBreadcrumbItem {
  protected el: HTMLDsBreadcrumbItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBreadcrumbItem extends Components.DsBreadcrumbItem {}


@ProxyCmp({
  inputs: ['disabled', 'fullWidth', 'label', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'fullWidth', 'label', 'loading', 'size', 'type', 'variant'],
})
export class DsButton {
  protected el: HTMLDsButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsClick']);
  }
}


export declare interface DsButton extends Components.DsButton {
  /**
   * Emitido ao clicar (quando habilitado e fora de loading).
   */
  dsClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['locale', 'value']
})
@Component({
  selector: 'ds-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['locale', 'value'],
})
export class DsCalendar {
  protected el: HTMLDsCalendarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsSelect']);
  }
}


export declare interface DsCalendar extends Components.DsCalendar {
  /**
   * Emitido ao selecionar uma data (ISO).
   */
  dsSelect: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['variant']
})
@Component({
  selector: 'ds-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['variant'],
})
export class DsCard {
  protected el: HTMLDsCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCard extends Components.DsCard {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'required', 'value']
})
@Component({
  selector: 'ds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'required', 'value'],
})
export class DsCheckbox {
  protected el: HTMLDsCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsCheckbox extends Components.DsCheckbox {
  /**
   * Emitido ao alternar, com o novo estado.
   */
  dsChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['orientation']
})
@Component({
  selector: 'ds-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation'],
})
export class DsDivider {
  protected el: HTMLDsDividerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsDivider extends Components.DsDivider {}


@ProxyCmp({
  inputs: ['name']
})
@Component({
  selector: 'ds-hello-world',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name'],
})
export class DsHelloWorld {
  protected el: HTMLDsHelloWorldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsHelloWorld extends Components.DsHelloWorld {}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'placeholder', 'required', 'type', 'value']
})
@Component({
  selector: 'ds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'placeholder', 'required', 'type', 'value'],
})
export class DsInput {
  protected el: HTMLDsInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsInput', 'dsChange']);
  }
}


export declare interface DsInput extends Components.DsInput {
  /**
   * Emitido a cada digitação, com o valor atual.
   */
  dsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitido ao confirmar a mudança (evento change nativo).
   */
  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['href', 'rel', 'target', 'variant']
})
@Component({
  selector: 'ds-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href', 'rel', 'target', 'variant'],
})
export class DsLink {
  protected el: HTMLDsLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsLink extends Components.DsLink {}


@ProxyCmp({
  inputs: ['dismissible', 'heading', 'open']
})
@Component({
  selector: 'ds-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'heading', 'open'],
})
export class DsModal {
  protected el: HTMLDsModalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsClose']);
  }
}


export declare interface DsModal extends Components.DsModal {
  /**
   * Emitido ao fechar.
   */
  dsClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['page', 'siblings', 'total']
})
@Component({
  selector: 'ds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['page', 'siblings', 'total'],
})
export class DsPagination {
  protected el: HTMLDsPaginationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsPageChange']);
  }
}


export declare interface DsPagination extends Components.DsPagination {
  /**
   * Emitido ao mudar de página.
   */
  dsPageChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['label', 'max', 'value', 'variant']
})
@Component({
  selector: 'ds-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'max', 'value', 'variant'],
})
export class DsProgress {
  protected el: HTMLDsProgressElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsProgress extends Components.DsProgress {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'value'],
})
export class DsRadio {
  protected el: HTMLDsRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsRadio extends Components.DsRadio {
  /**
   * Emitido ao selecionar, com o valor.
   */
  dsChange: EventEmitter<CustomEvent<string | undefined>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'options', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'ds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'options', 'placeholder', 'required', 'value'],
})
export class DsSelect {
  protected el: HTMLDsSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsSelect extends Components.DsSelect {
  /**
   * Emitido ao trocar a seleção.
   */
  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['height', 'shape', 'width']
})
@Component({
  selector: 'ds-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'shape', 'width'],
})
export class DsSkeleton {
  protected el: HTMLDsSkeletonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSkeleton extends Components.DsSkeleton {}


@ProxyCmp({
  inputs: ['label', 'size']
})
@Component({
  selector: 'ds-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'size'],
})
export class DsSpinner {
  protected el: HTMLDsSpinnerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSpinner extends Components.DsSpinner {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name']
})
@Component({
  selector: 'ds-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name'],
})
export class DsSwitch {
  protected el: HTMLDsSwitchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsSwitch extends Components.DsSwitch {
  /**
   * Emitido ao alternar, com o novo estado.
   */
  dsChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['active', 'tabs']
})
@Component({
  selector: 'ds-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'tabs'],
})
export class DsTabs {
  protected el: HTMLDsTabsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsTabChange']);
  }
}


export declare interface DsTabs extends Components.DsTabs {
  /**
   * Emitido ao trocar de aba.
   */
  dsTabChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['removable', 'removeLabel', 'variant']
})
@Component({
  selector: 'ds-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['removable', 'removeLabel', 'variant'],
})
export class DsTag {
  protected el: HTMLDsTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsRemove']);
  }
}


export declare interface DsTag extends Components.DsTag {
  /**
   * Emitido ao clicar no botão de remoção.
   */
  dsRemove: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'placeholder', 'required', 'rows', 'value']
})
@Component({
  selector: 'ds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'placeholder', 'required', 'rows', 'value'],
})
export class DsTextarea {
  protected el: HTMLDsTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsInput']);
  }
}


export declare interface DsTextarea extends Components.DsTextarea {
  /**
   * Emitido a cada digitação.
   */
  dsInput: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['content', 'placement']
})
@Component({
  selector: 'ds-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'placement'],
})
export class DsTooltip {
  protected el: HTMLDsTooltipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTooltip extends Components.DsTooltip {}


