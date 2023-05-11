import { h, Host } from '@stencil/core';
export class CSubnavigationitem {
  constructor() {
    this.active = undefined;
    this.focusable = false;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      event instanceof MouseEvent ||
      event instanceof PointerEvent) {
      event.stopPropagation();
      const sidenav = document.querySelector('c-sidenavigation');
      sidenav.menuVisible = false;
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
  render() {
    const a11y = {
      tabindex: this.focusable ? '0' : '-1',
      role: 'menuitem',
    };
    if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (h(Host, Object.assign({}, a11y, { class: { active: this.active }, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), h("div", { class: "c-subnavigation-item__wrapper" }, h("div", { class: "c-subnavigation-item" }, h("div", { class: "c-subnavigation-item__content" }, h("div", { class: "c-subnavigation-item__slot" }, h("slot", null)), this.active && (h("span", { class: "visuallyhidden" }, ", Current page"))), h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })))));
  }
  static get is() { return "c-subnavigationitem"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-subnavigationitem.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-subnavigationitem.css"]
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
          "text": "Active state"
        },
        "attribute": "active",
        "reflect": false
      },
      "focusable": {
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
          "text": "Element is visible and focusable"
        },
        "attribute": "focusable",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Link url"
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
          "text": "Link target"
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
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=c-subnavigationitem.js.map
