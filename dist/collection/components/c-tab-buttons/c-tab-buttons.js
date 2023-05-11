import { h, } from '@stencil/core';
export class CTabButtons {
  constructor() {
    this.value = undefined;
    this.mandatory = false;
    this.size = 'default';
    this.hostDisabled = false;
  }
  onValueChange(value) {
    var _a, _b;
    this.el.childNodes.forEach((button) => {
      button.outlined = true;
    });
    if (value !== null) {
      const button = this.buttons.find((btn) => btn.value === value) || this.buttons[value];
      if (button)
        button.outlined = false;
    }
    this.changeValue.emit((_b = (_a = this.buttons[value]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : value);
  }
  onTabChange(event) {
    const isActive = this.value !== null &&
      (this._isIndexBased
        ? +event.detail === +this.value
        : event.detail === this.value);
    if (this.mandatory && isActive) {
      return;
    }
    const nullValue = this._isIndexBased ? null : '';
    const value = this._isIndexBased ? +event.detail : event.detail;
    this.value = isActive ? nullValue : value;
  }
  get buttons() {
    return Array.from(this.el.childNodes).filter((element) => element.tagName === 'C-BUTTON');
  }
  componentDidLoad() {
    var _a;
    this.value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    this._isIndexBased = this.buttons.every((button) => typeof button.value === 'undefined');
    this.buttons.forEach((button, index) => {
      button.setAttribute('data-index', String(index));
      button.grouped = true;
      button.disabled = this.hostDisabled;
      button.size = this.size;
      const isActive = this.value !== null &&
        (this._isIndexBased
          ? index === +this.value
          : button.value === this.value);
      button.outlined = !isActive;
      const buttonElement = button.shadowRoot.querySelector('.c-button');
      buttonElement.classList.add('grouped');
    });
  }
  render() {
    const classes = {
      'c-tab-buttons': true,
      'c-tab-buttons--disabled': this.hostDisabled,
    };
    return (h("div", { class: classes }, h("slot", null)));
  }
  static get is() { return "c-tab-buttons"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-tab-buttons.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-tab-buttons.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of tab buttons"
        },
        "attribute": "value",
        "reflect": false
      },
      "mandatory": {
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
          "text": "Always require a selection"
        },
        "attribute": "mandatory",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'small'",
          "resolved": "\"default\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the buttons"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "hostDisabled": {
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
          "text": "Disable tab buttons"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emit changes to the parent"
        },
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "tabChange",
        "method": "onTabChange",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-tab-buttons.js.map
