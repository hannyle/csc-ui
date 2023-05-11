import { r as registerInstance, c as createEvent, h } from './index-aa797944.js';
import { v as v4 } from './v4-929670b7.js';

const cAccordionItemCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{max-width:100%}.c-accordion-item{--c-accordion-indicator-rotation:rotate(180deg);--c-accordion-content-height:0px;--c-accordion-min-height:46px;--c-accordion-border-radius:6px;--c-accordion-padding:12px;--c-accordion-overflow:hidden;display:block}.c-accordion-item--expanded{--c-accordion-content-height:auto;--c-accordion-indicator-rotation:rotate(0deg);--c-accordion-overflow:visible}.c-accordion-item--outlined{--c-accordion-min-height:42px;--c-accordion-border-radius:4px;--c-accordion-padding:10px;box-shadow:inset 0 0 0 2px var(--csc-primary-ghost);border-radius:6px;padding:2px}.c-accordion-item__header{min-height:var(--c-accordion-min-height);user-select:none;background:var(--csc-primary-ghost);display:grid;column-gap:8px;align-items:center;padding:0 var(--c-accordion-padding);border-radius:var(--c-accordion-border-radius);cursor:pointer;grid-template-columns:auto 1fr auto;gap:8px;width:100%;border:none;text-align:left;margin:0}.c-accordion-item__header:focus{outline:2px var(--csc-primary) solid;outline-offset:4px}@supports selector(:focus-visible){.c-accordion-item__header:focus{outline:none}}.c-accordion-item__header:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:4px}.c-accordion-item__title{margin-top:0;margin-bottom:0;font-weight:500;font-size:16px;color:var(--csc-primary)}.c-accordion-item__content{padding:16px}.c-accordion-item__content-wrapper{overflow:var(--c-accordion-overflow);height:var(--c-accordion-content-height)}.c-accordion-item__icon{height:24px;font-size:24px;color:var(--csc-primary);display:flex;align-items:center}.c-accordion-item__icon>*{height:24px;display:flex;align-items:center}.c-accordion-item__indicator{display:flex;align-items:center}.c-accordion-item__indicator svg{width:24px;height:24px !important;transform:var(--c-accordion-indicator-rotation);transition:transform 0.3s ease-in-out}";

const CAccordionItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemChange = createEvent(this, "itemChange", 7);
    this._uniqueId = v4();
    this._icons = {
      enabled: (h("path", { fill: "var(--csc-primary)", d: "M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z" })),
      disabled: (h("path", { fill: "var(--csc-primary)", d: "M22.11 21.46L2.39 1.73L1.11 3L6.25 8.14C6.1 8.41 6 8.7 6 9V14.5L9.5 18V21H14.5V18L15.31\n        17.2L20.84 22.73L22.11 21.46M13.09 16.59L12.67 17H11.33L10.92 16.59L8 13.67V9.89L13.89 15.78L13.09 16.59M12.2 9L10.2\n        7H14V3H16V7C17 7 18 8 18 9V14.5L17.85 14.65L16 12.8V9.09C16 9.06 15.95 9 15.92 9H12.2M10 6.8L8 4.8V3H10V6.8Z" })),
      bell: (h("path", { fill: "var(--csc-primary)", d: "M12 2A2 2 0 0 0 10 4A2 2 0 0 0 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H21V19L19 17V11C19 7.82 16.88 5.14 14 4.29A2 2 0 0 0 14 4A2 2 0 0 0 12 2M12 6A5 5 0 0 1 17 11V18H7V11A5 5 0 0 1 12 6M21 7V13H23V7H21M21 15V17H23V15H21M10 21A2 2 0 0 0 12 23A2 2 0 0 0 14 21H10Z" })),
      pending: (h("path", { fill: "var(--csc-primary)", d: "M21 11.11V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.11C12.37 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.37 21 11.11M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M5 19V5H7V7H17V5H19V9.68C18.09 9.25 17.08 9 16 9H7V11H11.1C10.5 11.57 10.04 12.25 9.68 13H7V15H9.08C9.03 15.33 9 15.66 9 16C9 17.08 9.25 18.09 9.68 19H5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" })),
    };
    this.collapsable = false;
    this.heading = undefined;
    this.icon = undefined;
    this.value = undefined;
    this.expanded = false;
    this.outlined = false;
  }
  handleKeyDown(event) {
    if (event.target.tagName === 'C-ACCORDION-ITEM' &&
      (event.key === 'Enter' || event.code === 'Space')) {
      event.preventDefault();
      this._toggle();
    }
  }
  stop(event) {
    event.stopPropagation();
  }
  _toggle() {
    if (!this.collapsable && this.expanded)
      return;
    this.expanded = !this.expanded;
    this.itemChange.emit({ value: this.value, expanded: this.expanded });
  }
  _getIcon() {
    return h("svg", { viewBox: "0 0 24 24" }, this._icons[this.icon]);
  }
  render() {
    const hostClasses = {
      'c-accordion-item': true,
      'c-accordion-item--expanded': this.expanded,
      'c-accordion-item--outlined': this.outlined,
    };
    const headerClasses = {
      'c-accordion-item__header': true,
      'c-accordion-item__header--expanded': this.expanded,
    };
    const indicatorClasses = {
      'c-accordion-item__indicator': true,
      'c-accordion-item__indicator--expanded': this.expanded,
    };
    return (h("div", { class: hostClasses }, h("button", { id: `header__${this._uniqueId}`, "aria-controls": `panel__${this._uniqueId}`, "aria-expanded": this.expanded.toString(), "aria-label": this.heading, class: headerClasses, tabindex: "0", onClick: () => this._toggle() }, h("div", { class: "c-accordion-item__icon" }, !!this.icon ? this._getIcon() : h("slot", { name: "icon" })), h("div", { class: "c-accordion-item__title" }, this.heading), h("div", { class: indicatorClasses }, h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", class: this.expanded && 'expanded', xmlns: "http://www.w3.org/2000/svg" }, h("path", { fill: "var(--csc-primary)", d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" })))), h("div", { class: "c-accordion-item__content-wrapper" }, h("div", { id: `panel__${this._uniqueId}`, class: "c-accordion-item__content", role: "region", "aria-labelledby": `header__${this._uniqueId}` }, this.expanded && h("slot", null)))));
  }
};
CAccordionItem.style = cAccordionItemCss;

export { CAccordionItem as c_accordion_item };

//# sourceMappingURL=c-accordion-item.entry.js.map