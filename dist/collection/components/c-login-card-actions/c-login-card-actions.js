import { h } from '@stencil/core';
export class CLoginCardActions {
  constructor() {
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    return (h("c-card-actions", { align: this.align, justify: this.justify, style: { padding: '0px' } }, h("slot", null)));
  }
  static get is() { return "c-login-card-actions"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
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
          "text": "Align the actions"
        },
        "attribute": "align",
        "reflect": false,
        "defaultValue": "'center'"
      },
      "justify": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'start'\n    | 'center'\n    | 'end'\n    | 'space-between'\n    | 'stretch'\n    | 'space-around'",
          "resolved": "\"center\" | \"end\" | \"space-around\" | \"space-between\" | \"start\" | \"stretch\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Justify the actions"
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'start'"
      }
    };
  }
}
//# sourceMappingURL=c-login-card-actions.js.map
