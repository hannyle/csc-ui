import { CMenuCustomTrigger, CMenuOption } from '../../types';
export declare class CMenu {
  host: HTMLCMenuElement;
  items: CMenuOption[];
  simple: boolean;
  small: boolean;
  nohover: boolean;
  itemsPerPage: number;
  customTrigger: CMenuCustomTrigger;
  menuItemsComponent: HTMLCMenuItemsElement | null;
  menuWrapperComponent: HTMLDivElement | null;
  currentIndex: number;
  active: boolean;
  handleKeyDown(ev: KeyboardEvent): void;
  private _uniqueId;
  private _createWrapperElement;
  private _getNativeChild;
  private _addMenuItemsComponentListeners;
  private _getHostPosition;
  private _hideMenu;
  private _onOpen;
  private _onClick;
  disconnectedCallback(): void;
  private _renderCustomTrigger;
  render(): any;
}
