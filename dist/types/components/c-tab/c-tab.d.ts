import { EventEmitter } from '../../stencil-public-runtime';
export declare class CTab {
  element: HTMLCTabElement;
  active: boolean;
  disabled: boolean;
  hostId: string;
  position: number;
  setsize: number;
  value?: number | string;
  tabChange: EventEmitter;
  private _onClick;
  handleKeydown(event: KeyboardEvent): void;
  render(): any;
}
