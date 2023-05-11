import { Host, h } from '@stencil/core';
export class CToolbar {
  render() {
    return (h(Host, null, h("div", { class: "c-toolbar" }, h("slot", null)), h("div", { class: "spacer" })));
  }
  static get is() { return "c-toolbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-toolbar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-toolbar.css"]
    };
  }
}
//# sourceMappingURL=c-toolbar.js.map
