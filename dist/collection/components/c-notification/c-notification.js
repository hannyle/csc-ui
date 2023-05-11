import { Host, h } from '@stencil/core';
export class CNotification {
  constructor() {
    this._getListItem = (item) => {
      const classes = ['notification'];
      if (!item.requiresClosing && item.hide) {
        classes.push('hide');
      }
      else {
        classes.push('appear');
      }
      classes.push(item.type);
      return (h("div", { class: classes.join(' '), id: 'item_' + item.timeStamp, ref: (el) => (item.ref = el) }, this[item.type], h("p", null, item.name), h("div", { class: "closewrapper", onClick: () => this._hide(item) }, this.close)));
    };
    this.warning = (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon", height: "18", viewBox: "0 0 16 16" }, h("path", { id: "Path_595", "data-name": "Path 595", d: "M2906,909l-8,14h16Zm-.8,5h1.5v1.4l-.4,3.6h-.8l-.4-3.6V914Zm-.2,7a1,1,0,1,0,1-1A.945.945,0,0,0,2905,921Z", transform: "translate(-2898 -909)", fill: "#ff5800", "fill-rule": "evenodd" })));
    this.info = (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon", height: "18", viewBox: "0 0 16 16" }, h("path", { id: "Path_620", "data-name": "Path 620", d: "M2905,1403a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2905,1403Zm0,4a1,1,0,1,1-1,1A.945.945,0,0,1,2905,1407Zm2,8h-4v-1h1v-3h-1v-1h3v4h1Z", transform: "translate(-2897 -1403)", fill: "var(--csc-primary)", "fill-rule": "evenodd" })));
    this.close = (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "close", width: "8.81", height: "8.81", viewBox: "0 0 8.81 8.81" }, h("path", { id: "Path_615", "data-name": "Path 615", d: "M3418.718,1318l-3.313,3.313-3.312-3.313-1.093,1.092,3.313,3.313-3.313,3.313,1.093,1.093,3.313-3.313,3.313,3.313,1.092-1.093-3.312-3.312,3.313-3.313Z", transform: "translate(-3411 -1318)", "fill-rule": "evenodd" })));
    this.error = (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon", height: "18", viewBox: "0 0 16 16" }, h("path", { id: "Path_624", "data-name": "Path 624", d: "M2905,1491a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2905,1491Z", transform: "translate(-2897 -1491)", fill: "#b90729" }), h("path", { id: "Path_625", "data-name": "Path 625", d: "M2900.07,1495.38l1.5-1.42,8.35,8.66-1.39,1.33Z", transform: "translate(-2897 -1491)", fill: "#fff" }), h("path", { id: "Path_626", "data-name": "Path 626", d: "M2901.64,1504.02l-1.48-1.43,8.3-8.7,1.39,1.33Z", transform: "translate(-2897 -1491)", fill: "#fff" })));
    this.success = (h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon", height: "18", viewBox: "0 0 16 16" }, h("path", { id: "Path_609", "data-name": "Path 609", d: "M2906,1124a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2906,1124Zm-1.3,11.5-3.3-3.4,1.4-1.4,1.9,1.9,4.1-4.1,1.4,1.4Z", transform: "translate(-2898 -1124)", fill: "#51a808", "fill-rule": "evenodd" })));
    this.notification = null;
    this.position = undefined;
    this.items = [];
  }
  itemChange(newValue) {
    if (!newValue.name)
      return;
    const timeStamp = Date.now();
    const item = Object.assign(Object.assign({}, newValue), { timeStamp });
    const oldItems = this.items.map((i) => (Object.assign(Object.assign({}, i), { old: true })));
    this.items = [...oldItems, item];
    setTimeout(() => {
      const toBeHidden = this.items.find((i) => i.timeStamp === timeStamp);
      this._hideItem(toBeHidden, timeStamp);
    }, item.delay ? parseInt(item.delay, 10) * 1000 : 2000);
  }
  _hideItem(item, timeStamp) {
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
      this.items = this.items.filter((i) => i.timeStamp !== timeStamp || i.requiresClosing);
    }, 1000);
  }
  _hide(item) {
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
  render() {
    return (h(Host, { class: this.position === 'absolute' ? 'absolute' : 'fixed' }, this.items.map((item) => this._getListItem(item))));
  }
  static get is() { return "c-notification"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-notification.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-notification.css"]
    };
  }
  static get properties() {
    return {
      "notification": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\n    name: string;\n    type: 'warning' | 'error' | 'success' | 'info';\n    delay?: number;\n    requiresClosing?: boolean;\n  }",
          "resolved": "{ name: string; type: \"info\" | \"error\" | \"success\" | \"warning\"; delay?: number; requiresClosing?: boolean; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "notification contents"
        },
        "defaultValue": "null"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'fixed' | 'absolute'",
          "resolved": "\"absolute\" | \"fixed\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Position of the notifications"
        },
        "attribute": "position",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "items": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "notification",
        "methodName": "itemChange"
      }];
  }
}
//# sourceMappingURL=c-notification.js.map
