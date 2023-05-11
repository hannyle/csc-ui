import { r as registerInstance, c as createEvent, h, g as getElement } from './index-aa797944.js';

const cTabButtonsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-tab-buttons{--c-switch-border-color:var(--csc-primary);display:flex;flex-wrap:wrap;box-shadow:0 0 0 2px var(--c-switch-border-color);margin:2px;border-radius:var(--csc-border-radius);background-color:var(--csc-primary);gap:2px}.c-tab-buttons ::slotted(*){flex-grow:1}.c-tab-buttons--disabled{--c-switch-border-color:var(--csc-light-grey);pointer-events:none;background-color:var(--csc-light-grey)}::slotted(c-button:first-child){--c-radius:4px 0 0 4px}::slotted(c-button:last-child){--c-radius:0 4px 4px 0}";

const CTabButtons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
    this.value = undefined;
    this.mandatory = false;
    this.size = 'default';
    this.hostDisabled = false;
  }
  onValueChange(value) {
    var _a, _b;
    this.el.childNodes.forEach((button) => {
      button.outlined = true;
    });
    if (value !== null) {
      const button = this.buttons.find((btn) => btn.value === value) || this.buttons[value];
      if (button)
        button.outlined = false;
    }
    this.changeValue.emit((_b = (_a = this.buttons[value]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : value);
  }
  onTabChange(event) {
    const isActive = this.value !== null &&
      (this._isIndexBased
        ? +event.detail === +this.value
        : event.detail === this.value);
    if (this.mandatory && isActive) {
      return;
    }
    const nullValue = this._isIndexBased ? null : '';
    const value = this._isIndexBased ? +event.detail : event.detail;
    this.value = isActive ? nullValue : value;
  }
  get buttons() {
    return Array.from(this.el.childNodes).filter((element) => element.tagName === 'C-BUTTON');
  }
  componentDidLoad() {
    var _a;
    this.value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    this._isIndexBased = this.buttons.every((button) => typeof button.value === 'undefined');
    this.buttons.forEach((button, index) => {
      button.setAttribute('data-index', String(index));
      button.grouped = true;
      button.disabled = this.hostDisabled;
      button.size = this.size;
      const isActive = this.value !== null &&
        (this._isIndexBased
          ? index === +this.value
          : button.value === this.value);
      button.outlined = !isActive;
      const buttonElement = button.shadowRoot.querySelector('.c-button');
      buttonElement.classList.add('grouped');
    });
  }
  render() {
    const classes = {
      'c-tab-buttons': true,
      'c-tab-buttons--disabled': this.hostDisabled,
    };
    return (h("div", { class: classes }, h("slot", null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"]
  }; }
};
CTabButtons.style = cTabButtonsCss;

export { CTabButtons as c_tab_buttons };

//# sourceMappingURL=c-tab-buttons.entry.js.map