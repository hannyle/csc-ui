import { Host, h } from '@stencil/core';
export class CStatus {
  constructor() {
    this.type = undefined;
  }
  render() {
    const classes = Object.assign({ 'c-status': true }, (!!this.type && { [`c-status--${this.type}`]: this.type }));
    return (h(Host, null, h("div", { class: classes }, h("slot", null))));
  }
  static get is() { return "c-status"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-status.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-status.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'info' | 'warning' | 'error' | 'success'",
          "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Status type"
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=c-status.js.map
