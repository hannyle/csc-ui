import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './c-card-actions2.js';

const CLoginCardActions$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    return (h("c-card-actions", { align: this.align, justify: this.justify, style: { padding: '0px' } }, h("slot", null)));
  }
}, [1, "c-login-card-actions", {
    "align": [1],
    "justify": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-login-card-actions", "c-card-actions"];
  components.forEach(tagName => { switch (tagName) {
    case "c-login-card-actions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CLoginCardActions$1);
      }
      break;
    case "c-card-actions":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CLoginCardActions = CLoginCardActions$1;
const defineCustomElement = defineCustomElement$1;

export { CLoginCardActions, defineCustomElement };

//# sourceMappingURL=c-login-card-actions.js.map