import { EventEmitter } from '../../stencil-public-runtime';
export declare class CSwitch {
  hostDisabled: boolean;
  hostId: string;
  required: boolean;
  value: boolean;
  host: HTMLCSwitchElement;
  hasLabel: boolean;
  changeValue: EventEmitter<boolean>;
  componentDidLoad(): void;
  private _valueChangedHandler;
  render(): any;
}
