import { EventEmitter } from '../../stencil-public-runtime';
export declare class CAccordion {
  value: number | string | (number | string)[];
  mandatory: boolean;
  multiple: boolean;
  outlined: boolean;
  changeValue: EventEmitter<number | string>;
  el: HTMLCAccordionElement;
  watchPropHandler(value: string | number): void;
  onAccordionItemChange(event: CustomEvent<{
    value: number | string;
    expanded: boolean;
  }>): void;
  get items(): HTMLCAccordionItemElement[];
  private _handleItemExpansion;
  componentDidLoad(): void;
  render(): any;
}
