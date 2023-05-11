import { h } from '@stencil/core';
export class CCardTitle {
  render() {
    return (h("div", { class: "c-card-title" }, h("c-title", null, h("slot", null))));
  }
  static get is() { return "c-card-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-card-title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-card-title.css"]
    };
  }
}
//# sourceMappingURL=c-card-title.js.map
