import { Host, h } from '@stencil/core';
export class CTitle {
  render() {
    return (h(Host, null, h("slot", null), h("div", { class: "title-underline" })));
  }
  static get is() { return "c-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-title.css"]
    };
  }
}
//# sourceMappingURL=c-title.js.map
