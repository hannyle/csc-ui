import { Host, h } from '@stencil/core';
export class CConsent {
  render() {
    return (h(Host, null, h("c-row", { align: "center", gap: 8 }, h("slot", null))));
  }
  static get is() { return "c-consent"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-consent.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-consent.css"]
    };
  }
}
//# sourceMappingURL=c-consent.js.map
