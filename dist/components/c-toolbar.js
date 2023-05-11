import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cToolbarCss = ".c-toolbar{color:#595959;height:60px;background:#FFF;display:flex;column-gap:12px;align-items:center;padding-left:16px;padding-right:16px;position:fixed;width:calc(100% - 32px);z-index:9;box-shadow:2px 4px 10px #00000029}.spacer{height:60px;width:100%}:host(.relative) .c-toolbar{position:relative;margin-bottom:-60px}";

const CToolbar$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("div", { class: "c-toolbar" }, h("slot", null)), h("div", { class: "spacer" })));
  }
  static get style() { return cToolbarCss; }
}, [1, "c-toolbar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-toolbar"];
  components.forEach(tagName => { switch (tagName) {
    case "c-toolbar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CToolbar$1);
      }
      break;
  } });
}

const CToolbar = CToolbar$1;
const defineCustomElement = defineCustomElement$1;

export { CToolbar, defineCustomElement };

//# sourceMappingURL=c-toolbar.js.map