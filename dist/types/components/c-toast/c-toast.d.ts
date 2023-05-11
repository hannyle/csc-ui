import { EventEmitter } from '../../stencil-public-runtime';
import { CToastMessage } from '../../types';
export declare class CToast {
  el: HTMLCToastElement;
  message: CToastMessage;
  close: EventEmitter<CToastMessage>;
  private _closed;
  private _startTime;
  private _remainingTime;
  private _icons;
  private _timeout;
  closeToast(): Promise<void>;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private _onMouseEnter;
  private _onMouseLeave;
  private _renderCloseButton;
  render(): any;
}
