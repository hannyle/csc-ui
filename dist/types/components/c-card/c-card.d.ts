export type CardBackground = 'puhti' | 'mahti' | 'allas';
export declare class CCard {
  background: CardBackground;
  backgroundColor: string;
  fullscreen: boolean;
  isFullscreen: boolean;
  host: HTMLCCardElement;
  private _allowedBackgrounds;
  private _onFullscreen;
  componentDidLoad(): void;
  exitFullscreen(): Promise<void>;
  enterFullscreen(): Promise<void>;
  render(): any;
}
