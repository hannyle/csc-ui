import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './c-title2.js';

const cCardTitleCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{padding:0 var(--c-card-gap, 24px);display:block}";

const CCardTitle$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "c-card-title" }, h("c-title", null, h("slot", null))));
  }
  static get style() { return cCardTitleCss; }
}, [1, "c-card-title"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-card-title", "c-title"];
  components.forEach(tagName => { switch (tagName) {
    case "c-card-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCardTitle$1);
      }
      break;
    case "c-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CCardTitle = CCardTitle$1;
const defineCustomElement = defineCustomElement$1;

export { CCardTitle, defineCustomElement };

//# sourceMappingURL=c-card-title.js.map