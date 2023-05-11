import { Host, h, } from '@stencil/core';
export class CMenuItems {
  constructor() {
    this._parentTop = 0;
    this._itemHeight = 42;
    this._itemHeightSmall = 36;
    this._renderItem = (item) => {
      const classes = {
        disabled: item.disabled,
        'icon-start': item.iconPosition === 'start',
        'icon-end': item.iconPosition === 'end',
      };
      const onItemClick = (event, item) => {
        event.stopPropagation();
        if (!item.disabled) {
          item.action();
          this.close.emit();
        }
      };
      return (h("li", { "aria-disabled": (!!item.disabled).toString(), class: classes, tabindex: "-1", role: "menuitem", onClick: (event) => onItemClick(event, item) }, item.name, item.icon && (h("svg", { class: "icon", width: "20", height: "20", viewBox: "0 0 24 24" }, h("path", { d: item.icon })))));
    };
    this.items = [];
    this.small = false;
    this.active = false;
    this.parentType = 'menu';
    this.parent = undefined;
    this.top = 0;
    this.index = null;
    this.itemsPerPage = 6;
    this.scrollingParent = undefined;
    this.isInView = true;
    this.currentIndex = null;
  }
  onIndexChange(index) {
    this.listItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
      if (i === index) {
        item.focus();
      }
    });
  }
  handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.currentIndex === null) {
        this.currentIndex = 0;
      }
      else if (this.currentIndex + 1 < this.items.length) {
        this.currentIndex += 1;
      }
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.currentIndex === null) {
        this.currentIndex = this.items.length - 1;
      }
      else if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    }
    if (event.key === 'Escape') {
      this.close.emit();
      this.currentIndex = null;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (!item.disabled) {
          item.action();
          this.close.emit();
        }
        return;
      }
      this.currentIndex = 0;
    }
    if (event.key === ' ') {
      event.preventDefault();
      if (this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (item === null || item === void 0 ? void 0 : item.disabled)
          return;
        item === null || item === void 0 ? void 0 : item.action();
      }
      this.close.emit();
    }
    if (event.key === 'Tab') {
      if (this.parentType !== 'menu' && this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (!(item === null || item === void 0 ? void 0 : item.disabled)) {
          item === null || item === void 0 ? void 0 : item.action();
        }
      }
      this.close.emit();
    }
    if (event.key === 'PageUp') {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerPage);
    }
    if (event.key === 'PageDown') {
      this.currentIndex = Math.min(this.items.length - 1, this.currentIndex + this.itemsPerPage);
    }
  }
  get listItems() {
    var _a, _b;
    return Array.from(((_b = (_a = this.host) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('li')) || []);
  }
  _handleItemsPerPage() {
    const itemHeight = this.small ? this._itemHeightSmall : this._itemHeight;
    const containerHeight = this.itemsPerPage * itemHeight + itemHeight / 2;
    this._listElement.style.maxHeight = `${containerHeight}px`;
    this._listElement.style.setProperty('--c-menu-item-height', `${itemHeight}px`);
  }
  _onOpen() {
    this._handleItemsPerPage();
    window.requestAnimationFrame(async () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const { bottom, right, height, width } = this._listElement.getBoundingClientRect();
      const { top: parentTop } = this.parent.getBoundingClientRect();
      this._parentTop = parentTop;
      this.scrollingParent = await this._getScrollParent(this.parent);
      this._boundFn = this._onScroll.bind(this);
      this.scrollingParent.addEventListener('scroll', this._boundFn);
      this.open.emit({
        height,
        isInView: {
          x: right < viewportWidth,
          y: bottom < viewportHeight,
        },
        width,
      });
    });
  }
  async _getScrollParent(element) {
    return new Promise((resolve) => {
      if (!element) {
        resolve(undefined);
      }
      let parent = element.parentNode;
      while (parent) {
        if (parent.shadowRoot === undefined) {
          parent = parent.host;
        }
        else {
          const { overflow, overflowX } = window.getComputedStyle(parent);
          if (overflowX !== 'scroll' &&
            overflow.split(' ').every((o) => o === 'auto' || o === 'scroll')) {
            resolve(parent);
          }
          parent = parent.parentNode;
        }
      }
      resolve(document.documentElement);
    });
  }
  _onScroll() {
    const { top: parentTop } = this.parent.getBoundingClientRect();
    const differenceY = this._parentTop - parentTop;
    this.host.style.top = `${this.top - differenceY}px`;
  }
  _handleClick(event) {
    if (!event.composedPath().includes(this.host)) {
      this.close.emit();
    }
  }
  _handleZIndex() {
    const styles = window.getComputedStyle((this.parent.assignedSlot || this.parent).parentElement);
    const zIndex = styles.getPropertyValue('z-index');
    this.host.style.zIndex = zIndex === 'auto' ? '1' : zIndex;
  }
  componentDidLoad() {
    this._boundClickFn = this._handleClick.bind(this);
    window.addEventListener('click', this._boundClickFn, {
      once: true,
    });
    this._handleZIndex();
    this._onOpen();
    this.currentIndex = this.index;
  }
  disconnectedCallback() {
    this.scrollingParent.removeEventListener('scroll', this._boundFn);
    window.removeEventListener('click', this._boundClickFn);
  }
  render() {
    const listClasses = {
      'c-menu-items': true,
      'c-menu-items--small': this.small,
      'c-menu-items--active': this.active,
    };
    return (h(Host, null, h("ul", { class: listClasses, ref: (el) => (this._listElement = el) }, this.items.map((item) => this._renderItem(item)))));
  }
  static get is() { return "c-menu-items"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-menu-items.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-menu-items.css"]
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
          "text": "Menu is opened and positioned"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "parentType": {
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
          "text": "Type of parent"
        },
        "attribute": "parent-type",
        "reflect": false,
        "defaultValue": "'menu'"
      },
      "parent": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "HTMLCMenuElement",
          "resolved": "HTMLCMenuElement",
          "references": {
            "HTMLCMenuElement": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Menu parent"
        }
      },
      "top": {
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
          "text": "Initial top position"
        },
        "attribute": "top",
        "reflect": false,
        "defaultValue": "0"
      },
      "index": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number | null",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "is active"
        },
        "attribute": "index",
        "reflect": false,
        "defaultValue": "null"
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
      }
    };
  }
  static get states() {
    return {
      "scrollingParent": {},
      "isInView": {},
      "currentIndex": {}
    };
  }
  static get events() {
    return [{
        "method": "close",
        "name": "close",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the menu is closed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "open",
        "name": "open",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when the menu is opened"
        },
        "complexType": {
          "original": "{\n    height: number;\n    width: number;\n    isInView: {\n      x: boolean;\n      y: boolean;\n    };\n  }",
          "resolved": "{ height: number; width: number; isInView: { x: boolean; y: boolean; }; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "currentIndex",
        "methodName": "onIndexChange"
      }];
  }
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
//# sourceMappingURL=c-menu-items.js.map
