import { r as registerInstance, c as createEvent, h, H as Host } from './index-aa797944.js';
import { i as mdiCloseCircle, n as mdiChevronLeft, g as mdiChevronRight, u as mdiDotsHorizontal } from './mdi-2e92fd6e.js';
import { c as createRipple } from './utils-72e074b9.js';

const cCheckboxCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-checkbox{--c-checkbox-color:var(--csc-primary);position:relative;width:fit-content}.c-checkbox__details{line-height:1;padding:0 12px}.c-checkbox__details.active .c-checkbox__message{opacity:1;transform:translateY(0px)}.c-checkbox__message{font-size:12px;opacity:0;transform:translateY(-4px);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-checkbox__message--hint{color:var(--csc-mid-grey)}.c-checkbox__message--error{color:var(--csc-error)}.c-checkbox__message span{align-items:flex-start;color:currentColor;display:flex;gap:4px;height:16px}.c-checkbox__message svg{fill:currentColor;min-height:16px;min-width:16px;position:relative;top:-2px}.c-checkbox__label-content{padding-top:10px;text-align:left;user-select:none}.c-checkbox__label-content span.required{color:var(--csc-error)}.c-checkbox--disabled{--c-checkbox-color:var(--csc-mid-grey);--csc-error:var(--c-checkbox-color);color:var(--c-checkbox-color);opacity:0.75}.c-checkbox--disabled .c-checkbox__label{cursor:default}.c-checkbox--error{--c-checkbox-color:var(--csc-error);color:var(--csc-error)}.c-checkbox input:focus{outline:none}.c-checkbox input:focus+.c-checkbox__label .ripple{outline:2px var(--c-checkbox-color) solid}@supports selector(:focus-visible){.c-checkbox input:focus+.c-checkbox__label .ripple{outline:none}}.c-checkbox input:focus-visible+.c-checkbox__label .ripple{outline:2px var(--c-checkbox-color) solid}.c-checkbox:not(.c-checkbox--disabled) .ripple:hover{background-color:var(--csc-primary-text-hover)}.c-checkbox .visuallyhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;width:1px}.c-checkbox input:checked+.c-checkbox__label:before{background:var(--c-checkbox-color);border-color:var(--c-checkbox-color)}.c-checkbox input:checked+.c-checkbox__label .path{stroke:#fff;fill:#fff;stroke-dashoffset:0;stroke-width:13;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.c-checkbox__label{cursor:pointer;display:flex;gap:4px;position:relative;user-select:none}.c-checkbox__label:before{border-radius:2px;border:2px solid var(--c-checkbox-color);content:\"\";display:inline-block;height:18px;left:12px;position:absolute;top:12px;transition:all 0.25s ease-out;vertical-align:middle;width:18px}.c-checkbox__label svg{height:14px;left:14px;position:absolute;top:14px;width:14px}.c-checkbox__label--intermediate .path{stroke-dasharray:0 !important;stroke-dashoffset:0 !important;stroke:transparent}.c-checkbox__label .ripple{border-radius:50%;color:var(--c-checkbox-color);display:grid;height:42px;min-width:42px;overflow:hidden;place-content:center;position:relative;transform:translateZ(0);width:42px}";

const CCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
CCheckbox.style = cCheckboxCss;

const cPaginationCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block}span{font-size:14px;text-align:right;white-space:nowrap}.range{min-width:132px}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-pagination{align-items:center;display:flex;flex-wrap:wrap;gap:0 24px;justify-content:center}.c-pagination ul{align-items:center;display:flex;gap:4px;justify-content:center;list-style:none;margin:0;padding:0}.c-pagination--simple ul{flex:1;justify-content:flex-end}.c-pagination--small ul{gap:2px}.c-pagination__details{align-items:center;display:flex;flex-wrap:wrap;flex:auto;justify-content:space-between}";

const CPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
    this._textContent = {
      itemsPerPageText: 'Items per page:',
      nextPage: 'Next page',
      prevPage: 'Previous page',
    };
    this._buttons = [];
    this._increasePageNumber = () => {
      if (this._currentPage < this._getTotalPages()) {
        this._currentPage += 1;
        this._valueChangeHandler();
      }
    };
    this._decreasePageNumber = () => {
      if (this._currentPage > 1) {
        this._currentPage -= 1;
        this._valueChangeHandler();
      }
    };
    this.value = undefined;
    this.hideDetails = false;
    this.simple = false;
    this.size = 'default';
    this._currentPage = undefined;
    this._itemsPerPage = undefined;
    this._totalVisible = undefined;
    this.hideRange = false;
    this.itemsPerPageOptions = [5, 25, 50, 100];
    this.tick = '';
  }
  valueHandler(value, oldValue) {
    if (this._isEqual(value, oldValue))
      return;
    this._setRange();
  }
  _isEqual(options1, options2) {
    const keys1 = Object.keys(options1 || {});
    const keys2 = Object.keys(options2 || {});
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (options1[key] !== options2[key]) {
        return false;
      }
    }
    return true;
  }
  componentDidLoad() {
    this._setRange();
  }
  _getText(key) {
    var _a;
    const source = ((_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a[key])
      ? this.value.textOverrides
      : this._textContent;
    return source[key];
  }
  _setRange() {
    this._currentPage = this.value.currentPage || 1;
    this._itemsPerPage = this.value.itemsPerPage || 25;
    this._totalVisible = this.value.totalVisible || 7;
    this.value.startFrom =
      this._currentPage * this._itemsPerPage - this._itemsPerPage;
    this.value.endTo = this._currentPage * this._itemsPerPage - 1;
    this.changeValue.emit(this.value);
  }
  _valueChangeHandler() {
    this.value.currentPage = this._currentPage;
    this.value.itemsPerPage = this._itemsPerPage;
    this._setRange();
  }
  _getItemsPerPage() {
    const itemsPerPageOptions = this.itemsPerPageOptions.map((i) => ({
      name: i.toString(),
      action: () => {
        this._itemsPerPage = i;
        this._currentPage = 1;
        this._valueChangeHandler();
      },
    }));
    const onMenuClick = (event) => {
      event.stopPropagation();
    };
    return (h("c-menu", { items: itemsPerPageOptions, nohover: true, onClick: onMenuClick }, h("div", null, h("span", { class: "items-per-page" }, this._getText('itemsPerPageText'), " ", this._itemsPerPage))));
  }
  _getTotalPages() {
    return Math.ceil(this.value.itemCount / this._itemsPerPage);
  }
  _setPage(number) {
    this._currentPage = number;
    this._valueChangeHandler();
  }
  _getRange() {
    var _a;
    if (this.hideRange)
      return;
    const end = Math.min(this._currentPage * this._itemsPerPage, this.value.itemCount);
    const start = this.value.startFrom + 1;
    const pageTextOverride = (_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a.pageText;
    let parsedPageTextOverride;
    if (pageTextOverride) {
      parsedPageTextOverride = pageTextOverride({
        start: start,
        end: end,
        count: this.value.itemCount,
      });
    }
    return pageTextOverride
      ? parsedPageTextOverride
      : `${start} - ${end} of ${this.value.itemCount} items`;
  }
  _getArrowLeft(size) {
    return (h("li", null, h("c-icon-button", { "aria-disabled": this.value.currentPage <= 1 ? 'true' : 'false', "aria-label": `${this._getText('prevPage')}`, disabled: this.value.currentPage <= 1, size: size, text: true, onClick: this._decreasePageNumber }, h("span", { class: "visuallyhidden" }, this._getText('prevPage')), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronLeft })))));
  }
  _getArrowRight(size) {
    return (h("li", null, h("c-icon-button", { "aria-disabled": this.value.currentPage >= this._getTotalPages() ? 'true' : 'false', "aria-label": `${this._getText('nextPage')}`, disabled: this.value.currentPage >= this._getTotalPages(), size: size, text: true, onClick: this._increasePageNumber }, h("span", { class: "visuallyhidden" }, this._getText('nextPage')), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronRight })))));
  }
  _button(number, size) {
    var _a;
    const params = {
      text: this._currentPage !== number,
      onClick: () => this._setPage(number),
      size,
    };
    if (this._currentPage === number) {
      params['aria-current'] = 'page';
    }
    const pageOfTextOverride = (_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a.pageOfText;
    let parsedPageOfTextOverride;
    if (pageOfTextOverride) {
      parsedPageOfTextOverride = pageOfTextOverride({
        pageNumber: number,
        count: this._getTotalPages(),
      });
    }
    return (h("li", null, h("c-icon-button", Object.assign({}, params), h("span", { "aria-label": pageOfTextOverride
        ? parsedPageOfTextOverride
        : `page ${number} of ${this._getTotalPages()}` }, number))));
  }
  _addButton(number, size) {
    this._buttons.push(this._button(number, size));
  }
  _addSeparator(size) {
    this._buttons.push(h("li", null, h("c-icon-button", { "aria-disabled": "true", size: size, tabindex: "-1", role: "separator", disabled: true, text: true }, h("svg", { width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: mdiDotsHorizontal })))));
  }
  _addButtons(buttonStart, buttonCount, size) {
    if (buttonStart > 1) {
      this._addButton(1, size);
      this._addSeparator(size);
    }
    for (let index = 1; index < buttonCount; index++) {
      this._addButton(buttonStart + index, size);
    }
    const allPagesVisible = this._getTotalPages() <= this._totalVisible;
    if ((this._currentPage < this._totalVisible - 1 ||
      this._currentPage < this._getTotalPages() - this._totalVisible + 4) &&
      !allPagesVisible) {
      this._addSeparator(size);
    }
  }
  _getPageButtons(size) {
    this._buttons = [];
    let buttonStart = 0;
    let buttonCount = this._getTotalPages() + 1;
    const morePagesThanVisible = this._getTotalPages() > this._totalVisible;
    if (morePagesThanVisible) {
      if (this._currentPage < this._totalVisible - 2) {
        buttonCount = this._totalVisible - 1;
      }
      else if (this._currentPage <
        this._getTotalPages() - this._totalVisible + 4) {
        buttonStart = Math.ceil(this._currentPage - this._totalVisible / 2) + 1;
        buttonCount = this._totalVisible - 3;
      }
      else {
        buttonStart = this._getTotalPages() - this._totalVisible + 2;
        buttonCount = this._totalVisible - 2;
      }
    }
    this._addButtons(buttonStart, buttonCount, size);
    if (morePagesThanVisible) {
      this._buttons.push(this._button(this._getTotalPages(), size));
    }
    return this._buttons;
  }
  render() {
    const classes = {
      'c-pagination': true,
      'c-pagination--small': this.size === 'small',
      'c-pagination--simple': this.simple,
    };
    const buttonsize = this.size === 'small' ? 'x-small' : 'small';
    return (h("nav", { class: classes, role: "navigation", "aria-label": "pagination" }, !this.hideDetails && (h("div", { class: "c-pagination__details" }, this._getItemsPerPage(), h("span", { class: { range: !this.simple } }, this._getRange()))), h("ul", null, this._getArrowLeft(buttonsize), !this.simple && this._getPageButtons(buttonsize), this._getArrowRight(buttonsize))));
  }
  static get watchers() { return {
    "value": ["valueHandler"]
  }; }
};
CPagination.style = cPaginationCss;

export { CCheckbox as c_checkbox, CPagination as c_pagination };

//# sourceMappingURL=c-checkbox_2.entry.js.map