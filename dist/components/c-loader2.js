import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const cLoaderCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;z-index:6;background:rgba(255, 255, 255, 0.8);border-radius:inherit;visibility:hidden;opacity:0;transition:opacity 0.3s ease-in-out}:host(.active){opacity:1;visibility:visible}:host(.active) .c-loader{transform:scale(1)}:host{--rotation-animation-speed:2s;--rotation-animation-easing:linear;--stroke-animation-speed:1.5s;--stroke-animation-easing:ease-in-out;--stroke-width:4px;--stroke-start-dasharray:1, 200;--stroke-end-dasharray:89, 200}.c-loader{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:scale(0.5);transition:transform 0.3s ease-in-out}.c-loader__loader{height:var(--c-loader-size);width:var(--c-loader-size);animation:rotate var(--rotation-animation-speed) var(--rotation-animation-easing) infinite}.c-loader__loader-path{fill:none;stroke-width:var(--stroke-width);animation:animate-stroke var(--stroke-animation-speed) var(--stroke-animation-easing) infinite;stroke-linecap:round;stroke:var(--csc-primary)}.c-loader__slot{line-height:40px;font-size:14px;color:var(--csc-mid-grey);text-align:center;font-weight:500;display:block;max-height:0px;overflow:hidden;animation-duration:4s;animation-direction:forwards;animation-iteration-count:1;animation-name:fadein;animation-fill-mode:forwards}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes animate-stroke{0%{stroke-dasharray:var(--stroke-start-dasharray);stroke-dashoffset:0}50%{stroke-dasharray:var(--stroke-end-dasharray);stroke-dashoffset:-35}100%{stroke-dasharray:var(--stroke-end-dasharray);stroke-dashoffset:-124}}@keyframes fadein{0%{max-height:0px}100%{max-height:300px}}";

const CLoader = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.contentdelay = 0;
    this.hide = false;
    this.size = 48;
  }
  onElementHide(hide) {
    this.el.classList.toggle('active', !hide);
  }
  componentDidLoad() {
    this.el.classList.toggle('active', !this.hide);
  }
  render() {
    const slotHasContent = !!this.el.childNodes.length;
    const styles = {
      '--c-loader-size': `${this.size}px`,
    };
    return (h(Host, null, h("div", { class: "c-loader", style: styles }, h("svg", { class: "c-loader__loader", viewBox: "25 25 50 50" }, h("circle", { class: "c-loader__loader-path", cx: "50", cy: "50", r: "20" })), slotHasContent && (h("div", { class: "c-loader__slot", style: { 'animation-delay': `${this.contentdelay}s` } }, h("slot", null))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "hide": ["onElementHide"]
  }; }
  static get style() { return cLoaderCss; }
}, [1, "c-loader", {
    "contentdelay": [2],
    "hide": [4],
    "size": [2]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-loader"];
  components.forEach(tagName => { switch (tagName) {
    case "c-loader":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CLoader);
      }
      break;
  } });
}

export { CLoader as C, defineCustomElement as d };

//# sourceMappingURL=c-loader2.js.map