import { EventEmitter } from '../../stencil-public-runtime';
export declare class CSidenavigationitem {
  hostElement: HTMLCSidenavigationitemElement;
  active: boolean;
  href: string;
  target: string;
  loading: boolean;
  itemChange: EventEmitter;
  onActiveChange(active: boolean): void;
  private _ariaLabel;
  private _handleChildFocusableChange;
  private _redirect;
  private _slotHasContent;
  componentWillLoad(): void;
  render(): any;
}
