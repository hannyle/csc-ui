import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cLinkCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}a{display:inline-flex;cursor:pointer;font-size:16px;text-decoration:none}a.icon{display:flex;align-items:center}a.icon svg{margin-right:4px}a.icon-after{flex-direction:row-reverse}a.icon-after svg{margin-left:4px}a.underline{text-decoration:underline}";

const CLink$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = null;
    this.underline = false;
    this.target = null;
    this.color = 'link';
    this.weight = '600';
    this.path = null;
    this.iconFill = 'link';
    this.iconAfter = undefined;
    this.iconStyle = {};
  }
  render() {
    const CSCColor = (color) => `var(--csc-${color})`;
    const classList = {
      underline: this.underline,
      icon: !!this.path,
      'icon-after': this.iconAfter,
    };
    const iconStyle = Object.assign(Object.assign({}, this.iconStyle), { fill: this.iconFill ? CSCColor(this.iconFill) : 'inherit' });
    const style = {
      color: CSCColor(this.color),
      fontWeight: this.weight.toString(),
    };
    return (h("a", { class: classList, href: this.href, target: this.target, style: style }, h("slot", { name: "icon" }, this.path && (h("svg", { style: iconStyle, class: "icon-by-path", width: "18", height: "18", viewBox: "0 0 24 24" }, h("path", { d: this.path })))), h("slot", null)));
  }
  static get style() { return cLinkCss; }
}, [1, "c-link", {
    "href": [1],
    "underline": [4],
    "target": [1],
    "color": [1],
    "weight": [1],
    "path": [1],
    "iconFill": [1, "icon-fill"],
    "iconAfter": [4, "icon-after"],
    "iconStyle": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-link"];
  components.forEach(tagName => { switch (tagName) {
    case "c-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CLink$1);
      }
      break;
  } });
}

const CLink = CLink$1;
const defineCustomElement = defineCustomElement$1;

export { CLink, defineCustomElement };

//# sourceMappingURL=c-link.js.map