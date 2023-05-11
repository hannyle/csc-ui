import { h } from '@stencil/core';
export class CCardContent {
  render() {
    return (h("div", { class: "c-card-content" }, h("slot", null)));
  }
  static get is() { return "c-card-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-card-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-card-content.css"]
    };
  }
}
//# sourceMappingURL=c-card-content.js.map
