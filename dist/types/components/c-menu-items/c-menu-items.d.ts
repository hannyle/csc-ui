import { EventEmitter } from '../../stencil-public-runtime';
import { CMenuOption } from '../../types';
export declare class CMenuItems {
  host: HTMLCMenuItemsElement;
  items: CMenuOption[];
  small: boolean;
  active: boolean;
  parentType: string;
  parent: HTMLCMenuElement;
  top: number;
  index: number | null;
  itemsPerPage: number;
  close: EventEmitter;
  open: EventEmitter<{
    height: number;
    width: number;
    isInView: {
      x: boolean;
      y: boolean;
    };
  }>;
  scrollingParent: Element;
  isInView: boolean;
  currentIndex: number;
  onIndexChange(index: number): void;
  handleKeyDown(event: KeyboardEvent): void;
  private _listElement;
  private _boundFn;
  private _boundClickFn;
  private _parentTop;
  private _itemHeight;
  private _itemHeightSmall;
  get listItems(): HTMLLIElement[];
  private _handleItemsPerPage;
  private _onOpen;
  private _getScrollParent;
  private _onScroll;
  private _handleClick;
  private _handleZIndex;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private _renderItem;
  render(): any;
}
