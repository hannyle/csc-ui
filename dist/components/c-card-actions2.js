import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cCardActionsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{padding:0 var(--c-card-gap, 24px);display:block}.c-card-actions{align-items:center;display:flex;gap:8px}.c-card-actions ::slotted(c-button[fit]){flex:1}.c-card-actions--align-center{align-items:center}.c-card-actions--align-start{align-items:flex-start}.c-card-actions--align-end{align-items:flex-end}.c-card-actions--justify-center{justify-content:center}.c-card-actions--justify-end{justify-content:flex-end}.c-card-actions--justify-start{justify-content:flex-start}.c-card-actions--justify-stretch{justify-content:stretch}.c-card-actions--justify-stretch ::slotted(*){flex:1}.c-card-actions--justify-space-between{justify-content:space-between}.c-card-actions--justify-space-around{justify-content:space-around}";

const CCardActions = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-card-actions': true,
      [`c-card-actions--align-${this.align}`]: true,
      [`c-card-actions--justify-${this.justify}`]: true,
    };
    return (h(Host, null, h("div", { class: classes }, h("slot", null))));
  }
  static get style() { return cCardActionsCss; }
}, [1, "c-card-actions", {
    "align": [1],
    "justify": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-card-actions"];
  components.forEach(tagName => { switch (tagName) {
    case "c-card-actions":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCardActions);
      }
      break;
  } });
}

export { CCardActions as C, defineCustomElement as d };

//# sourceMappingURL=c-card-actions2.js.map