export declare class CNotification {
  notification: {
    name: string;
    type: 'warning' | 'error' | 'success' | 'info';
    delay?: number;
    requiresClosing?: boolean;
  };
  position: 'fixed' | 'absolute';
  itemChange(newValue: any): void;
  items: any[];
  private _hideItem;
  private _hide;
  private _getListItem;
  warning: any;
  info: any;
  close: any;
  error: any;
  success: any;
  render(): any;
}
