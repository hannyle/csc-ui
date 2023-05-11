import { Host, h } from '@stencil/core';
export class CSpacer {
  render() {
    return h(Host, null);
  }
  static get is() { return "c-spacer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-spacer.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-spacer.css"]
    };
  }
}
//# sourceMappingURL=c-spacer.js.map
