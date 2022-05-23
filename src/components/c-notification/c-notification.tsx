import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { CNotificationItem } from '../../types/index';
import {
  mdiClose,
  mdiAlert,
  mdiCloseCircle,
  mdiCheckCircle,
  mdiInformation,
} from '@mdi/js';

interface CNotificationItemPrivate extends CNotificationItem {
  ref?: HTMLDivElement;
  timeStamp?: number;
  old?: boolean;
  hide?: boolean;
}

/**
 * @group Popups
 */
@Component({
  tag: 'c-notification',
  styleUrl: 'c-notification.scss',
  shadow: true,
})
export class CNotification {
  /**
   * notification contents
   */
  @Prop() notification: CNotificationItem = null;

  /**
   * Position of the notifications
   */
  @Prop() position: 'fixed' | 'absolute';

  @Watch('notification')
  itemChange(newValue: CNotificationItemPrivate) {
    if (!newValue.name) return;
    const timeStamp = Date.now();
    const item = { ...newValue, timeStamp };
    const oldItems = this.items.map((i) => ({
      ...i,
      old: true,
    }));

    this.items = [...oldItems, item];

    setTimeout(
      () => {
        const toBeHidden = this.items.find((i) => i.timeStamp === timeStamp);
        this._hideItem(toBeHidden, timeStamp);
      },
      item.delay ? +item.delay * 1000 : 2000,
    );
  }

  @State() items: CNotificationItemPrivate[] = [];

  private _hideItem(item: CNotificationItemPrivate, timeStamp) {
    const hiddenItem = item;
    hiddenItem.hide = true;
    const items = [];
    this.items.forEach((item) => {
      if (item.timeStamp === timeStamp) {
        item.hide = true;
      }

      items.push(item);
    });
    this.items = items;
    setTimeout(() => {
      this.items = this.items.filter(
        (i) => i.timeStamp !== timeStamp || i.requiresClosing,
      );
    }, 1000);
  }

  private _hide(item) {
    const items = [];
    this.items.forEach((i) => {
      if (item === i) {
        i.hide = true;
        i.requiresClosing = false;
      }

      items.push(i);
    });
    this.items = items;
  }

  private _getListItem = (item) => {
    const classes = {
      'c-notification': true,
      [item.type]: true,
    };

    requestAnimationFrame(() => {
      item.ref?.classList.toggle(
        'c-notification--show',
        !(!item.requiresClosing && item.hide),
      );
    });

    return (
      <div
        class={classes}
        id={'item_' + item.timeStamp}
        ref={(el) => (item.ref = el as HTMLElement)}
      >
        <svg viewBox="0 0 24 24">
          <path d={this._icons[item.type]}></path>
        </svg>

        <p>{item.name}</p>

        <div class="closewrapper" onClick={() => this._hide(item)}>
          <svg viewBox="0 0 24 24">
            <path d={this._icons.close}></path>
          </svg>
        </div>
      </div>
    );
  };

  private _icons = {
    close: mdiClose,
    warning: mdiAlert,
    error: mdiCloseCircle,
    success: mdiCheckCircle,
    info: mdiInformation,
  };

  render() {
    return (
      <Host class={this.position === 'absolute' ? 'absolute' : 'fixed'}>
        {this.items.map((item) => this._getListItem(item))}
      </Host>
    );
  }
}
