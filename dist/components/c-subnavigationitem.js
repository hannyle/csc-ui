import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './c-loader2.js';

const cSubnavigationitemCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-subnavigation-item{align-items:center;background-color:transparent;border-radius:4px;color:#595959;cursor:pointer;display:block;display:flex;font-weight:400;line-height:46px;margin:0 8px;overflow:hidden;padding-left:34px;position:relative;transition:background-color 0.2s ease-in;user-select:none;max-width:280px}.c-subnavigation-item__wrapper{padding:2px 0}.c-subnavigation-item__content{display:flex;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.c-subnavigation-item__content::before{background-color:var(--csc-primary);content:\"\";height:100%;left:0;position:absolute;top:0;transform:translateZ(0) translateX(-8px);transition:transform 0.2s ease-in-out;width:8px}.c-subnavigation-item:hover{background-color:#f0f6f7;color:var(--csc-primary)}:host(.active) .c-subnavigation-item{background-color:#ffffff}:host(.active) .c-subnavigation-item__content::before{transform:translateZ(0) translateX(0)}::slotted(span){margin-right:8px;font-size:20px;line-height:1}.c-subnavigation-item:focus{outline:none}.c-subnavigation-item:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:0}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-subnavigation-item__slot{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.c-subnavigation-item__slot slot{display:flex;align-items:center}";

const CSubnavigationitem$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.active = undefined;
    this.focusable = false;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      event instanceof MouseEvent ||
      event instanceof PointerEvent) {
      event.stopPropagation();
      const sidenav = document.querySelector('c-sidenavigation');
      sidenav.menuVisible = false;
      if (this.href) {
        if (this.target) {
          window.open(this.href, this.target);
        }
        else {
          window.location.href = this.href;
        }
      }
    }
  }
  render() {
    const a11y = {
      tabindex: this.focusable ? '0' : '-1',
      role: 'menuitem',
    };
    if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (h(Host, Object.assign({}, a11y, { class: { active: this.active }, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), h("div", { class: "c-subnavigation-item__wrapper" }, h("div", { class: "c-subnavigation-item" }, h("div", { class: "c-subnavigation-item__content" }, h("div", { class: "c-subnavigation-item__slot" }, h("slot", null)), this.active && (h("span", { class: "visuallyhidden" }, ", Current page"))), h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })))));
  }
  get element() { return this; }
  static get style() { return cSubnavigationitemCss; }
}, [1, "c-subnavigationitem", {
    "active": [4],
    "focusable": [4],
    "href": [1],
    "target": [1],
    "loading": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-subnavigationitem", "c-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "c-subnavigationitem":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSubnavigationitem$1);
      }
      break;
    case "c-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CSubnavigationitem = CSubnavigationitem$1;
const defineCustomElement = defineCustomElement$1;

export { CSubnavigationitem, defineCustomElement };

//# sourceMappingURL=c-subnavigationitem.js.map