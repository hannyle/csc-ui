import { CToastMessage } from '../../types';
export declare class CToasts {
  el: HTMLCToastsElement;
  absolute: boolean;
  horizontal: 'left' | 'center' | 'right';
  vertical: 'top' | 'bottom';
  messages: CToastMessage[];
  private _getDefaultOptions;
  addToast(message: CToastMessage): Promise<void>;
  removeToast(id: string): Promise<void>;
  private _onMessageClose;
  private _removeMessage;
  private _renderMessage;
  render(): any;
}
