import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as mdiCloseCircle } from './mdi.js';
import { c as createRipple } from './utils.js';

const cCheckboxCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-checkbox{--c-checkbox-color:var(--csc-primary);position:relative;width:fit-content}.c-checkbox__details{line-height:1;padding:0 12px}.c-checkbox__details.active .c-checkbox__message{opacity:1;transform:translateY(0px)}.c-checkbox__message{font-size:12px;opacity:0;transform:translateY(-4px);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-checkbox__message--hint{color:var(--csc-mid-grey)}.c-checkbox__message--error{color:var(--csc-error)}.c-checkbox__message span{align-items:flex-start;color:currentColor;display:flex;gap:4px;height:16px}.c-checkbox__message svg{fill:currentColor;min-height:16px;min-width:16px;position:relative;top:-2px}.c-checkbox__label-content{padding-top:10px;text-align:left;user-select:none}.c-checkbox__label-content span.required{color:var(--csc-error)}.c-checkbox--disabled{--c-checkbox-color:var(--csc-mid-grey);--csc-error:var(--c-checkbox-color);color:var(--c-checkbox-color);opacity:0.75}.c-checkbox--disabled .c-checkbox__label{cursor:default}.c-checkbox--error{--c-checkbox-color:var(--csc-error);color:var(--csc-error)}.c-checkbox input:focus{outline:none}.c-checkbox input:focus+.c-checkbox__label .ripple{outline:2px var(--c-checkbox-color) solid}@supports selector(:focus-visible){.c-checkbox input:focus+.c-checkbox__label .ripple{outline:none}}.c-checkbox input:focus-visible+.c-checkbox__label .ripple{outline:2px var(--c-checkbox-color) solid}.c-checkbox:not(.c-checkbox--disabled) .ripple:hover{background-color:var(--csc-primary-text-hover)}.c-checkbox .visuallyhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.c-checkbox input:checked+.c-checkbox__label:before{background:var(--c-checkbox-color);border-color:var(--c-checkbox-color)}.c-checkbox input:checked+.c-checkbox__label .path{stroke:#fff;fill:#fff;stroke-dashoffset:0;stroke-width:13;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.c-checkbox__label{cursor:pointer;display:flex;gap:4px;position:relative;user-select:none}.c-checkbox__label:before{border-radius:2px;border:2px solid var(--c-checkbox-color);content:\"\";display:inline-block;height:18px;left:12px;position:absolute;top:12px;transition:all 0.25s ease-out;vertical-align:middle;width:18px}.c-checkbox__label svg{height:14px;left:14px;position:absolute;top:14px;width:14px}.c-checkbox__label--intermediate .path{stroke-dasharray:0 !important;stroke-dashoffset:0 !important;stroke:transparent}.c-checkbox__label .ripple{border-radius:50%;color:var(--c-checkbox-color);display:grid;height:42px;min-width:42px;overflow:hidden;place-content:center;position:relative;transform:translateZ(0);width:42px}";

const CCheckbox = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this._validationIcon = (h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, h("path", { d: mdiCloseCircle })));
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.intermediate = false;
    this.label = '';
    this.required = false;
    this.valid = true;
    this.validation = 'Required field';
    this.value = false;
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  onValidationMessageChange(message) {
    this.onValidChange(message.length === 0);
  }
  onValidChange(valid) {
    this._handleValidation(valid || this.valid);
  }
  handleKeyDown(event) {
    if (['Space'].includes(event.code)) {
      event.preventDefault();
      this.toggleState(event);
    }
  }
  componentWillLoad() {
    if (typeof this.value !== 'boolean') {
      console.warn(`[C-CHECKBOX] Property 'value' should be a boolean.`);
    }
  }
  componentDidLoad() {
    this._handleValidation(this.valid, 0);
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (h("span", null, this.hint)) : (h("span", null, this._validationIcon, " ", this.validation)) });
    }, timeout);
  }
  toggleState(event) {
    if (this.disabled)
      return;
    createRipple(event, this._container, true);
    this.value = !this.value;
    this.changeValue.emit(this.value);
  }
  _renderMessages() {
    if (this.hideDetails)
      return;
    const classes = {
      'c-checkbox__details': true,
      active: this.messageOptions.show,
    };
    const messageClasses = {
      'c-checkbox__message': true,
      [`c-checkbox__message--${this.messageOptions.type}`]: true,
    };
    return (h("div", { class: classes }, h("div", { class: messageClasses }, this.messageOptions.content)));
  }
  render() {
    const wrapperClasses = {
      'c-checkbox': true,
      'c-checkbox--disabled': this.disabled,
      'c-checkbox--error': this.messageOptions.type === 'error',
    };
    const labelClasses = {
      'c-checkbox__label': true,
      'c-checkbox__label--intermediate': this.intermediate,
    };
    return (h(Host, null, h("div", { class: wrapperClasses }, h("input", { class: "visuallyhidden", id: "checkbox", type: "checkbox", "aria-checked": (!!this.value).toString(), "aria-disabled": this.disabled.toString(), checked: this.value, disabled: this.disabled, onChange: (event) => this.toggleState(event) }), h("label", { class: labelClasses, htmlFor: "checkbox" }, h("div", { class: "ripple", ref: (el) => (this._container = el) }, h("svg", { viewBox: "0 0 100 100" }, !this.intermediate && !!this.value && (h("path", { class: "path", d: "M 12 52 l 24 24 l 47 -47 l -3 -3 l -44 44 l -21 -21 l -3 3" })), this.intermediate && (h("path", { class: "path", d: "M20 56 h60 v-8 h-60 z" })))), h("div", { class: "c-checkbox__label-content" }, !!this.label ? this.label : h("slot", null), this.required && h("span", { class: "required" }, "\u00A0*")))), this._renderMessages()));
  }
  static get watchers() { return {
    "validation": ["onValidationMessageChange"],
    "valid": ["onValidChange"]
  }; }
  static get style() { return cCheckboxCss; }
}, [1, "c-checkbox", {
    "disabled": [4],
    "hideDetails": [4, "hide-details"],
    "hint": [1],
    "intermediate": [4],
    "label": [1],
    "required": [4],
    "valid": [4],
    "validation": [1],
    "value": [1028],
    "messageOptions": [32]
  }, [[1, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "c-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CCheckbox);
      }
      break;
  } });
}

export { CCheckbox as C, defineCustomElement as d };

//# sourceMappingURL=c-checkbox2.js.map