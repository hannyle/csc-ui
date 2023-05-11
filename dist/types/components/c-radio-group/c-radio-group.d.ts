import { EventEmitter } from '../../stencil-public-runtime';
import { CRadioGroupItem } from '../../types';
export declare class CRadioGroup {
  value: string | number | CRadioGroupItem;
  hideDetails: boolean;
  hint: string;
  inline: boolean;
  label: string;
  color: string;
  items: CRadioGroupItem[];
  disabled: boolean;
  returnValue: false;
  required: boolean;
  valid: boolean;
  validation: string;
  changeValue: EventEmitter;
  el: HTMLCRadioGroupElement;
  messageOptions: {
    show: boolean;
    type: string;
    content: string;
  };
  onValidationMessageChange(message: string): void;
  onValidChange(valid: boolean): void;
  componentDidLoad(): void;
  private _containers?;
  private _uniqueId;
  private _handleKeyDown;
  private _handleValidation;
  private _select;
  private _getRadioButton;
  private _renderMessages;
  private _validationIcon;
  render(): any;
}
