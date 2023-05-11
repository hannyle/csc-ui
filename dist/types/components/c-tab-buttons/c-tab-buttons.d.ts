import { EventEmitter } from '../../stencil-public-runtime';
export declare class CTabButtons {
  value: number | string;
  mandatory: boolean;
  size: 'default' | 'small';
  hostDisabled: boolean;
  changeValue: EventEmitter<number | string>;
  el: HTMLCTabButtonsElement;
  private _isIndexBased;
  onValueChange(value: string | number): void;
  onTabChange(event: CustomEvent): void;
  get buttons(): HTMLCButtonElement[];
  componentDidLoad(): void;
  render(): any;
}
