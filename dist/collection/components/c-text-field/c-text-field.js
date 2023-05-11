import { h, Host, } from '@stencil/core';
import { v4 as uuid } from 'uuid';
import { mdiCalendar, mdiEye, mdiEyeOff } from '@mdi/js';
export class CTextField {
  constructor() {
    this._originalType = '';
    this._uniqueId = uuid();
    this._handleChange = (event) => {
      this.value = this.trimWhitespace
        ? event.target.value.trim()
        : event.target.value;
      this.changeValue.emit(this.value);
    };
    this._handleBlur = (event) => {
      if (this.trimWhitespace) {
        const trimmedValue = event.target.value.trim();
        event.target.value = trimmedValue;
      }
    };
    this._togglePasswordVisibility = () => {
      if (this.disabled)
        return;
      this.type = this.type === 'password' ? 'text' : 'password';
    };
    this.autofocus = false;
    this.autocapitalize = '';
    this.autocorrect = '';
    this.autocomplete = '';
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.trimWhitespace = false;
    this.label = undefined;
    this.max = null;
    this.min = null;
    this.name = undefined;
    this.number = false;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.rows = 1;
    this.shadow = false;
    this.step = null;
    this.type = undefined;
    this.valid = true;
    this.validate = false;
    this.validateOnBlur = false;
    this.validation = 'Required field';
    this.value = undefined;
    this.isFocused = false;
    this.labelWidth = 0;
    this.preSlotWidth = 0;
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  componentWillLoad() {
    this._originalType = this.type;
    this._inputId = `${(this.hostId || this.label || this.placeholder).replace(/[^a-zA-Z0-9-_]/g, '')}_${this._uniqueId}`;
  }
  get isActive() {
    return !!this.value || this.isFocused;
  }
  get passwordIcon() {
    return this.type === 'password' ? mdiEye : mdiEyeOff;
  }
  _renderInputElement() {
    const props = {
      classes: {
        'c-input__input': true,
        'c-input__input--filled': !!this.value,
      },
      shared: {
        id: this._inputId,
        name: this.name,
        disabled: this.disabled,
        readonly: this.readonly,
        value: this.value,
        onInput: this._handleChange,
        onChange: this._handleChange,
        onBlur: this._handleBlur,
      },
      input: Object.assign(Object.assign(Object.assign({ type: this.number ? 'number' : this.type || 'text', min: this.min, max: this.max, step: this.step }, (!!this.autocomplete && { autocomplete: this.autocomplete })), (!!this.autocapitalize && { autocapitalize: this.autocapitalize })), (!!this.autocorrect && { autocorrect: this.autocorrect })),
      textArea: {
        rows: this.rows,
      },
    };
    const textInput = (h("input", Object.assign({ class: props.classes }, props.shared, props.input, { ref: (el) => (this._inputElement = el) })));
    const textArea = (h("textarea", Object.assign({ class: props.classes }, props.shared, props.textArea)));
    return this.rows > 1 ? textArea : textInput;
  }
  _isFirefox() {
    return !!navigator.userAgent.match(/firefox|fxios/i);
  }
  _renderDateToggle() {
    if (this._originalType !== 'date' || this._isFirefox())
      return;
    const classes = {
      'c-input__date-toggle': true,
      'c-input__date-toggle--disabled': this.disabled,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24", onClick: this._toggleDatepicker.bind(this) }, h("path", { d: mdiCalendar })));
  }
  _toggleDatepicker() {
    var _a;
    (_a = this._inputElement) === null || _a === void 0 ? void 0 : _a.showPicker();
  }
  _renderPasswordToggle() {
    if (this._originalType !== 'password')
      return;
    const classes = {
      'c-input__password-toggle': true,
      'c-input__password-toggle--disabled': this.disabled,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24", onClick: this._togglePasswordVisibility }, h("path", { d: this.passwordIcon })));
  }
  render() {
    return (h(Host, null, h("c-input", { autofocus: this.autofocus, disabled: this.disabled, "hide-details": this.hideDetails, hint: this.hint, id: this.hostId, "input-id": this._inputId, label: this.label, name: this.name, placeholder: this.placeholder, readonly: this.readonly, required: this.required, rows: this.rows, shadow: this.shadow, type: this.type, valid: this.valid, validate: this.validate, "validate-on-blur": this.validateOnBlur, validation: this.validation, value: this.value }, h("slot", { name: "pre", slot: "pre" }), this._renderInputElement(), this._renderPasswordToggle(), this._renderDateToggle(), h("slot", { name: "post", slot: "post" }))));
  }
  static get is() { return "c-text-field"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-text-field.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-text-field.css"]
    };
  }
  static get properties() {
    return {
      "autofocus": {
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
          "text": "Auto focus the input"
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "autocapitalize": {
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
          "text": "HTML input autocapitalize"
        },
        "attribute": "autocapitalize",
        "reflect": false,
        "defaultValue": "''"
      },
      "autocorrect": {
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
          "text": "HTML input autocorrect"
        },
        "attribute": "autocorrect",
        "reflect": false,
        "defaultValue": "''"
      },
      "autocomplete": {
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
          "text": "HTML input autocomplete"
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "Disable the input"
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
      "hostId": {
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
          "text": "Id of the input"
        },
        "attribute": "id",
        "reflect": false
      },
      "trimWhitespace": {
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
          "text": "Trim whitespace from the return value"
        },
        "attribute": "trim-whitespace",
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
          "text": "Label of the input"
        },
        "attribute": "label",
        "reflect": false
      },
      "max": {
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
          "text": "Maximum value on a numeric input"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "null"
      },
      "min": {
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
          "text": "Minimum value on a numeric input"
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "null"
      },
      "name": {
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
          "text": "Name of the input"
        },
        "attribute": "name",
        "reflect": false
      },
      "number": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Use type=\"number\" instead"
            }],
          "text": "Numeric input"
        },
        "attribute": "number",
        "reflect": false,
        "defaultValue": "false"
      },
      "placeholder": {
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
          "text": "Placeholder of the input"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "readonly": {
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
          "text": "Mark as readonly"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Set the input as required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "rows": {
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
          "text": "Rows on the input"
        },
        "attribute": "rows",
        "reflect": false,
        "defaultValue": "1"
      },
      "shadow": {
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
          "text": "Shadow variant of the input"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "step": {
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
          "text": "Step size on a numeric input"
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "null"
      },
      "type": {
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
          "text": "Type of the input"
        },
        "attribute": "type",
        "reflect": false
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
      "validate": {
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
          "text": "Manual validation"
        },
        "attribute": "validate",
        "reflect": false,
        "defaultValue": "false"
      },
      "validateOnBlur": {
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
          "text": "Validate the input on blur"
        },
        "attribute": "validate-on-blur",
        "reflect": false,
        "defaultValue": "false"
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
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the input"
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isFocused": {},
      "labelWidth": {},
      "preSlotWidth": {},
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
          "text": "Emit changes to the parent"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hiddenEl"; }
}
//# sourceMappingURL=c-text-field.js.map
