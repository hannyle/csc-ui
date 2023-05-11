import { Host, h } from '@stencil/core';
export class CFlex {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "c-flex"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-flex.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-flex.css"]
    };
  }
}
//# sourceMappingURL=c-flex.js.map
