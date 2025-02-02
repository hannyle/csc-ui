import { EventEmitter } from '../../stencil-public-runtime';
import { CPaginationOptions } from '../../types';
export declare class CPagination {
  value: CPaginationOptions;
  hideDetails: boolean;
  simple: boolean;
  size: 'default' | 'small';
  private _currentPage;
  private _itemsPerPage;
  private _totalVisible;
  changeValue: EventEmitter<CPaginationOptions>;
  hideRange: boolean;
  itemsPerPageOptions: number[];
  tick: string;
  valueHandler(value: CPaginationOptions, oldValue: CPaginationOptions): void;
  private _isEqual;
  componentDidLoad(): void;
  private _textContent;
  private _getText;
  private _setRange;
  private _buttons;
  private _valueChangeHandler;
  private _getItemsPerPage;
  private _getTotalPages;
  private _increasePageNumber;
  private _decreasePageNumber;
  private _setPage;
  private _getRange;
  private _getArrowLeft;
  private _getArrowRight;
  private _button;
  private _addButton;
  private _addSeparator;
  private _addButtons;
  private _getPageButtons;
  render(): any;
}
