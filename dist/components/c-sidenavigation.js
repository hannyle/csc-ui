import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { r as mdiArrowRight } from './mdi.js';
import { d as defineCustomElement$2 } from './c-icon-button2.js';

const cSidenavigationCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host::-webkit-scrollbar{width:12px;background:#d8e8ea}:host::-webkit-scrollbar-track{border-radius:10px}:host::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.3);border-radius:10px;border:solid 3px #d8e8ea}:host(.autoheight){height:calc(100vh - 60px);overflow-y:auto;overflow-x:hidden}:host(.desktop){flex-grow:1;display:flex;flex-shrink:2;flex-basis:260px;max-width:320px;background:var(--csc-primary)}.c-sidenavigation{background:var(--csc-primary);display:flex;flex-flow:column nowrap;flex:1;gap:4px;min-height:fit-content;padding:24px 0px 24px 24px;position:relative;transition:transform 0.3s ease;width:100%;z-index:8}.c-sidenavigation__content{display:flex;flex-direction:column;flex-basis:260px;flex-grow:1;flex-shrink:2;width:320px}.c-sidenavigation__content--mobile{height:100vh;max-width:320px;overflow-y:scroll;position:fixed;right:0;top:0;transition:transform 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);transform:translateX(0%);z-index:999}.c-sidenavigation__content--mobile.c-sidenavigation__content--hidden{transform:translateX(100%)}.c-sidenavigation__content--mobile>nav{min-height:auto;padding-top:0}.c-sidenavigation__burger{background-color:var(--csc-primary);display:flex;justify-content:flex-end;padding:8px 16px}.c-sidenavigation ul{display:flex;flex-flow:column nowrap;gap:8px;list-style:none;margin:0;padding:0}.autoheight>nav{height:calc(100vh - 60px);overflow-x:hidden;overflow-y:auto}.vertical-spacer{flex:1;margin-bottom:8px}.c-overlay{background:rgba(0, 0, 0, 0.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:998}@keyframes fadeIn{0%{background:rgba(0, 0, 0, 0)}100%{background:rgba(0, 0, 0, 0.5)}}.c-fadeIn{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeIn;z-index:997}c-sidenavigationitem,c-subnavigationitem{display:contents}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CSidenavigation$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.mobile = undefined;
    this.menuVisible = false;
  }
  handleChange(event) {
    const slotted = this.host.querySelectorAll('c-sidenavigationitem');
    const target = event.target;
    const { active } = target;
    slotted.forEach((item) => {
      if (item.querySelector('[slot="subnavitem"]')) {
        item.active = false;
      }
    });
    if (target.querySelector('[slot="subnavitem"]')) {
      target.active = !active;
    }
    else {
      target.active = true;
    }
  }
  componentDidLoad() {
    const el = document.querySelector('body');
    ['click', 'keyup'].forEach((eventType) => {
      el.addEventListener(eventType, (e) => {
        if (e.target.matches('c-navigationbutton')) {
          if (eventType === 'click') {
            this.menuVisible = !this.menuVisible;
          }
          else if (e instanceof KeyboardEvent && e.key === 'Enter') {
            this.menuVisible = !this.menuVisible;
          }
        }
      });
    });
  }
  _closeMenu() {
    this.menuVisible = false;
  }
  render() {
    const classes = {
      'c-sidenavigation': true,
      'hide-menu': !this.menuVisible,
      mobile: !!this.mobile,
      desktop: !this.mobile,
    };
    const containerClasses = {
      'c-sidenavigation__content': true,
      'c-sidenavigation__content--hidden': !this.menuVisible,
      'c-sidenavigation__content--mobile': !!this.mobile,
      'c-sidenavigation__content--desktop': !this.mobile,
    };
    return (h(Host, { class: { desktop: !this.mobile } }, h("div", { class: containerClasses }, this.mobile && (h("div", { class: "c-sidenavigation__burger" }, h("c-icon-button", { inverted: true, text: true, onClick: () => this._closeMenu() }, h("span", { class: "visuallyhidden" }, "Close sidemenu"), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiArrowRight }))))), h("nav", { class: classes, role: "menubar" }, h("slot", null), h("div", { class: "vertical-spacer" }), h("slot", { name: "bottom" }))), this.menuVisible && this.mobile && (h("div", { class: "c-overlay c-fadeIn", onClick: () => this._closeMenu() }))));
  }
  get host() { return this; }
  static get style() { return cSidenavigationCss; }
}, [1, "c-sidenavigation", {
    "mobile": [4],
    "menuVisible": [1028, "menu-visible"]
  }, [[0, "itemChange", "handleChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-sidenavigation", "c-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "c-sidenavigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSidenavigation$1);
      }
      break;
    case "c-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CSidenavigation = CSidenavigation$1;
const defineCustomElement = defineCustomElement$1;

export { CSidenavigation, defineCustomElement };

//# sourceMappingURL=c-sidenavigation.js.map