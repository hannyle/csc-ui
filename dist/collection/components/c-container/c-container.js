import { Host, h } from '@stencil/core';
export class CContainer {
  constructor() {
    this.width = undefined;
  }
  render() {
    let style = {};
    if (this.width > 0) {
      style = { 'max-width': `${this.width}px` };
    }
    return (h(Host, { style: style }, h("slot", null)));
  }
  static get is() { return "c-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-container.css"]
    };
  }
  static get properties() {
    return {
      "width": {
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
          "text": "Maximum width of container in pixels"
        },
        "attribute": "width",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=c-container.js.map
