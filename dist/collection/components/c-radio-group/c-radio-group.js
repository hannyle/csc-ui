import { h, } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { mdiCloseCircle } from '@mdi/js';
import { createRipple } from '../../utils/utils';
export class CRadioGroup {
  constructor() {
    this._containers = [];
    this._uniqueId = uuid();
    this._getRadioButton = (item, index) => {
      var _a, _b;
      const itemId = item.value.toString().replace(/[^a-zA-Z0-9-_]/g, '');
      const isChecked = this.returnValue
        ? ((_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.find((i) => i.value === item.value)) === null || _b === void 0 ? void 0 : _b.value) === this.value
        : this.value === item;
      const classes = {
        'c-radio': true,
        'c-radio--disabled': this.disabled,
        'c-radio--error': this.messageOptions.type === 'error',
      };
      return (h("label", { class: classes, id: itemId, onKeyDown: (event) => this._handleKeyDown(event, item, index) }, h("input", { type: "radio", "aria-checked": (this.value === item).toString(), "aria-disabled": this.disabled.toString(), "aria-labelledby": itemId, disabled: this.disabled, checked: isChecked, name: this._uniqueId, onChange: (event) => this._select(event, item, index) }), h("span", { class: "ripple", ref: (el) => (this._containers[index] = el) }, h("span", { class: "selection" })), h("div", { class: "c-radio__label" }, item.label)));
    };
    this._validationIcon = (h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, h("path", { d: mdiCloseCircle })));
    this.value = undefined;
    this.hideDetails = false;
    this.hint = '';
    this.inline = false;
    this.label = undefined;
    this.color = '';
    this.items = [];
    this.disabled = false;
    this.returnValue = undefined;
    this.required = false;
    this.valid = true;
    this.validation = 'Required field';
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  onValidationMessageChange(message) {
    this.onValidChange(message.length === 0);
  }
  onValidChange(valid) {
    this._handleValidation(valid || this.valid);
  }
  componentDidLoad() {
    this._handleValidation(this.valid, 0);
  }
  _handleKeyDown(event, item, index) {
    if (['Space', 'Enter'].includes(event.code)) {
      event.preventDefault();
      this._select(event, item, index);
    }
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (h("span", null, this.hint)) : (h("span", null, this._validationIcon, " ", this.validation)) });
    }, timeout);
  }
  _select(event, item, index) {
    if (this.disabled)
      return;
    createRipple(event, this._containers[index], true);
    this.value = this.returnValue ? item === null || item === void 0 ? void 0 : item.value : item;
    this.changeValue.emit(this.value);
  }
  _renderMessages() {
    if (this.hideDetails)
      return;
    const classes = {
      'c-radio__details': true,
      active: this.messageOptions.show,
    };
    const messageClasses = {
      'c-radio__message': true,
      [`c-radio__message--${this.messageOptions.type}`]: true,
    };
    return (h("div", { class: classes }, h("div", { class: messageClasses }, this.messageOptions.content)));
  }
  render() {
    const slotHasContent = !!this.el.childNodes.length;
    const wrapperClasses = {
      'c-radio-group': true,
      'c-radio-group--disabled': this.disabled,
      'c-radio-group--inline': this.inline,
      'c-radio-group--error': this.messageOptions.type === 'error',
    };
    return (h("div", { class: wrapperClasses, role: "radiogroup", "aria-labelledby": "c-radio-group__label" }, (!!this.label || slotHasContent) && (h("label", { class: "c-radio-group__label" }, !!this.label ? this.label : h("slot", null), this.required && h("span", { class: "required" }, "\u00A0*"))), h("div", { class: "c-radio-group__items" }, this.items.map((item, index) => this._getRadioButton(item, index))), this._renderMessages()));
  }
  static get is() { return "c-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-radio-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-radio-group.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number | CRadioGroupItem",
          "resolved": "CRadioGroupItem | number | string",
          "references": {
            "CRadioGroupItem": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the radio group"
        },
        "attribute": "value",
        "reflect": false
      },
      "hideDetails": {
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
          "text": "Hide the hint and error messages"
        },
        "attribute": "hide-details",
        "reflect": false,
        "defaultValue": "false"
      },
      "hint": {
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
          "text": "Hint text for the input"
        },
        "attribute": "hint",
        "reflect": false,
        "defaultValue": "''"
      },
      "inline": {
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
          "text": "Display radio buttons inline"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      },
      "label": {
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
          "text": "Label of the radio group"
        },
        "attribute": "label",
        "reflect": false
      },
      "color": {
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
          "text": "Color of the radio group"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "''"
      },
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CRadioGroupItem[]",
          "resolved": "CRadioGroupItem[]",
          "references": {
            "CRadioGroupItem": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Radio group items"
        },
        "defaultValue": "[]"
      },
      "disabled": {
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
          "text": "Disable the radio group"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "returnValue": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "false",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Return only the item value rather than the whole item object"
        },
        "attribute": "return-value",
        "reflect": false
      },
      "required": {
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
          "text": "Set as required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "valid": {
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
          "text": "Set the valid\u00EDty of the input"
        },
        "attribute": "valid",
        "reflect": false,
        "defaultValue": "true"
      },
      "validation": {
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
          "text": "Custom validation message"
        },
        "attribute": "validation",
        "reflect": false,
        "defaultValue": "'Required field'"
      }
    };
  }
  static get states() {
    return {
      "messageOptions": {}
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
          "text": "Emit value change to the parent"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "validation",
        "methodName": "onValidationMessageChange"
      }, {
        "propName": "valid",
        "methodName": "onValidChange"
      }];
  }
}
//# sourceMappingURL=c-radio-group.js.map
