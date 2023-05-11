import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as createRipple } from './utils.js';

const cIconButtonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}button.icon-button{font-family:var(--csc-font-family);display:flex;border:none;padding:0;width:40px;height:40px;background:var(--csc-primary);color:#fff;transition:background-color 0.3s ease;border-radius:50%;cursor:pointer;position:relative;align-items:center;justify-content:center;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0)}button.icon-button ::slotted(svg),button.icon-button ::slotted(i),button.icon-button ::slotted(span){width:24px;height:24px;font-size:24px}button.icon-button ::slotted(*),button.icon-button svg{display:flex;align-items:center;justify-content:center}button.icon-button--small{width:32px;height:32px}button.icon-button--small ::slotted(svg),button.icon-button--small ::slotted(i),button.icon-button--small ::slotted(span){width:22px !important;height:22px !important;font-size:16px !important}button.icon-button--x-small{width:28px;height:28px}button.icon-button--x-small ::slotted(svg),button.icon-button--x-small ::slotted(i),button.icon-button--x-small ::slotted(span){width:18px !important;height:18px !important;font-size:14px !important}button.icon-button:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){button.icon-button:focus{outline:none}}button.icon-button:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}button.icon-button.ghost{background:var(--csc-primary-ghost);color:var(--csc-primary)}button.icon-button.ghost ::slotted(*),button.icon-button.ghost svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.ghost:hover{background:var(--csc-primary-ghost-hover)}button.icon-button.ghost.inverted{color:#fff;background:rgba(255, 255, 255, 0.15)}button.icon-button.ghost.inverted ::slotted(*),button.icon-button.ghost.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.ghost.inverted:hover{background:rgba(255, 255, 255, 0.25)}button.icon-button.text{background:transparent;color:var(--csc-primary)}button.icon-button.text ::slotted(*),button.icon-button.text svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.text:hover{background:var(--csc-primary-text-hover)}button.icon-button.text.inverted{color:#fff}button.icon-button.text.inverted ::slotted(*),button.icon-button.text.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.text.inverted:hover{background:rgba(255, 255, 255, 0.15)}button.icon-button.outlined{background:transparent;box-shadow:inset 0 0 0 2px var(--csc-primary);color:var(--csc-primary)}button.icon-button.outlined ::slotted(*),button.icon-button.outlined svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.outlined.disabled{background:transparent;box-shadow:inset 0 0 0 2px #acacac}button.icon-button.outlined:hover{background:var(--csc-primary-text-hover)}button.icon-button.outlined.inverted{color:#fff;box-shadow:inset 0 0 0 2px #fff}button.icon-button.outlined.inverted ::slotted(*),button.icon-button.outlined.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.outlined.inverted:hover{background:rgba(255, 255, 255, 0.15)}button.icon-button.disabled{background:var(--csc-light-grey);pointer-events:none}button.icon-button.disabled ::slotted(*),button.icon-button.disabled svg{color:var(--csc-mid-grey) !important;fill:var(--csc-mid-grey) !important}button.icon-button.disabled.text{background:transparent}button.icon-button.disabled.ghost{background:var(--csc-lightest-grey)}button.icon-button.disabled:hover{background:transparent}button.icon-button:hover{background:var(--csc-primary-hover)}::slotted(*),svg{color:rgb(255, 255, 255);fill:rgb(255, 255, 255);pointer-events:none}.icon-button-badge{background:#ff5800;border-radius:16px;display:flex;align-items:center;justify-content:center;min-width:16px;height:16px;color:#fff;position:absolute;right:-6px;font-size:12px;box-shadow:0 0 0 2px #fff;top:-6px;padding:0 4px}.inner-container{top:0;bottom:0;right:0;left:0;display:flex;align-items:center;justify-content:center;height:100%;border-radius:50%;overflow:hidden;position:relative;transform:translateZ(0);width:100%}.ripple{transition:background 0.5s;background-position:center;position:absolute;border-radius:50%}.ripple:hover{background:rgba(255, 255, 255, 0) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.15) 1%) center/15000%}.ripple:active{background-color:rgba(255, 255, 255, 0.25);background-size:100%;transition:background 0s}.disabled .icon-button-badge{background:#acacac}.outlined .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.outlined .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}.text .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.text .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}.ghost .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.ghost .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}";

const CIconButton = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this._onClick = (event) => {
      createRipple(event, this._container);
    };
    this.badge = undefined;
    this.text = false;
    this.inverted = false;
    this.outlined = false;
    this.path = null;
    this.ghost = false;
    this.disabled = false;
    this.size = 'default';
  }
  _renderBadge() {
    return h("div", { class: "icon-button-badge" }, this.badge);
  }
  _outerClasses() {
    return {
      'icon-button': true,
      disabled: !!this.disabled,
      text: !!this.text,
      ghost: !!this.ghost,
      outlined: !!this.outlined,
      inverted: !!this.inverted,
      'icon-button--small': this.size === 'small',
      'icon-button--x-small': this.size === 'x-small',
    };
  }
  render() {
    return (h("button", { class: this._outerClasses(), onClick: this._onClick }, h("div", { class: "inner-container", ref: (el) => (this._container = el) }, h("slot", null, this.path && (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: this.path }))))), this.badge && this._renderBadge()));
  }
  static get style() { return cIconButtonCss; }
}, [1, "c-icon-button", {
    "badge": [1],
    "text": [4],
    "inverted": [4],
    "outlined": [4],
    "path": [1],
    "ghost": [4],
    "disabled": [4],
    "size": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "c-icon-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CIconButton);
      }
      break;
  } });
}

export { CIconButton as C, defineCustomElement as d };

//# sourceMappingURL=c-icon-button2.js.map