import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const cAccordionCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-accordion{display:flex;flex-wrap:wrap;gap:8px}.c-accordion ::slotted(*){flex-basis:100%}";

const CAccordion$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this.value = undefined;
    this.mandatory = false;
    this.multiple = false;
    this.outlined = false;
  }
  watchPropHandler(value) {
    this.changeValue.emit(value);
    this._handleItemExpansion();
  }
  onAccordionItemChange(event) {
    const { value, expanded } = event.detail;
    if (this.multiple && Array.isArray(this.value)) {
      if (expanded) {
        this.value.push(value);
      }
      else {
        this.value = this.value.filter((v) => v !== value);
      }
    }
    else {
      this.value = expanded ? value : null;
    }
  }
  get items() {
    return Array.from(this.el.childNodes);
  }
  _handleItemExpansion() {
    const isExpanded = (item) => Array.isArray(this.value)
      ? this.value.includes(item.value)
      : item.value === this.value;
    const isLastExpandedItem = (item) => Array.isArray(this.value)
      ? isExpanded(item) && this.value.length === 1
      : isExpanded(item);
    for (const item of this.items) {
      item.collapsable =
        !this.mandatory || (this.mandatory && !isLastExpandedItem(item));
      item.outlined = this.outlined;
      item.expanded = isExpanded(item);
    }
  }
  componentDidLoad() {
    this._handleItemExpansion();
  }
  render() {
    return (h("div", { class: "c-accordion" }, h("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["watchPropHandler"]
  }; }
  static get style() { return cAccordionCss; }
}, [1, "c-accordion", {
    "value": [1032],
    "mandatory": [4],
    "multiple": [4],
    "outlined": [4]
  }, [[1, "itemChange", "onAccordionItemChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "c-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CAccordion$1);
      }
      break;
  } });
}

const CAccordion = CAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { CAccordion, defineCustomElement };

//# sourceMappingURL=c-accordion.js.map