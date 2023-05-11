import { Host, h, } from '@stencil/core';
import { mdiCloseCircle } from '@mdi/js';
import { createRipple } from '../../utils/utils';
export class CCheckbox {
  constructor() {
    this._validationIcon = (h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, h("path", { d: mdiCloseCircle })));
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.intermediate = false;
    this.label = '';
    this.required = false;
    this.valid = true;
    this.validation = 'Required field';
    this.value = false;
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
  handleKeyDown(event) {
    if (['Space'].includes(event.code)) {
      event.preventDefault();
      this.toggleState(event);
    }
  }
  componentWillLoad() {
    if (typeof this.value !== 'boolean') {
      console.warn(`[C-CHECKBOX] Property 'value' should be a boolean.`);
    }
  }
  componentDidLoad() {
    this._handleValidation(this.valid, 0);
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (h("span", null, this.hint)) : (h("span", null, this._validationIcon, " ", this.validation)) });
    }, timeout);
  }
  toggleState(event) {
    if (this.disabled)
      return;
    createRipple(event, this._container, true);
    this.value = !this.value;
    this.changeValue.emit(this.value);
  }
  _renderMessages() {
    if (this.hideDetails)
      return;
    const classes = {
      'c-checkbox__details': true,
      active: this.messageOptions.show,
    };
    const messageClasses = {
      'c-checkbox__message': true,
      [`c-checkbox__message--${this.messageOptions.type}`]: true,
    };
    return (h("div", { class: classes }, h("div", { class: messageClasses }, this.messageOptions.content)));
  }
  render() {
    const wrapperClasses = {
      'c-checkbox': true,
      'c-checkbox--disabled': this.disabled,
      'c-checkbox--error': this.messageOptions.type === 'error',
    };
    const labelClasses = {
      'c-checkbox__label': true,
      'c-checkbox__label--intermediate': this.intermediate,
    };
    return (h(Host, null, h("div", { class: wrapperClasses }, h("input", { class: "visuallyhidden", id: "checkbox", type: "checkbox", "aria-checked": (!!this.value).toString(), "aria-disabled": this.disabled.toString(), checked: this.value, disabled: this.disabled, onChange: (event) => this.toggleState(event) }), h("label", { class: labelClasses, htmlFor: "checkbox" }, h("div", { class: "ripple", ref: (el) => (this._container = el) }, h("svg", { viewBox: "0 0 100 100" }, !this.intermediate && !!this.value && (h("path", { class: "path", d: "M 12 52 l 24 24 l 47 -47 l -3 -3 l -44 44 l -21 -21 l -3 3" })), this.intermediate && (h("path", { class: "path", d: "M20 56 h60 v-8 h-60 z" })))), h("div", { class: "c-checkbox__label-content" }, !!this.label ? this.label : h("slot", null), this.required && h("span", { class: "required" }, "\u00A0*")))), this._renderMessages()));
  }
  static get is() { return "c-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-checkbox.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Disable the checkbox"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
      "intermediate": {
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
          "text": "Intermediate state"
        },
        "attribute": "intermediate",
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
          "text": "Element label"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
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
      },
      "value": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Is the element checked"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Triggered when element is checked or unchecked"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "validation",
        "methodName": "onValidationMessageChange"
      }, {
        "propName": "valid",
        "methodName": "onValidChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-checkbox.js.map
