import { EventEmitter } from '../../stencil-public-runtime';
export declare class CSwiperTab {
  el: HTMLCSwiperTabElement;
  disabled: boolean;
  active: boolean;
  label: string;
  hostId: string;
  setsize: number;
  position: number;
  value: number | string;
  changeValue: EventEmitter<number | string>;
  private _container?;
  onTabClick(event: any): void;
  render(): any;
}
