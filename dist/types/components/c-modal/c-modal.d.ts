import { EventEmitter } from '../../stencil-public-runtime';
export declare class CModal {
  el: HTMLCModalElement;
  value: boolean;
  dismissable: boolean;
  width: string | number;
  zIndex: number;
  changeValue: EventEmitter<boolean>;
  innerValue: boolean;
  animateModal: boolean;
  private _debounce;
  onValueChange(value: boolean): void;
  private _hideModal;
  componentDidLoad(): void;
  render(): any;
}
