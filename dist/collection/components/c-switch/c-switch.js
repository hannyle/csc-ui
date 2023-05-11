import { h, } from '@stencil/core';
export class CSwitch {
  constructor() {
    this._valueChangedHandler = (event) => {
      const value = event.currentTarget.checked;
      this.value = value;
      this.changeValue.emit(value);
    };
    this.hostDisabled = false;
    this.hostId = undefined;
    this.required = false;
    this.value = false;
    this.hasLabel = false;
  }
  componentDidLoad() {
    const slotted = this.host.childNodes;
    this.hasLabel = slotted && slotted.length > 0;
  }
  render() {
    const classes = {
      'c-switch': true,
      'c-switch--disabled': !!this.hostDisabled,
      'c-switch--label': this.hasLabel,
    };
    return (h("label", { class: classes, htmlFor: this.hostId }, h("div", { class: "c-switch__input" }, h("input", { id: this.hostId, "aria-checked": this.value, type: "checkbox", role: "switch", disabled: this.hostDisabled, checked: this.value, onInput: this._valueChangedHandler }), h("span", { class: "c-switch__slider" })), this.hasLabel ? (h("div", { class: "c-switch__label" }, h("slot", null), this.required && h("span", { class: "required" }, "\u00A0*"))) : null));
  }
  static get is() { return "c-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-switch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-switch.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Disable the switch"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Id for the element"
        },
        "attribute": "id",
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
          "text": "Value of the element"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasLabel": {}
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
          "text": "Emit inner value change to parent"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=c-switch.js.map
