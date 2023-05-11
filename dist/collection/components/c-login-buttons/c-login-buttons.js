import { Host, h } from '@stencil/core';
export class CLoginButtons {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "c-login-buttons"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-login-buttons.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-login-buttons.css"]
    };
  }
}
//# sourceMappingURL=c-login-buttons.js.map
