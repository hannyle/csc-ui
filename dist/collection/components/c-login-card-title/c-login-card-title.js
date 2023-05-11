import { Host, h } from '@stencil/core';
export class CLoginCardTitle {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "c-login-card-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-login-card-title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-login-card-title.css"]
    };
  }
}
//# sourceMappingURL=c-login-card-title.js.map
