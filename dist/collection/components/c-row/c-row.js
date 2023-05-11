import { h } from '@stencil/core';
export class CRow {
  constructor() {
    this.gap = 0;
    this.nowrap = false;
    this.align = 'start';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-row': true,
      'c-row--nowrap': this.nowrap,
      [`c-row--align-${this.align}`]: true,
      [`c-row--justify-${this.justify}`]: true,
    };
    return (h("div", { class: classes, style: { '--row-gap': `${this.gap}px` } }, h("slot", null)));
  }
  static get is() { return "c-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-row.css"]
    };
  }
  static get properties() {
    return {
      "gap": {
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
          "text": "Gap between items in px"
        },
        "attribute": "gap",
        "reflect": false,
        "defaultValue": "0"
      },
      "nowrap": {
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
          "text": "Disable flex wrap"
        },
        "attribute": "nowrap",
        "reflect": false,
        "defaultValue": "false"
      },
      "align": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'center' | 'end'",
          "resolved": "\"center\" | \"end\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Align items vertically"
        },
        "attribute": "align",
        "reflect": false,
        "defaultValue": "'start'"
      },
      "justify": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'start'\n    | 'center'\n    | 'end'\n    | 'space-between'\n    | 'space-around'",
          "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Justify content horizontally"
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'start'"
      }
    };
  }
}
//# sourceMappingURL=c-row.js.map
