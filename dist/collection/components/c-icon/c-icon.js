import { Host, h } from '@stencil/core';
export class CIcon {
  constructor() {
    this.path = undefined;
    this.size = 24;
    this.color = 'var(--csc-primary)';
  }
  render() {
    return (h(Host, { style: { height: `${this.size}px` } }, h("svg", { width: this.size, height: this.size, viewBox: "0 0 24 24" }, h("path", { d: this.path, style: { fill: this.color } }))));
  }
  static get is() { return "c-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-icon.css"]
    };
  }
  static get properties() {
    return {
      "path": {
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
          "text": "Svg path d attribute value"
        },
        "attribute": "path",
        "reflect": false
      },
      "size": {
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
          "text": "Icon size in pixels"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "24"
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
          "text": "Fill color"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'var(--csc-primary)'"
      }
    };
  }
}
//# sourceMappingURL=c-icon.js.map
