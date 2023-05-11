import { h } from '@stencil/core';
export class CLoginButton {
  constructor() {
    this.href = '';
    this.src = '';
    this.alt = '';
  }
  render() {
    return (h("a", { style: { backgroundImage: this.src }, href: this.href }, h("img", { src: this.src, alt: this.alt }), h("div", null, h("slot", null))));
  }
  static get is() { return "c-login-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-login-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-login-button.css"]
    };
  }
  static get properties() {
    return {
      "href": {
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
          "text": "Login provider link"
        },
        "attribute": "href",
        "reflect": false,
        "defaultValue": "''"
      },
      "src": {
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
          "text": "Login provider logo url"
        },
        "attribute": "src",
        "reflect": false,
        "defaultValue": "''"
      },
      "alt": {
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
          "text": "Alt description for logo"
        },
        "attribute": "alt",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
}
//# sourceMappingURL=c-login-button.js.map
