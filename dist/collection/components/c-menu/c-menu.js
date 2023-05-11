import { Host, h, } from '@stencil/core';
import { mdiChevronDown } from '@mdi/js';
import { v4 as uuid } from 'uuid';
export class CMenu {
  constructor() {
    this._uniqueId = `c-menu-items-${uuid()}`;
    this.items = [];
    this.simple = false;
    this.small = false;
    this.nohover = false;
    this.itemsPerPage = 6;
    this.customTrigger = undefined;
    this.menuItemsComponent = null;
    this.menuWrapperComponent = null;
    this.currentIndex = null;
    this.active = false;
  }
  handleKeyDown(ev) {
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
    if (!this.active && openKeys.includes(ev.key)) {
      ev.preventDefault();
      this.currentIndex = null;
      if (ev.key === 'ArrowDown') {
        this.currentIndex = 0;
      }
      if (ev.key === 'ArrowUp') {
        this.currentIndex = this.items.length - 1;
      }
      this._onClick();
    }
    if (ev.key === 'Escape') {
      this._hideMenu();
    }
  }
  _createWrapperElement() {
    const existingOverlay = document.querySelector('.c-menu-overlay__content');
    if (existingOverlay)
      return existingOverlay;
    const overlay = document.createElement('div');
    overlay.classList.add('c-menu-overlay');
    const overlayContent = document.createElement('div');
    overlayContent.classList.add('c-menu-overlay__content');
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);
    return overlayContent;
  }
  _getNativeChild(parent = this.host) {
    let element = parent.shadowRoot.children[0];
    if (!!element.shadowRoot) {
      element = this._getNativeChild(element);
    }
    return element;
  }
  _addMenuItemsComponentListeners(height, width) {
    this.menuItemsComponent.onclose = () => {
      this._hideMenu();
      const element = this._getNativeChild();
      element.focus();
    };
    this.menuItemsComponent.addEventListener('open', (event) => this._onOpen(event, height, width), {
      once: true,
    });
  }
  _getHostPosition() {
    return this.host.getBoundingClientRect();
  }
  _hideMenu() {
    var _a;
    (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.remove();
    this.menuItemsComponent = null;
    this.active = false;
  }
  _onOpen(event, height, width) {
    window.requestAnimationFrame(() => {
      var _a, _b, _c;
      const { isInView, height: menuHeight, width: menuWidth } = event.detail;
      if (!isInView.y) {
        const posY = parseFloat(this.menuItemsComponent.style.top) - menuHeight - height;
        this.menuItemsComponent.style.top = `${posY}px`;
        this.menuItemsComponent.top = posY;
      }
      if (!isInView.x) {
        this.menuItemsComponent.style.left = `${parseFloat(this.menuItemsComponent.style.left) - menuWidth + width}px`;
      }
      this.active = true;
      this.menuItemsComponent.active = true;
      (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('ul')) === null || _c === void 0 ? void 0 : _c.focus();
    });
  }
  _onClick() {
    if (this.menuItemsComponent)
      return;
    const { bottom, left, width, height } = this._getHostPosition();
    this.menuItemsComponent = document.createElement('c-menu-items');
    this.menuItemsComponent.style.top = `${bottom}px`;
    this.menuItemsComponent.style.left = `${left}px`;
    this.menuItemsComponent.style.minWidth = `${width}px`;
    this.menuItemsComponent.parent = this.host;
    this.menuItemsComponent.items = this.items;
    this.menuItemsComponent.small = this.small;
    this.menuItemsComponent.itemsPerPage = this.itemsPerPage;
    this.menuItemsComponent.top = bottom;
    this.menuItemsComponent.id = this._uniqueId;
    this.menuItemsComponent.index = this.currentIndex;
    this.menuItemsComponent.setAttribute('tabindex', '-1');
    this.menuItemsComponent.setAttribute('role', 'listbox');
    this._addMenuItemsComponentListeners(height, width);
    this._createWrapperElement().appendChild(this.menuItemsComponent);
    window.setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.children[0]) === null || _c === void 0 ? void 0 : _c.children[0]) === null || _d === void 0 ? void 0 : _d.focus();
    }, 200);
  }
  disconnectedCallback() {
    this._hideMenu();
  }
  _renderCustomTrigger() {
    const props = this.customTrigger;
    const Tag = props.component.tag;
    const params = props.component.params;
    return (h(Tag, Object.assign({}, params, { class: "custom-menu-trigger", "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": this._uniqueId, onClick: () => this._onClick() }), props.value));
  }
  render() {
    const hostClasses = {
      'c-menu': true,
      'c-menu--simple': this.simple,
      'c-menu--active': this.active,
      'c-menu--no-hover': this.nohover,
      'c-menu--small': this.small,
    };
    return (h(Host, { class: hostClasses }, this.customTrigger ? (this._renderCustomTrigger()) : (h("button", { "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": this._uniqueId, class: {
        'c-menu-wrapper': !this.simple,
        simple: this.simple,
      }, tabindex: "0", type: "button", onClick: () => this._onClick() }, this.simple ? (h("slot", null)) : (h("div", { class: "c-menu__header" }, h("slot", null), h("svg", { width: this.small ? '16' : '22', height: this.small ? '16' : '22', viewBox: "0 0 24 24", class: this.active
        ? 'c-menu__icon c-menu__icon--rotated'
        : 'c-menu__icon' }, h("path", { d: mdiChevronDown }))))))));
  }
  static get is() { return "c-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-menu.css"]
    };
  }
  static get properties() {
    return {
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CMenuOption[]",
          "resolved": "CMenuOption[]",
          "references": {
            "CMenuOption": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Menu items"
        },
        "defaultValue": "[]"
      },
      "simple": {
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
          "text": "Simple variant without chevron and background, E.g. when a button is the activator"
        },
        "attribute": "simple",
        "reflect": false,
        "defaultValue": "false"
      },
      "small": {
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
          "text": "Small variant"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "nohover": {
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
          "text": "No hover background"
        },
        "attribute": "nohover",
        "reflect": false,
        "defaultValue": "false"
      },
      "itemsPerPage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items per page before adding scroll"
        },
        "attribute": "items-per-page",
        "reflect": false,
        "defaultValue": "6"
      },
      "customTrigger": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CMenuCustomTrigger",
          "resolved": "CMenuCustomTrigger",
          "references": {
            "CMenuCustomTrigger": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Programmatic trigger component"
        }
      }
    };
  }
  static get states() {
    return {
      "menuItemsComponent": {},
      "menuWrapperComponent": {},
      "currentIndex": {},
      "active": {}
    };
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=c-menu.js.map
