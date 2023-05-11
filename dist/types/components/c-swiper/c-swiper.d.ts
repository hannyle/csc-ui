import { EventEmitter } from '../../stencil-public-runtime';
export declare class CSwiper {
  value: number | string;
  isBeginning: boolean;
  isEnd: boolean;
  changeValue: EventEmitter<number | string>;
  private _container?;
  private _wrapper?;
  private _swiper;
  private _options;
  onTabClick(event: MouseEvent): void;
  onTabFocus(event: CustomEvent<number | string>): void;
  handleKeyUp(ev: KeyboardEvent): void;
  get slotItems(): HTMLCSwiperTabElement[];
  private _slideToTab;
  componentDidLoad(): void;
  private _initSwiper;
  render(): any;
}
