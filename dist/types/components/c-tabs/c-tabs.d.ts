import { EventEmitter } from '../../stencil-public-runtime';
export declare class CTabs {
  value: number | string;
  borderless: boolean;
  changeValue: EventEmitter;
  el: HTMLCTabsElement;
  onExternalValueChange(): void;
  tabChangeHandler(e: any): void;
  handleKeyDown(event: KeyboardEvent): void;
  handleKeyUp(ev: KeyboardEvent): void;
  componentDidLoad(): void;
  get tabs(): HTMLCTabElement[];
  get setsize(): number;
  get availableValues(): (string | number)[];
  private _getTabIndex;
  private _handleActiveTab;
  render(): any;
}
