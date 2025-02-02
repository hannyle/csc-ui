'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');
const mdi = require('./mdi-a24967a4.js');

const cInputCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;cursor:text}:host([disabled]) ::slotted(input),:host([disabled]) ::slotted(textarea){color:rgba(0, 0, 0, 0.5)}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-input{--c-input-border-width:1px;align-items:flex-start;display:flex;flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;letter-spacing:normal;max-width:100%;text-align:left;border-radius:4px}.c-input input,.c-input select,.c-input textarea{margin:0;border:0;padding:0;display:inline-block;vertical-align:middle;white-space:normal;background:none;line-height:1;font-size:16px;font-family:\"museo-sans\", sans-serif}.c-input input,.c-input textarea{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}.c-input input[type=checkbox],.c-input input[type=radio],.c-input select{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.c-input input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}.c-input ::-webkit-search-decoration{display:none}.c-input textarea{vertical-align:top;overflow:auto}.c-input input{max-height:32px;padding:8px 0 8px}.c-input textarea{margin-top:4px;min-height:44px;padding:8px 12px 8px 0;resize:vertical}.c-input input,.c-input textarea{background-color:transparent;border:none;color:rgba(0, 0, 0, 0.87);flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;line-height:20px;max-width:100%;min-width:0;width:100%}.c-input input:focus,.c-input input:active,.c-input textarea:focus,.c-input textarea:active{outline:none}.c-input .c-input__content{align-items:center;display:flex;width:100%}.c-input__control{border-radius:inherit;color:currentColor;display:flex;flex-direction:column;flex-grow:1;flex-wrap:wrap;gap:8px;height:auto;min-width:0;width:100%}.c-input__slot{align-items:stretch;background:transparent;border-radius:inherit;color:inherit;cursor:text;display:flex;min-height:44px;padding:0 12px;position:relative;transition:0.3s cubic-bezier(0.25, 0.8, 0.5, 1);width:100%}.c-input__slot .click-trap{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(128, 255, 0, 0.295)}.c-input__field{align-items:center;display:flex;flex:1 1 auto;gap:8px;position:relative}.c-input__field input,.c-input__field textarea{flex:1;outline:0}.c-input__field label{font-size:16px;height:20px;left:0px;letter-spacing:normal;line-height:20px;max-width:90%;min-height:8px;overflow:hidden;pointer-events:none;position:absolute;right:auto;text-overflow:ellipsis;top:12px;transform-origin:top left;transform:translateX(var(--c-label-position)) translateY(0) scale(1);transition:0.3s cubic-bezier(0.25, 0.8, 0.5, 1);white-space:nowrap}.c-input__field label.active{transform:translateY(-18px) scale(0.75)}.c-input__field label span{color:var(--csc-error)}.c-input__details{line-height:1;padding:0 12px}.c-input__details.active .c-input__message{opacity:1;transform:translateY(0px)}.c-input__message{font-size:12px;min-height:16px;opacity:0;transform:translateY(-4px);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-input__message--hint{color:var(--csc-mid-grey)}.c-input__message--error{color:var(--csc-error)}.c-input__message span{align-items:flex-start;color:currentColor;display:flex;gap:4px;min-height:16px}.c-input__message svg{fill:currentColor;height:16px;width:16px;position:relative;top:-2px}.c-input--select .c-input__slot{cursor:pointer}.c-input fieldset{border-collapse:collapse;border-color:currentColor;border-radius:inherit;border-style:solid;border-width:var(--c-input-border-width);bottom:0;left:0;margin:0;padding-left:8px;padding:0;pointer-events:none;position:absolute;right:0;top:0;transition-duration:0.15s;transition-property:color;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1)}.c-input fieldset legend{float:none;line-height:11px;margin-left:7px;padding:0;text-align:left;transition:width 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);width:0}.c-input fieldset legend.active{width:var(--c-legend-width)}.c-input--shadow .c-input__slot{background:#fff;box-shadow:rgba(0, 0, 0, 0.15) 0px 5px 15px 0px}.c-input--shadow .c-input__slot:focus-within{outline:2px var(--csc-primary) solid}.c-input--disabled input,.c-input--disabled textarea,.c-input--disabled fieldset,.c-input--disabled label{--csc-error:rgba(0, 0, 0, 0.5);color:rgba(0, 0, 0, 0.5)}.c-input--textarea .c-input__field{margin-right:-12px}.c-input ::placeholder{color:rgba(0, 0, 0, 0.46);opacity:1}.c-input:focus-within,.c-input:not(.c-input--disabled):active{--c-input-border-width:2px;color:var(--csc-primary)}.c-input:focus-within label,.c-input:not(.c-input--disabled):active label{transform:translateX(0px) translateY(-18px) scale(0.75)}.c-input:focus-within legend,.c-input:not(.c-input--disabled):active legend{width:var(--c-legend-width)}.c-input--error{color:var(--csc-error)}.c-input--error:focus-within{color:var(--csc-error)}";

const CInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.changeValue = index.createEvent(this, "changeValue", 3);
    this._hasBlurred = false;
    this._validationIcon = (index.h("svg", { height: "16px", width: "16px", viewBox: "0 0 24 24" }, index.h("path", { d: mdi.mdiCloseCircle })));
    this._debounce = null;
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._calculateElementWidths();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });
    this._onBlur = () => {
      setTimeout(() => {
        this.isFocused = false;
        this._hasBlurred = true;
        if (this.validateOnBlur) {
          this._handleValidation(this.valid);
        }
        this._onReset();
      }, 100);
    };
    this._onFocus = (click = true) => {
      var _a, _b;
      if (this.disabled)
        return;
      this.isFocused = true;
      (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.focus();
      if (click)
        (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.click();
      if (this.inputField) {
        this.inputField.placeholder =
          !!this.value || !this.placeholder ? '' : this.placeholder;
      }
    };
    this.autofocus = false;
    this.disabled = false;
    this.form = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.inputId = undefined;
    this.label = undefined;
    this.max = null;
    this.min = null;
    this.name = undefined;
    this.number = false;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.rows = 1;
    this.shadow = false;
    this.step = null;
    this.type = undefined;
    this.valid = true;
    this.validate = false;
    this.validateOnBlur = false;
    this.validation = 'Required field';
    this.value = undefined;
    this.variant = 'text';
    this.isFocused = false;
    this.labelWidth = 0;
    this.preSlotWidth = 0;
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
    this.statusText = '';
  }
  onValidChange(valid) {
    if (this.validateOnBlur && !this._hasBlurred)
      return;
    this._setAriaDescriptionId();
    this._handleValidation(valid);
  }
  onValidationMessageChange(message) {
    this._updateStatusText();
    if (this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (index.h("span", null, index.h("span", { class: "visuallyhidden" }, "Error: "), this._validationIcon, " ", message)) });
  }
  onHintMessageChange(message) {
    if (!this.valid || !message)
      return;
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { content: (index.h("span", null, index.h("span", { class: "visuallyhidden" }, "Hint: "), message)) });
  }
  onValueChange(value) {
    if (!value)
      this._onReset();
  }
  onPlaceholderChange(placeholder) {
    if (placeholder)
      this._onReset();
  }
  componentDidLoad() {
    var _a, _b, _c, _d;
    if (this.autofocus) {
      setTimeout(() => {
        this._onFocus(false);
      }, 500);
    }
    this._handleValidation(this.valid, 0);
    this._calculateElementWidths();
    this._setAriaDescriptionId();
    if (this.label) {
      this._observer.observe(this._labelRef);
    }
    (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.addEventListener('focus', () => this._onFocus(false));
    (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.addEventListener('blur', () => this._onBlur());
    (_c = this.inputField) === null || _c === void 0 ? void 0 : _c.addEventListener('keypress', this._preventNonNumericalInput);
    if (this.inputField) {
      this.inputField.placeholder =
        !!this.label || !this.placeholder ? '' : this.placeholder;
      this.inputField.title = (_d = this.label) !== null && _d !== void 0 ? _d : this.placeholder;
    }
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.inputField) === null || _a === void 0 ? void 0 : _a.removeEventListener('focus', () => this._onFocus(false));
    (_b = this.inputField) === null || _b === void 0 ? void 0 : _b.removeEventListener('blur', () => this._onBlur());
    (_c = this.inputField) === null || _c === void 0 ? void 0 : _c.removeEventListener('keypress', this._preventNonNumericalInput);
    this._observer.disconnect();
  }
  get isActive() {
    return !!this.value || typeof this.value === 'boolean' || this.isFocused;
  }
  _setAriaDescriptionId() {
    this.inputField.removeAttribute('aria-describedby');
    let type = null;
    if (this.valid && !this.value && this.hint) {
      type = 'hint';
    }
    if (!this.valid) {
      type = 'error';
    }
    if (type) {
      this.inputField.setAttribute('aria-describedby', `${type}-${this.inputId}`);
    }
  }
  _calculateElementWidths() {
    this.labelWidth = !!this.label ? this._labelRef.scrollWidth * 0.75 + 6 : 0;
    this.preSlotWidth = this.inputField.offsetLeft;
  }
  _handleValidation(valid, timeout = 200) {
    this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { show: false });
    setTimeout(() => {
      this.messageOptions = Object.assign(Object.assign({}, this.messageOptions), { type: valid ? 'hint' : 'error', show: true, content: valid ? (index.h("span", { id: `hint-${this.inputId}` }, index.h("span", { class: "visuallyhidden" }, "Hint: "), this.hint)) : (index.h("span", { id: `error-${this.inputId}` }, this._validationIcon, index.h("span", { class: "visuallyhidden" }, "Error: "), this.validation)) });
    }, timeout);
  }
  _onReset() {
    if (this.inputField) {
      this.inputField.placeholder =
        !this.label && !this.value && !!this.placeholder
          ? this.placeholder
          : '';
    }
  }
  _preventNonNumericalInput(event) {
    if (this.type !== 'number')
      return;
    if (!event.key.match(/^[0-9,\.]+$/))
      event.preventDefault();
  }
  _renderBorders() {
    if (this.shadow)
      return;
    const classes = {
      active: this.isActive,
    };
    return (index.h("fieldset", { "aria-hidden": "true" }, index.h("legend", { class: classes, style: {
        '--c-legend-width': this.labelWidth + 'px',
      } }, index.h("span", { class: "notranslate" }))));
  }
  _renderLabel() {
    if (!this.label)
      return;
    const classes = {
      active: this.isActive,
    };
    return (index.h("label", { htmlFor: this.inputId, ref: (el) => (this._labelRef = el), class: classes }, this.label, this.required && index.h("span", null, "\u00A0*")));
  }
  get inputField() {
    var _a;
    return (_a = this.hiddenEl) === null || _a === void 0 ? void 0 : _a.querySelector('.c-input__input');
  }
  _renderMessages() {
    if (this.hideDetails)
      return;
    const classes = {
      'c-input__details': true,
      active: this.messageOptions.show,
    };
    const messageClasses = {
      'c-input__message': true,
      [`c-input__message--${this.messageOptions.type}`]: true,
    };
    return (index.h("div", { class: classes }, index.h("div", { class: messageClasses }, this.messageOptions.content)));
  }
  _updateStatusText() {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = window.setTimeout(() => {
      this.statusText = this.valid ? '' : `Error: ${this.validation}`;
      this._debounce = null;
    }, 1400);
  }
  render() {
    const containerClasses = {
      'c-input': true,
      'c-input--disabled': this.disabled,
      'c-input--shadow': this.shadow,
      'c-input--textarea': this.rows > 1,
      'c-input--error': this.messageOptions.type === 'error',
      [`c-input--${this.variant}`]: true,
    };
    return (index.h(index.Host, { disabled: this.disabled }, index.h("div", { id: 'announce-' + this.inputId, class: "visuallyhidden", "aria-live": "polite", "aria-atomic": "true" }, this.statusText), index.h("div", { class: containerClasses }, index.h("div", { class: "c-input__control" }, index.h("div", { class: "c-input__slot", onClick: () => this._onFocus() }, this._renderBorders(), index.h("div", { class: "c-input__field", style: {
        '--c-label-position': this.preSlotWidth + 'px',
      } }, index.h("slot", { name: "pre" }), this._renderLabel(), index.h("slot", null), index.h("slot", { name: "post" }))), this._renderMessages()))));
  }
  get hiddenEl() { return index.getElement(this); }
  static get watchers() { return {
    "valid": ["onValidChange"],
    "validation": ["onValidationMessageChange"],
    "hint": ["onHintMessageChange"],
    "value": ["onValueChange"],
    "placeholder": ["onPlaceholderChange"]
  }; }
};
CInput.style = cInputCss;

exports.c_input = CInput;

//# sourceMappingURL=c-input.cjs.entry.js.map