import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as mdiChevronRight } from './mdi.js';
import { d as defineCustomElement$2 } from './c-loader2.js';

const cSidenavigationitemCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host(.c-sidenavigation-item){align-items:center;backface-visibility:hidden;background-color:rgba(216, 232, 234, 0);border-radius:4px 0 0 4px;color:#fff;cursor:pointer;display:grid;grid-template-columns:1fr;font-weight:400;overflow:hidden;position:relative;transform:translate3d(0, 0, 0);user-select:none;min-width:296px}:host(.c-sidenavigation-item:hover){background-color:rgba(216, 232, 234, 0.2666666667)}:host(.c-sidenavigation-item:focus){outline:none}:host(.c-sidenavigation-item:focus-visible){border-radius:4px 0 0 4px;outline:2px #fff solid;outline-offset:2px}:host(.c-sidenavigation-item.active){background-color:#d8e8ea;color:var(--csc-primary)}:host(.c-sidenavigation-item.active) .svg{fill:var(--csc-primary);transform:rotate(90deg)}:host(.c-sidenavigation-item.active) .c-sidenavigation-item__header{color:var(--csc-primary)}.c-sidenavigation-item__header{align-items:center;color:#fff;display:grid;gap:8px;grid-template-columns:1fr;min-height:46px;padding:0 12px}.c-sidenavigation-item__header--expandable{grid-template-columns:auto 1fr}.c-sidenavigation-item__slot{max-width:100%;overflow:hidden}:host(.c-sidenavigation-item--parent.active){padding-bottom:4px}::slotted(span){margin-right:8px;font-size:20px}::slotted([slot=main]){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.styleMain{padding-left:16px}.subnavitem{height:0;overflow-y:hidden;transition:all 500ms ease;width:100%}.subnavactive{height:max-content;width:100%}.svg{align-self:center;fill:#fff;transition:transform 0.3s ease}:host>div.active .svg{fill:var(--csc-primary);transform:rotate(90deg)}.svg.hidden{opacity:0}.middle{display:flex;height:100%;align-items:center}";

const CSidenavigationitem$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.itemChange = createEvent(this, "itemChange", 7);
    this._slotHasContent = false;
    this.active = undefined;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  onActiveChange(active) {
    this._handleChildFocusableChange(active);
  }
  _handleChildFocusableChange(focusable) {
    if (!this._slotHasContent)
      return;
    const children = Array.from(this.hostElement.querySelector('[slot="subnavitem"]').children);
    children.forEach((child) => {
      child.ariaHidden = (!focusable).toString();
      child.focusable = focusable;
    });
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      !(event instanceof KeyboardEvent)) {
      this.itemChange.emit(event);
      if (!this._slotHasContent) {
        const sidenav = document.querySelector('c-sidenavigation');
        sidenav.menuVisible = false;
      }
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
  componentWillLoad() {
    var _a, _b;
    this._slotHasContent = !!this.hostElement.querySelector('[slot="subnavitem"]');
    const children = Array.from(this.hostElement.querySelector('[slot="main"]').childNodes);
    this._ariaLabel = (_b = (_a = children.find((c) => !!c.nodeValue)) === null || _a === void 0 ? void 0 : _a.nodeValue) === null || _b === void 0 ? void 0 : _b.trim();
    this._handleChildFocusableChange(this.active);
  }
  render() {
    var _a, _b;
    const classes = {
      'c-sidenavigation-item': true,
      'c-sidenavigation-item--parent': this._slotHasContent,
      active: this.active,
    };
    const subNavigationClasses = {
      subnavactive: this.active,
      subnavitem: !this.active,
    };
    const a11y = {
      role: 'menuitem',
      tabindex: '0',
    };
    if (this._slotHasContent) {
      a11y['aria-expanded'] = (_a = (!!this.active)) === null || _a === void 0 ? void 0 : _a.toString();
    }
    else if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (h(Host, Object.assign({}, a11y, { class: classes, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), h("div", { class: {
        'c-sidenavigation-item__header': true,
        'c-sidenavigation-item__header--expandable': this._slotHasContent,
      } }, this._slotHasContent && (h("svg", { width: "22", height: "22", viewBox: "0 0 24 24", class: "svg" }, h("path", { d: mdiChevronRight }))), h("div", { class: "c-sidenavigation-item__slot" }, h("slot", { name: "main" }))), this._slotHasContent && (h("nav", { role: "menubar", "aria-label": this._ariaLabel, "aria-expanded": (_b = (!!this.active)) === null || _b === void 0 ? void 0 : _b.toString(), class: subNavigationClasses }, h("slot", { name: "subnavitem" }))), h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "active": ["onActiveChange"]
  }; }
  static get style() { return cSidenavigationitemCss; }
}, [1, "c-sidenavigationitem", {
    "active": [4],
    "href": [1],
    "target": [1],
    "loading": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-sidenavigationitem", "c-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "c-sidenavigationitem":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSidenavigationitem$1);
      }
      break;
    case "c-loader":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CSidenavigationitem = CSidenavigationitem$1;
const defineCustomElement = defineCustomElement$1;

export { CSidenavigationitem, defineCustomElement };

//# sourceMappingURL=c-sidenavigationitem.js.map