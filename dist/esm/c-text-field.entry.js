import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-aa797944.js';
import { r as mdiEye, s as mdiEyeOff, t as mdiCalendar } from './mdi-2e92fd6e.js';
import { v as v4 } from './v4-929670b7.js';

const cTextFieldCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-input__password-toggle,.c-input__date-toggle{cursor:pointer;fill:currentColor;height:22px;width:22px}.c-input__password-toggle--disabled,.c-input__date-toggle--disabled{cursor:not-allowed;fill:rgba(0, 0, 0, 0.54)}.c-input input[type=date]{opacity:0}.c-input input[type=date]::-webkit-calendar-picker-indicator,.c-input input[type=date]::-webkit-inner-spin-button{display:none;appearance:none}.c-input input[type=date]:focus,.c-input input[type=date].c-input__input--filled{opacity:1}";

const CTextField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
    this._originalType = '';
    this._uniqueId = v4();
    this._handleChange = (event) => {
      this.value = this.trimWhitespace
        ? event.target.value.trim()
        : event.target.value;
      this.changeValue.emit(this.value);
    };
    this._handleBlur = (event) => {
      if (this.trimWhitespace) {
        const trimmedValue = event.target.value.trim();
        event.target.value = trimmedValue;
      }
    };
    this._togglePasswordVisibility = () => {
      if (this.disabled)
        return;
      this.type = this.type === 'password' ? 'text' : 'password';
    };
    this.autofocus = false;
    this.autocapitalize = '';
    this.autocorrect = '';
    this.autocomplete = '';
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.trimWhitespace = false;
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
    this.isFocused = false;
    this.labelWidth = 0;
    this.preSlotWidth = 0;
    this.messageOptions = {
      show: true,
      type: 'hint',
      content: '',
    };
  }
  componentWillLoad() {
    this._originalType = this.type;
    this._inputId = `${(this.hostId || this.label || this.placeholder).replace(/[^a-zA-Z0-9-_]/g, '')}_${this._uniqueId}`;
  }
  get isActive() {
    return !!this.value || this.isFocused;
  }
  get passwordIcon() {
    return this.type === 'password' ? mdiEye : mdiEyeOff;
  }
  _renderInputElement() {
    const props = {
      classes: {
        'c-input__input': true,
        'c-input__input--filled': !!this.value,
      },
      shared: {
        id: this._inputId,
        name: this.name,
        disabled: this.disabled,
        readonly: this.readonly,
        value: this.value,
        onInput: this._handleChange,
        onChange: this._handleChange,
        onBlur: this._handleBlur,
      },
      input: Object.assign(Object.assign(Object.assign({ type: this.number ? 'number' : this.type || 'text', min: this.min, max: this.max, step: this.step }, (!!this.autocomplete && { autocomplete: this.autocomplete })), (!!this.autocapitalize && { autocapitalize: this.autocapitalize })), (!!this.autocorrect && { autocorrect: this.autocorrect })),
      textArea: {
        rows: this.rows,
      },
    };
    const textInput = (h("input", Object.assign({ class: props.classes }, props.shared, props.input, { ref: (el) => (this._inputElement = el) })));
    const textArea = (h("textarea", Object.assign({ class: props.classes }, props.shared, props.textArea)));
    return this.rows > 1 ? textArea : textInput;
  }
  _isFirefox() {
    return !!navigator.userAgent.match(/firefox|fxios/i);
  }
  _renderDateToggle() {
    if (this._originalType !== 'date' || this._isFirefox())
      return;
    const classes = {
      'c-input__date-toggle': true,
      'c-input__date-toggle--disabled': this.disabled,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24", onClick: this._toggleDatepicker.bind(this) }, h("path", { d: mdiCalendar })));
  }
  _toggleDatepicker() {
    var _a;
    (_a = this._inputElement) === null || _a === void 0 ? void 0 : _a.showPicker();
  }
  _renderPasswordToggle() {
    if (this._originalType !== 'password')
      return;
    const classes = {
      'c-input__password-toggle': true,
      'c-input__password-toggle--disabled': this.disabled,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24", onClick: this._togglePasswordVisibility }, h("path", { d: this.passwordIcon })));
  }
  render() {
    return (h(Host, null, h("c-input", { autofocus: this.autofocus, disabled: this.disabled, "hide-details": this.hideDetails, hint: this.hint, id: this.hostId, "input-id": this._inputId, label: this.label, name: this.name, placeholder: this.placeholder, readonly: this.readonly, required: this.required, rows: this.rows, shadow: this.shadow, type: this.type, valid: this.valid, validate: this.validate, "validate-on-blur": this.validateOnBlur, validation: this.validation, value: this.value }, h("slot", { name: "pre", slot: "pre" }), this._renderInputElement(), this._renderPasswordToggle(), this._renderDateToggle(), h("slot", { name: "post", slot: "post" }))));
  }
  get hiddenEl() { return getElement(this); }
};
CTextField.style = cTextFieldCss;

export { CTextField as c_text_field };

//# sourceMappingURL=c-text-field.entry.js.map