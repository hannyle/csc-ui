export type CLoginCardBlendMode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export declare class CLoginCard {
  backgroundPosition: string;
  mobileBreakpoint: number;
  overlay: boolean;
  overlayBlendMode: CLoginCardBlendMode;
  src: string;
  element: HTMLCLoginCardElement;
  private _observer;
  private _cardElement;
  private _paths;
  path: string;
  imageHeight: string;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  private _handleResize;
  render(): any;
}
