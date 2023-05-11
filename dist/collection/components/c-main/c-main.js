import { Host, h } from '@stencil/core';
export class CMain {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "c-main"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-main.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-main.css"]
    };
  }
}
//# sourceMappingURL=c-main.js.map
