import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cRowCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-row{display:flex;flex:1 1 auto;flex-wrap:wrap;gap:var(--row-gap)}.c-row slot{display:flex;flex-wrap:wrap;width:100%;gap:var(--row-gap)}.c-row--nowrap slot{flex-wrap:nowrap !important}.c-row--align-center slot{align-items:center}.c-row--align-start slot{align-items:flex-start}.c-row--align-center slot{align-items:center}.c-row--align-end slot{align-items:flex-end}.c-row--justify-start slot{justify-content:flex-start}.c-row--justify-center slot{justify-content:center}.c-row--justify-end slot{justify-content:flex-end}.c-row--justify-space-between slot{justify-content:space-between}.c-row--justify-space-around slot{justify-content:space-around}";

const CRow = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gap = 0;
    this.nowrap = false;
    this.align = 'start';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-row': true,
      'c-row--nowrap': this.nowrap,
      [`c-row--align-${this.align}`]: true,
      [`c-row--justify-${this.justify}`]: true,
    };
    return (h("div", { class: classes, style: { '--row-gap': `${this.gap}px` } }, h("slot", null)));
  }
  static get style() { return cRowCss; }
}, [1, "c-row", {
    "gap": [2],
    "nowrap": [4],
    "align": [1],
    "justify": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-row"];
  components.forEach(tagName => { switch (tagName) {
    case "c-row":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CRow);
      }
      break;
  } });
}

export { CRow as C, defineCustomElement as d };

//# sourceMappingURL=c-row2.js.map