import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cStepsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{width:100%;display:grid;gap:8px;border-radius:6px}@supports selector(:focus-within){:host(:focus){outline:none}}:host(:focus-within){outline:2px var(--csc-primary) solid;outline-offset:2px}.c-steps{--c-step-line-color:var(--csc-mid-grey);--c-step-before-color:var(--csc-mid-grey);--c-step-after-color:var(--csc-mid-grey);--c-step-divider-width:calc(100% + 160px);--c-step-divider-margin:10px -80px 0;width:100%;display:flex;flex-wrap:nowrap}.c-steps slot{display:flex;justify-items:space-between;width:100%}.c-steps ::slotted(.divider){height:2px;flex:1;background-color:var(--c-step-line-color);width:var(--c-step-divider-width);margin:var(--c-step-divider-margin)}.c-steps ::slotted(.divider.complete){background-color:var(--csc-primary);height:4px;margin-top:9px}.c-steps.mobile{--c-step-divider-width:calc(100% + 11px);--c-step-divider-margin:10px -10px 0}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CSteps$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this._isInitialized = false;
    this.value = undefined;
    this.isMobile = false;
    this.label = '';
  }
  watchPropHandler() {
    this._handleDividers();
  }
  _handleDividers() {
    this._stepElements = this.host.querySelectorAll('c-step');
    const dividers = this.host.querySelectorAll('.divider');
    this._stepElements.forEach((item, index) => {
      item.current = index + 1 === +this.value;
      item.complete = index + 1 < +this.value;
      if (index + 1 < this._stepElements.length) {
        const div = this._isInitialized
          ? dividers[index]
          : document.createElement('div');
        div.classList.toggle('complete', !!item.complete);
        if (!this._isInitialized) {
          div.classList.add('divider');
          item.after(div);
        }
      }
      if (item.current) {
        this.label = item.textContent;
      }
    });
    this._isInitialized = true;
  }
  componentDidLoad() {
    this._handleDividers();
    this._resizeObserver = new ResizeObserver(([entry]) => {
      const maxWidth = this._stepElements.length * 180;
      this.isMobile = maxWidth > entry.contentRect.width;
      this.host.shadowRoot
        .querySelector('.c-steps')
        .classList.toggle('mobile', this.isMobile);
      this._stepElements.forEach((node) => {
        node.classList.toggle('mobile', this.isMobile);
      });
    });
    window.requestAnimationFrame(() => {
      this._resizeObserver.observe(this.host);
    });
  }
  _getA11yMessage(total, current) {
    return `
      Steps, step ${Math.min(current, total)} of ${total}.
      ${this.label}.
      ${current - 1} step${current - 1 !== 1 ? 's' : ''} marked as completed.
    `;
  }
  render() {
    return (h(Host, { tabindex: "0" }, this._stepElements && (h("span", { class: "visuallyhidden" }, this._getA11yMessage(this._stepElements.length, +this.value))), h("div", { class: "c-steps", "aria-hidden": "true" }, h("slot", null)), this.isMobile && (h("div", { class: "c-steps__label", "aria-hidden": "true" }, this.label))));
  }
  get host() { return this; }
  static get watchers() { return {
    "value": ["watchPropHandler"]
  }; }
  static get style() { return cStepsCss; }
}, [1, "c-steps", {
    "value": [8],
    "isMobile": [32],
    "label": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-steps"];
  components.forEach(tagName => { switch (tagName) {
    case "c-steps":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSteps$1);
      }
      break;
  } });
}

const CSteps = CSteps$1;
const defineCustomElement = defineCustomElement$1;

export { CSteps, defineCustomElement };

//# sourceMappingURL=c-steps.js.map