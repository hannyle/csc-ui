import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const cLoginButtonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}a{display:grid;border:1px var(--csc-light-grey) solid;grid-template-columns:1fr;grid-template-rows:1fr auto;place-content:center;border-radius:4px;text-align:center;text-decoration:none;color:var(--csc-dark-grey);min-height:168px;height:100%;outline:1px transparent solid;transition:all 0.3s ease-in-out}a img{place-self:center;max-width:200px;padding:8px 24px;max-height:120px}a div{background-color:rgba(0, 0, 0, 0.015);font-size:14px;padding:4px;box-shadow:0 -1px 0 0 rgba(0, 0, 0, 0.05)}a:hover{outline:1px var(--csc-primary) solid;border-color:var(--csc-primary)}a:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){a:focus{outline:none}}a:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}";

const CLoginButton$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.href = '';
    this.src = '';
    this.alt = '';
  }
  render() {
    return (h("a", { style: { backgroundImage: this.src }, href: this.href }, h("img", { src: this.src, alt: this.alt }), h("div", null, h("slot", null))));
  }
  static get style() { return cLoginButtonCss; }
}, [1, "c-login-button", {
    "href": [1],
    "src": [1],
    "alt": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-login-button"];
  components.forEach(tagName => { switch (tagName) {
    case "c-login-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CLoginButton$1);
      }
      break;
  } });
}

const CLoginButton = CLoginButton$1;
const defineCustomElement = defineCustomElement$1;

export { CLoginButton, defineCustomElement };

//# sourceMappingURL=c-login-button.js.map