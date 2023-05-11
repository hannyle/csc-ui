import { EventEmitter } from '../../stencil-public-runtime';
export declare class CSteps {
  host: HTMLCStepsElement;
  value: number | string;
  changeValue: EventEmitter<number | string>;
  isMobile: boolean;
  label: string;
  watchPropHandler(): void;
  private _isInitialized;
  private _resizeObserver;
  private _stepElements;
  private _handleDividers;
  componentDidLoad(): void;
  private _getA11yMessage;
  render(): any;
}
