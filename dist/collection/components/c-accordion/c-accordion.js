import { h, } from '@stencil/core';
export class CAccordion {
  constructor() {
    this.value = undefined;
    this.mandatory = false;
    this.multiple = false;
    this.outlined = false;
  }
  watchPropHandler(value) {
    this.changeValue.emit(value);
    this._handleItemExpansion();
  }
  onAccordionItemChange(event) {
    const { value, expanded } = event.detail;
    if (this.multiple && Array.isArray(this.value)) {
      if (expanded) {
        this.value.push(value);
      }
      else {
        this.value = this.value.filter((v) => v !== value);
      }
    }
    else {
      this.value = expanded ? value : null;
    }
  }
  get items() {
    return Array.from(this.el.childNodes);
  }
  _handleItemExpansion() {
    const isExpanded = (item) => Array.isArray(this.value)
      ? this.value.includes(item.value)
      : item.value === this.value;
    const isLastExpandedItem = (item) => Array.isArray(this.value)
      ? isExpanded(item) && this.value.length === 1
      : isExpanded(item);
    for (const item of this.items) {
      item.collapsable =
        !this.mandatory || (this.mandatory && !isLastExpandedItem(item));
      item.outlined = this.outlined;
      item.expanded = isExpanded(item);
    }
  }
  componentDidLoad() {
    this._handleItemExpansion();
  }
  render() {
    return (h("div", { class: "c-accordion" }, h("slot", null)));
  }
  static get is() { return "c-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-accordion.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "number | string | (number | string)[]",
          "resolved": "(string | number)[] | number | string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the accordion"
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
          "text": "Disallow collapsing all the items"
        },
        "attribute": "mandatory",
        "reflect": false,
        "defaultValue": "false"
      },
      "multiple": {
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
          "text": "Allow expanding multiple items"
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
      },
      "outlined": {
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
          "text": "Show an outline around expanded items"
        },
        "attribute": "outlined",
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
        "methodName": "watchPropHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "itemChange",
        "method": "onAccordionItemChange",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-accordion.js.map
