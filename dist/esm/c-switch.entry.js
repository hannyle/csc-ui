import { r as registerInstance, c as createEvent, h, g as getElement } from './index-aa797944.js';

const cSwitchCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:inline-block}.c-switch{--border-color:var(--csc-dark-grey);--thumb-color:var(--csc-dark-grey);--thumb-margin:5px;--slider-color:transparent;--switch-pointer:pointer;--switch-height:22px;--switch-width:44px;--thumb-size:calc(var(--switch-height) - 2 * var(--thumb-margin));--thumb-active-position:calc(\n    var(--switch-width) - var(--thumb-size) - 2 * var(--thumb-margin)\n  );display:inline-grid;height:var(--switch-height);position:relative;grid-template-columns:1fr;gap:12px;align-items:center}.c-switch--disabled{--switch-pointer:default;--thumb-color:var(--csc-mid-grey);--slider-color:var(--csc-light-grey);--border-color:transparent;--csc-error:var(--csc-mid-grey);color:var(--csc-mid-grey)}.c-switch--label{grid-template-columns:var(--switch-width) auto}.c-switch__label span.required{color:var(--csc-error)}.c-switch__input{height:var(--switch-height);position:relative;width:var(--switch-width);align-self:start}.c-switch__slider{background-color:var(--slider-color);border-radius:var(--switch-height);box-shadow:inset 0 0 0 2px var(--border-color);bottom:0;cursor:var(--switch-pointer);left:0;position:absolute;right:0;top:0;transform-origin:50% 50%;transition:0.4s}.c-switch__slider::before{background-color:var(--thumb-color);border-radius:50%;bottom:var(--thumb-margin);content:\"\";height:var(--thumb-size);left:var(--thumb-margin);position:absolute;transition:0.4s;width:var(--thumb-size)}.c-switch input{height:0;opacity:0;width:0}.c-switch input:checked+.c-switch__slider{--thumb-color:#fff;--slider-color:var(--csc-primary);--border-color:var(--csc-primary)}.c-switch input:checked+.c-switch__slider::before{transform:translateX(var(--thumb-active-position))}.c-switch input:focus+.c-switch__slider{outline:none}.c-switch input:focus-visible+.c-switch__slider{outline:2px var(--csc-primary) solid;outline-offset:2px}";

const CSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
    this._valueChangedHandler = (event) => {
      const value = event.currentTarget.checked;
      this.value = value;
      this.changeValue.emit(value);
    };
    this.hostDisabled = false;
    this.hostId = undefined;
    this.required = false;
    this.value = false;
    this.hasLabel = false;
  }
  componentDidLoad() {
    const slotted = this.host.childNodes;
    this.hasLabel = slotted && slotted.length > 0;
  }
  render() {
    const classes = {
      'c-switch': true,
      'c-switch--disabled': !!this.hostDisabled,
      'c-switch--label': this.hasLabel,
    };
    return (h("label", { class: classes, htmlFor: this.hostId }, h("div", { class: "c-switch__input" }, h("input", { id: this.hostId, "aria-checked": this.value, type: "checkbox", role: "switch", disabled: this.hostDisabled, checked: this.value, onInput: this._valueChangedHandler }), h("span", { class: "c-switch__slider" })), this.hasLabel ? (h("div", { class: "c-switch__label" }, h("slot", null), this.required && h("span", { class: "required" }, "\u00A0*"))) : null));
  }
  get host() { return getElement(this); }
};
CSwitch.style = cSwitchCss;

export { CSwitch as c_switch };

//# sourceMappingURL=c-switch.entry.js.map