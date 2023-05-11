import { h, Host } from '@stencil/core';
export class CCardActions {
  constructor() {
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-card-actions': true,
      [`c-card-actions--align-${this.align}`]: true,
      [`c-card-actions--justify-${this.justify}`]: true,
    };
    return (h(Host, null, h("div", { class: classes }, h("slot", null))));
  }
  static get is() { return "c-card-actions"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-card-actions.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-card-actions.css"]
    };
  }
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
//# sourceMappingURL=c-card-actions.js.map
