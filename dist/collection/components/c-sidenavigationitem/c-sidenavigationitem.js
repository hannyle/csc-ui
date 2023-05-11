import { h, Host, } from '@stencil/core';
import { mdiChevronRight } from '@mdi/js';
export class CSidenavigationitem {
  constructor() {
    this._slotHasContent = false;
    this.active = undefined;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  onActiveChange(active) {
    this._handleChildFocusableChange(active);
  }
  _handleChildFocusableChange(focusable) {
    if (!this._slotHasContent)
      return;
    const children = Array.from(this.hostElement.querySelector('[slot="subnavitem"]').children);
    children.forEach((child) => {
      child.ariaHidden = (!focusable).toString();
      child.focusable = focusable;
    });
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      !(event instanceof KeyboardEvent)) {
      this.itemChange.emit(event);
      if (!this._slotHasContent) {
        const sidenav = document.querySelector('c-sidenavigation');
        sidenav.menuVisible = false;
      }
      if (this.href) {
        if (this.target) {
          window.open(this.href, this.target);
        }
        else {
          window.location.href = this.href;
        }
      }
    }
  }
  componentWillLoad() {
    var _a, _b;
    this._slotHasContent = !!this.hostElement.querySelector('[slot="subnavitem"]');
    const children = Array.from(this.hostElement.querySelector('[slot="main"]').childNodes);
    this._ariaLabel = (_b = (_a = children.find((c) => !!c.nodeValue)) === null || _a === void 0 ? void 0 : _a.nodeValue) === null || _b === void 0 ? void 0 : _b.trim();
    this._handleChildFocusableChange(this.active);
  }
  render() {
    var _a, _b;
    const classes = {
      'c-sidenavigation-item': true,
      'c-sidenavigation-item--parent': this._slotHasContent,
      active: this.active,
    };
    const subNavigationClasses = {
      subnavactive: this.active,
      subnavitem: !this.active,
    };
    const a11y = {
      role: 'menuitem',
      tabindex: '0',
    };
    if (this._slotHasContent) {
      a11y['aria-expanded'] = (_a = (!!this.active)) === null || _a === void 0 ? void 0 : _a.toString();
    }
    else if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (h(Host, Object.assign({}, a11y, { class: classes, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), h("div", { class: {
        'c-sidenavigation-item__header': true,
        'c-sidenavigation-item__header--expandable': this._slotHasContent,
      } }, this._slotHasContent && (h("svg", { width: "22", height: "22", viewBox: "0 0 24 24", class: "svg" }, h("path", { d: mdiChevronRight }))), h("div", { class: "c-sidenavigation-item__slot" }, h("slot", { name: "main" }))), this._slotHasContent && (h("nav", { role: "menubar", "aria-label": this._ariaLabel, "aria-expanded": (_b = (!!this.active)) === null || _b === void 0 ? void 0 : _b.toString(), class: subNavigationClasses }, h("slot", { name: "subnavitem" }))), h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })));
  }
  static get is() { return "c-sidenavigationitem"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-sidenavigationitem.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-sidenavigationitem.css"]
    };
  }
  static get properties() {
    return {
      "active": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicate active state"
        },
        "attribute": "active",
        "reflect": false
      },
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hyperlink url"
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hyperlink target"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "null"
      },
      "loading": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Loading state"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "itemChange",
        "name": "itemChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "Emit changes to the c-accordion"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "active",
        "methodName": "onActiveChange"
      }];
  }
}
//# sourceMappingURL=c-sidenavigationitem.js.map
