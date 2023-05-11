import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cNavigationbuttonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;margin-right:0px;padding-right:12px;padding-left:12px;padding-top:14px;padding-bottom:10px;cursor:pointer;user-select:none}";

const CNavigationbutton$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this._svg = (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "15.33", viewBox: "0 0 20 15.33" }, h("line", { id: "Line_300", "data-name": "Line 300", x2: "18", transform: "translate(1 1)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), h("line", { id: "Line_301", "data-name": "Line 301", x2: "18", transform: "translate(1 7.67)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), h("line", { id: "Line_302", "data-name": "Line 302", x2: "18", transform: "translate(1 14.33)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" })));
  }
  render() {
    return h(Host, { tabindex: 0 }, this._svg);
  }
  static get style() { return cNavigationbuttonCss; }
}, [1, "c-navigationbutton"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-navigationbutton"];
  components.forEach(tagName => { switch (tagName) {
    case "c-navigationbutton":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CNavigationbutton$1);
      }
      break;
  } });
}

const CNavigationbutton = CNavigationbutton$1;
const defineCustomElement = defineCustomElement$1;

export { CNavigationbutton, defineCustomElement };

//# sourceMappingURL=c-navigationbutton.js.map