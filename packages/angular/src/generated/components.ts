/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ds/components';


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


