import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cIconCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block}";

const CIcon = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.path = undefined;
    this.size = 24;
    this.color = 'var(--csc-primary)';
  }
  render() {
    return (h(Host, { style: { height: `${this.size}px` } }, h("svg", { width: this.size, height: this.size, viewBox: "0 0 24 24" }, h("path", { d: this.path, style: { fill: this.color } }))));
  }
  static get style() { return cIconCss; }
}, [1, "c-icon", {
    "path": [1],
    "size": [2],
    "color": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "c-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CIcon);
      }
      break;
  } });
}

export { CIcon as C, defineCustomElement as d };

//# sourceMappingURL=c-icon2.js.map