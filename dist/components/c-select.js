import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as mdiChevronDown } from './mdi.js';
import { d as defineCustomElement$2 } from './c-input2.js';
import { v as v4 } from './v4.js';

const ClickOutsideOptionsDefaults = {
    triggerEvents: "click",
    exclude: ""
};
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
function registerClickOutside(component, element, callback, opt = ClickOutsideOptionsDefaults) {
    const excludedNodes = getExcludedNodes(opt);
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.addEventListener(triggerEvent, (e) => {
            initClickOutside(e, component, element, callback, excludedNodes);
        }, false);
    });
}
function initClickOutside(event, component, element, callback, excludedNodes) {
    const target = event.target;
    if (!element.contains(target) && !isExcluded(target, excludedNodes)) {
        callback.call(component);
    }
}
function getTriggerEvents(opt) {
    if (opt.triggerEvents) {
        return opt.triggerEvents.split(",").map(e => e.trim());
    }
    return ["click"];
}
function getExcludedNodes(opt) {
    if (opt.exclude) {
        try {
            return Array.from(document.querySelectorAll(opt.exclude));
        }
        catch (err) {
            console.warn(`@ClickOutside: Exclude: '${opt.exclude}' will not be evaluated. Check your exclude selector syntax.`, err);
        }
    }
    return;
}
function isExcluded(target, excudedNodes) {
    if (target && excudedNodes) {
        for (let excludedNode of excudedNodes) {
            if (excludedNode.contains(target)) {
                return true;
            }
        }
    }
    return false;
}

const cInputMenuCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;cursor:text}.c-input-menu__chevron{fill:currentColor;height:22px;width:22px;min-width:22px;transform:rotate(0deg);transition:transform 0.3s ease-in-out}.c-input-menu__chevron--active{transform:rotate(180deg)}.c-input-menu__input{width:100%;display:flex}.c-input-menu__item-wrapper{position:absolute;width:100%;top:44px;z-index:10;margin-left:calc(var(--c-label-position) * -1)}.c-input-menu__item-wrapper--shadow{top:47px}.c-input-menu__items{position:absolute;background-color:#ffffff;min-width:calc(100% + 24px);box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2);z-index:10;user-select:none;border-radius:4px;margin:0 -12px;overflow-y:scroll;list-style:none;padding:0}.c-input-menu__items--hidden{display:none}.c-input-menu__items li{cursor:pointer;display:flex;height:48px;padding:0 12px;transition:background-color 0.3s;font-size:14px;align-items:center;justify-content:flex-start;color:rgba(0, 0, 0, 0.87)}.c-input-menu__items li.dense{padding:10px 14px}.c-input-menu__items li:hover{background-color:var(--csc-primary-text-hover)}.c-input-menu__items li[aria-selected=true]{background-color:var(--csc-primary-text-hover)}.c-input-menu__items li.none{color:rgba(0, 0, 0, 0.5)}.c-input-menu__items--empty li{color:rgba(0, 0, 0, 0.54);cursor:default;gap:8px;pointer-events:none}.c-input-menu__items--empty li svg{fill:currentColor;height:18px;width:18px}input{max-height:32px;padding:8px 0 8px;background-color:transparent;border:none;color:rgba(0, 0, 0, 0.87);flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;line-height:20px;max-width:100%;min-width:0;width:100%;pointer-events:none}input:focus,input:active{outline:none}input::-ms-reveal{display:none}svg{fill:currentColor;height:22px;width:22px}.c-input--disabled{color:var(--csc-mid-grey)}.c-input:focus-within{color:var(--csc-primary)}.c-input--error{color:var(--csc-error)}.c-input--error:focus-within{color:var(--csc-error)}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CSelect$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this._itemRefs = [];
    this._outerWrapperClasses = ['outer-wrapper'];
    this._uniqueId = v4();
    this._validationClasses = ['validation-message'];
    this._debounce = null;
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
          });
          observer.unobserve(entry.target);
        }
        else {
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });
    this._lastKeyPressTime = null;
    this._searchString = '';
    this._blurred = false;
    this._getListItem = (item, index) => {
      const isActive = this.items[this.currentIndex] === item;
      const classes = {
        none: item.value === null,
      };
      let itemId = 'none';
      if (typeof (item === null || item === void 0 ? void 0 : item.value) === 'string') {
        itemId = item.value.replace(/[^a-zA-Z0-9-_]/g, '');
      }
      itemId = `item_${this._id}--${itemId}`;
      const a11y = {
        role: 'option',
        'aria-posinset': (index + 1).toString(),
        'aria-setsize': this.items.length.toString(),
      };
      if (isActive) {
        a11y['aria-selected'] = 'true';
      }
      return (h("li", Object.assign({}, a11y, { id: itemId, ref: (el) => this._itemRefs.push({ value: item.value, ref: el }), class: classes, onClick: (event) => this._select(event, item) }), item.name));
    };
    this.autofocus = false;
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.label = undefined;
    this.shadow = false;
    this.name = undefined;
    this.required = false;
    this.returnValue = undefined;
    this.valid = true;
    this.validate = false;
    this.validateOnBlur = false;
    this.validation = 'Required field';
    this.itemsPerPage = 6;
    this.placeholder = '';
    this.value = null;
    this.items = [];
    this.menuVisible = false;
    this.currentIndex = null;
    this.activeListItemId = null;
    this.statusText = '';
    this.previousValue = { value: '', name: '' };
  }
  validateChange(newValue) {
    if (newValue) {
      this._runValidate();
    }
  }
  onCurrentIndexChange(index) {
    var _a, _b, _c;
    const items = Array.from(((_a = this._listElement) === null || _a === void 0 ? void 0 : _a.children) || []);
    this.activeListItemId = (_c = (_b = items[index]) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : null;
    this._updateStatusText();
  }
  _valueChangedHandler(item) {
    function isItem(element) {
      return element.value === (item === null || item === void 0 ? void 0 : item.value);
    }
    this.currentIndex = this.items.findIndex(isItem);
    const value = this.returnValue
      ? item === null || item === void 0 ? void 0 : item.value
      : {
        name: item === null || item === void 0 ? void 0 : item.name,
        value: item === null || item === void 0 ? void 0 : item.value,
      };
    if (this.previousValue.value === (item === null || item === void 0 ? void 0 : item.value))
      return;
    this.previousValue = item;
    this.changeValue.emit(value);
  }
  _getLabel() {
    var _a, _b, _c;
    if (this.returnValue &&
      ['number', 'string', 'boolean'].includes(typeof this.value)) {
      return (_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.find((item) => item.value === this.value)) === null || _b === void 0 ? void 0 : _b.name;
    }
    return (_c = this.value) === null || _c === void 0 ? void 0 : _c.name;
  }
  _scrollToElement() {
    var _a;
    if (this.items.length > this.itemsPerPage) {
      const itemRef = (_a = this._itemRefs.find((item) => item.value === this.items[this.currentIndex].value)) === null || _a === void 0 ? void 0 : _a.ref;
      if (!!itemRef) {
        this._observer.observe(itemRef);
      }
    }
  }
  handleKeyDown(ev) {
    if (this.disabled)
      return;
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (ev.key.match(letterNumber) && ev.key.length === 1) {
      if (Date.now() - this._lastKeyPressTime > 3000 ||
        this._searchString.length > 2) {
        this._searchString = ev.key;
      }
      else {
        this._searchString = `${this._searchString}${ev.key}`;
      }
      this._lastKeyPressTime = Date.now();
      const selectedItem = this.items.find((i) => i.name.toLowerCase().startsWith(this._searchString));
      function isItem(element) {
        return element === selectedItem;
      }
      if (selectedItem) {
        if (this.menuVisible) {
          this.currentIndex = this.items.findIndex(isItem);
          this._scrollToElement();
        }
        else {
          this.value = selectedItem;
          this._valueChangedHandler(selectedItem);
        }
      }
    }
    if (ev.key === 'Home' && this.menuVisible) {
      ev.preventDefault();
      this.currentIndex = 0;
    }
    if (ev.key === 'End' && this.menuVisible) {
      ev.preventDefault();
      this.currentIndex = this.items.length - 1;
    }
    if (ev.key === 'Tab') {
      this.menuVisible = false;
    }
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      this.menuVisible = true;
      if (this.currentIndex === null) {
        this.currentIndex = 0;
      }
      else if (this.currentIndex + 1 < this.items.length) {
        this.currentIndex += 1;
      }
    }
    if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      this.menuVisible = true;
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
      else if (this.currentIndex === null) {
        this.currentIndex = this.items.length - 1;
      }
    }
    if (ev.key === ' ') {
      if (!this.menuVisible) {
        this.menuVisible = true;
      }
    }
    if (ev.key === 'Escape') {
      const input = this.host.shadowRoot.querySelector('input');
      if (this.menuVisible) {
        this.menuVisible = false;
        input.focus();
      }
    }
    if (ev.key === 'Enter') {
      this.menuVisible = !this.menuVisible;
      if (this.currentIndex !== null) {
        this._selectItem();
      }
    }
  }
  componentWillLoad() {
    var _a, _b;
    this._id = (_b = (_a = this.hostId) === null || _a === void 0 ? void 0 : _a.replace(/[^a-zA-Z0-9-_]/g, '')) !== null && _b !== void 0 ? _b : this._uniqueId;
    this._inputId =
      'input_' +
        (this.hostId || this.label || this.placeholder).replace(/[^a-zA-Z0-9-_]/g, '');
  }
  componentDidLoad() {
    if ((this.value || typeof this.value === 'boolean') &&
      !this.currentIndex &&
      this.currentIndex !== 0) {
      this.currentIndex = this.items.findIndex((item) => item.value === this.value);
    }
  }
  disconnectedCallback() {
    this._observer.disconnect();
  }
  _selectItem() {
    const selectedItem = this.items[this.currentIndex];
    this.value = selectedItem;
    this._valueChangedHandler(selectedItem);
    this._scrollToElement();
  }
  _showMenu() {
    if (this.disabled)
      return;
    this._inputElement.focus();
    setTimeout(() => {
      this.menuVisible = true;
    }, 0);
  }
  _hideMenu() {
    this.menuVisible = false;
    this._blurred = true;
  }
  _select(event, item) {
    event.preventDefault();
    event.stopPropagation();
    this.value = item;
    this._valueChangedHandler(item);
    this.menuVisible = false;
  }
  _runValidate() {
    if (this.required &&
      !this.value &&
      (this._blurred || !this.validateOnBlur)) {
      this._outerWrapperClasses.push('required');
      this._validationClasses.push('show');
    }
    else {
      this._outerWrapperClasses = this._outerWrapperClasses.filter((c) => c !== 'required');
      this._validationClasses = this._validationClasses.filter((c) => c !== 'show');
    }
  }
  _renderChevron() {
    const classes = {
      'c-input-menu__chevron': true,
      'c-input-menu__chevron--active': this.menuVisible,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24" }, h("path", { d: mdiChevronDown })));
  }
  _renderInputElement() {
    var _a, _b;
    return (h("div", { class: "c-input-menu__input", onClick: () => this._showMenu() }, h("input", { "aria-controls": 'results_' + this._id, "aria-readonly": "true", "aria-haspopup": "listbox", id: this._inputId, ref: (el) => (this._inputElement = el), autocomplete: "off", class: "c-input__input", type: "text", value: (_a = this._getLabel()) !== null && _a !== void 0 ? _a : null, name: (_b = this.name) !== null && _b !== void 0 ? _b : null, readonly: "true" })));
  }
  _renderMenu(style) {
    return (h("div", { class: {
        'c-input-menu__item-wrapper': true,
        'c-input-menu__item-wrapper--shadow': this.shadow,
      } }, h("ul", { id: 'results_' + this._id, "aria-activedescendant": this.activeListItemId, "aria-expanded": this.menuVisible.toString(), style: style, title: this.label || this.placeholder, class: this.menuVisible
        ? 'c-input-menu__items'
        : 'c-input-menu__items c-input-menu__items--hidden', role: "listbox", ref: (el) => (this._listElement = el) }, this.items.map((item, index) => this._getListItem(item, index)))));
  }
  _updateStatusText() {
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = window.setTimeout(() => {
      const ending = !!this.items.length
        ? ', to navigate use up and down arrows'
        : '';
      const selection = this.host.shadowRoot.querySelector('li[aria-selected="true"]');
      const selectionText = !!selection
        ? `${selection.innerHTML} ${selection.ariaPosInSet} of ${selection.ariaSetSize} is highlighted`
        : null;
      this.statusText = `${selectionText || ending}`;
      this._debounce = null;
    }, 1400);
  }
  render() {
    let itemsPerPageStyle = {};
    if (this.itemsPerPage &&
      this.itemsPerPage > 0 &&
      this.items.length > this.itemsPerPage) {
      itemsPerPageStyle = {
        'max-height': 48 * this.itemsPerPage + 'px',
        'overflow-y': 'scroll',
      };
    }
    return (h(Host, { ref: (el) => registerClickOutside(this, el, () => this._hideMenu()) }, h("div", { id: 'announce-' + this._id, class: "visuallyhidden", "aria-live": "polite", "aria-atomic": "true" }, this.statusText), h("c-input", { autofocus: this.autofocus, disabled: this.disabled, "hide-details": this.hideDetails, hint: this.hint, id: this.hostId, "input-id": this._inputId, label: this.label, name: this.name, placeholder: this.placeholder, required: this.required, shadow: this.shadow, valid: this.valid, validate: this.validate, "validate-on-blur": this.validateOnBlur, validation: this.validation, value: this.value, variant: "select" }, h("slot", { name: "pre", slot: "pre" }), h("div", { class: "c-input__content" }, this._renderInputElement(), this._renderMenu(itemsPerPageStyle), this._renderChevron()), h("slot", { name: "post", slot: "post" })), h("slot", null)));
  }
  get host() { return this; }
  static get watchers() { return {
    "validate": ["validateChange"],
    "currentIndex": ["onCurrentIndexChange"]
  }; }
  static get style() { return cInputMenuCss; }
}, [1, "c-select", {
    "autofocus": [4],
    "disabled": [4],
    "hideDetails": [4, "hide-details"],
    "hint": [1],
    "hostId": [1, "id"],
    "label": [1],
    "shadow": [4],
    "name": [1],
    "required": [4],
    "returnValue": [4, "return-value"],
    "valid": [4],
    "validate": [4],
    "validateOnBlur": [4, "validate-on-blur"],
    "validation": [1],
    "itemsPerPage": [2, "items-per-page"],
    "placeholder": [1],
    "value": [1032],
    "items": [16],
    "menuVisible": [32],
    "currentIndex": [32],
    "activeListItemId": [32],
    "statusText": [32],
    "previousValue": [32]
  }, [[2, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-select", "c-input"];
  components.forEach(tagName => { switch (tagName) {
    case "c-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CSelect$1);
      }
      break;
    case "c-input":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CSelect = CSelect$1;
const defineCustomElement = defineCustomElement$1;

export { CSelect, defineCustomElement };

//# sourceMappingURL=c-select.js.map