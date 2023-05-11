import { Host, h } from '@stencil/core';
export class CLoginCardContent {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "c-login-card-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-login-card-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-login-card-content.css"]
    };
  }
}
//# sourceMappingURL=c-login-card-content.js.map
