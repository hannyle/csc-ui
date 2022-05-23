
/**
 * Examples for c-notification.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const basic = `import { CNotificationItem } from 'csc-ui';

basicNotification: CNotificationItem;

addNotification() {
  this.basicNotification = {
    name: 'This is an example',
    type: 'success',
    delay: 5,
  };
}
`;

export const custom = `import { CNotificationItem, CNotificationItemType, CSelectItem } from 'csc-ui';

notification: CNotificationItem;

delay = 2;

types: CSelectItem[] = [
  {
    name: 'Warning',
    value: 'warning',
  },
  {
    name: 'Error',
    value: 'error',
  },
  {
    name: 'Success',
    value: 'success',
  },
  {
    name: 'Info',
    value: 'info',
  },
];

positions: CSelectItem[] = [
  {
    name: 'Fixed',
    value: 'fixed',
  },
  {
    name: 'Absolute',
    value: 'absolute',
  },
];

requiresClosingOptions: CSelectItem[] = [
  {
    name: 'No',
    value: false,
  },
  {
    name: 'Yes',
    value: true,
  },
];

requiresClosing = false;

position = 'fixed';

type: CNotificationItemType = 'warning';

message = 'Example text';

addCustomNotification() {
  this.notification = {
    name: this.message,
    type: this.type,
    delay: this.delay,
    requiresClosing: this.requiresClosing,
  };
}
`;

