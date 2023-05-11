import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-aa797944.js';
import { l as mdiChevronDown, h as mdiAlert } from './mdi-2e92fd6e.js';
import { v as v4 } from './v4-929670b7.js';

const cInputMenuCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;cursor:text}.c-input-menu__chevron{fill:currentColor;height:22px;width:22px;min-width:22px;transform:rotate(0deg);transition:transform 0.3s ease-in-out}.c-input-menu__chevron--active{transform:rotate(180deg)}.c-input-menu__input{width:100%;display:flex}.c-input-menu__item-wrapper{position:absolute;width:100%;top:44px;z-index:10;margin-left:calc(var(--c-label-position) * -1)}.c-input-menu__item-wrapper--shadow{top:47px}.c-input-menu__items{position:absolute;background-color:#ffffff;min-width:calc(100% + 24px);box-shadow:0 8px 16px 0 rgba(0, 0, 0, 0.2);z-index:10;user-select:none;border-radius:4px;margin:0 -12px;overflow-y:scroll;list-style:none;padding:0}.c-input-menu__items--hidden{display:none}.c-input-menu__items li{cursor:pointer;display:flex;height:48px;padding:0 12px;transition:background-color 0.3s;font-size:14px;align-items:center;justify-content:flex-start;color:rgba(0, 0, 0, 0.87)}.c-input-menu__items li.dense{padding:10px 14px}.c-input-menu__items li:hover{background-color:var(--csc-primary-text-hover)}.c-input-menu__items li[aria-selected=true]{background-color:var(--csc-primary-text-hover)}.c-input-menu__items li.none{color:rgba(0, 0, 0, 0.5)}.c-input-menu__items--empty li{color:rgba(0, 0, 0, 0.54);cursor:default;gap:8px;pointer-events:none}.c-input-menu__items--empty li svg{fill:currentColor;height:18px;width:18px}input{max-height:32px;padding:8px 0 8px;background-color:transparent;border:none;color:rgba(0, 0, 0, 0.87);flex:1 1 auto;font-family:\"museo-sans\", sans-serif;font-size:16px;line-height:20px;max-width:100%;min-width:0;width:100%;pointer-events:none}input:focus,input:active{outline:none}input::-ms-reveal{display:none}svg{fill:currentColor;height:22px;width:22px}.c-input--disabled{color:var(--csc-mid-grey)}.c-input:focus-within{color:var(--csc-primary)}.c-input--error{color:var(--csc-error)}.c-input--error:focus-within{color:var(--csc-error)}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CAutocomplete = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeQuery = createEvent(this, "changeQuery", 7);
    this.changeValue = createEvent(this, "changeValue", 3);
    this._itemRefs = [];
    this._uniqueId = v4();
    this._direction = null;
    this._debounce = null;
    this._observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.scrollIntoView({
            block: this._direction,
            inline: 'nearest',
          });
          observer.unobserve(entry.target);
        }
        else {
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 1 });
    this.autofocus = false;
    this.customMenu = false;
    this.disabled = false;
    this.hideDetails = false;
    this.hint = '';
    this.hostId = undefined;
    this.shadow = false;
    this.name = undefined;
    this.label = undefined;
    this.query = null;
    this.value = null;
    this.dense = undefined;
    this.required = false;
    this.valid = true;
    this.validate = false;
    this.validateOnBlur = false;
    this.validation = 'Required field';
    this.placeholder = '';
    this.returnValue = undefined;
    this.items = [];
    this.itemsPerPage = undefined;
    this.menuVisible = false;
    this.currentIndex = null;
    this.statusText = '';
  }
  async setValue(event, item) {
    this._select(event, item);
  }
  _valueChangedHandler(item) {
    function isItem(element) {
      return element === item;
    }
    this.currentIndex = this.items.findIndex(isItem);
    const value = this.returnValue ? item === null || item === void 0 ? void 0 : item.value : item;
    this.changeValue.emit(value);
  }
  watchHandler(newValue, oldValue) {
    if (newValue.length !== oldValue.length) {
      this.currentIndex = !!newValue.length ? 0 : null;
      this._updateStatusText();
    }
  }
  handleKeyDown(ev) {
    if (ev.key === 'Escape') {
      this.menuVisible = false;
      this.currentIndex = null;
      return;
    }
    if (ev.key === 'Tab') {
      this.menuVisible = false;
      const item = this.items[this.currentIndex];
      if (!item)
        return;
      const { name, value } = item;
      this.query = name;
      this.changeValue.emit(this.returnValue ? value : item);
    }
    if (ev.key === 'ArrowDown') {
      this._direction = 'end';
      ev.preventDefault();
      if (!this.menuVisible) {
        this.menuVisible = true;
        return;
      }
      if (this.currentIndex === null) {
        this.currentIndex = 0;
      }
      else if (this.currentIndex + 1 < this.items.length) {
        this.currentIndex += 1;
      }
      if (this.customMenu && this.currentIndex > 0) {
        const currentItem = this._getItemRef(this.currentIndex);
        const prevItem = this._getItemRef(this.currentIndex - 1);
        prevItem.toggleAttribute('aria-selected');
        currentItem.setAttribute('aria-selected', 'true');
      }
      this._scrollToElement();
    }
    if (ev.key === 'ArrowUp') {
      this._direction = 'start';
      ev.preventDefault();
      if (!this.menuVisible) {
        this.menuVisible = true;
        return;
      }
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
      else if (this.currentIndex === null) {
        this.currentIndex = this.items.length - 1;
      }
      if (this.customMenu && this.currentIndex >= 0) {
        const currentItem = this._getItemRef(this.currentIndex);
        const prevItem = this._getItemRef(this.currentIndex + 1);
        prevItem.toggleAttribute('aria-selected');
        currentItem.setAttribute('aria-selected', 'true');
      }
      this._scrollToElement();
    }
    if (ev.keyCode === 32) {
      if (!this.menuVisible) {
        this.menuVisible = true;
        ev.preventDefault();
      }
    }
    if (ev.key === 'Enter') {
      if (this.currentIndex !== null) {
        const selectedItem = this.items[this.currentIndex];
        this._select(ev, selectedItem);
        this.menuVisible = false;
      }
    }
  }
  _getItemRef(index) {
    var _a;
    const itemRef = (_a = this._itemRefs.find((item) => item.value === this.items[index].value)) === null || _a === void 0 ? void 0 : _a.ref;
    return itemRef;
  }
  _scrollToElement() {
    if (this.items.length > this.itemsPerPage) {
      const itemRef = this._getItemRef(this.currentIndex);
      if (!!itemRef) {
        this._observer.observe(itemRef);
      }
    }
    this._updateStatusText();
  }
  _updateStatusText() {
    this.statusText = this.query;
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = window.setTimeout(() => {
      const word = this.items.length === 1 ? 'suggestion' : 'suggestions';
      const ending = !!this.items.length
        ? ', to navigate use up and down arrows'
        : '.';
      const selection = this.host.shadowRoot.querySelector('li[aria-selected="true"]');
      const selectionText = !!selection
        ? `. ${selection.innerHTML} ${selection.ariaPosInSet} of ${selection.ariaSetSize} is highlighted`
        : null;
      this.statusText = `${this.items.length} ${word} found${selectionText || ending}`;
      this._debounce = null;
    }, 1400);
  }
  handleChange(event) {
    this.menuVisible = true;
    this.query = event.target.value;
    this.changeQuery.emit(this.query);
    this.changeValue.emit(null);
    if (!this.query.length) {
      this.statusText = '';
    }
  }
  _select(event, item) {
    event.preventDefault();
    event.stopPropagation();
    this.query = item.name;
    this.value = item;
    this._valueChangedHandler(item);
    this.menuVisible = false;
  }
  componentWillLoad() {
    var _a, _b;
    this._id = (_b = (_a = this.hostId) === null || _a === void 0 ? void 0 : _a.replace(/[^a-zA-Z0-9-_]/g, '')) !== null && _b !== void 0 ? _b : this._uniqueId;
    this._inputId =
      'input_' +
        (this.hostId || this.label || this.placeholder).replace(/[^a-zA-Z0-9-_]/g, '');
  }
  componentDidLoad() {
    window.addEventListener('click', (event) => {
      if (!event.target.matches('c-autocomplete')) {
        this.menuVisible = false;
        this.currentIndex = null;
      }
    });
  }
  disconnectedCallback() {
    this._observer.disconnect();
  }
  _getActiveListItemId() {
    return `option--${this._id}-${this.currentIndex}`;
  }
  _handleFocus(event) {
    const { value } = event.target;
    if (!!value) {
      this.menuVisible = true;
    }
    this.statusText = '';
    this._updateStatusText();
  }
  _renderChevron() {
    const classes = {
      'c-input-menu__chevron': true,
      'c-input-menu__chevron--active': this.menuVisible,
    };
    return (h("svg", { class: classes, viewBox: "0 0 24 24" }, h("path", { d: mdiChevronDown })));
  }
  _renderEmptyMenu() {
    return (h("ul", { class: "c-input-menu__items c-input-menu__items--empty" }, h("li", { tabindex: "-1" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: mdiAlert })), "No suggestions found")));
  }
  _renderCustomMenu(style) {
    if (this.currentIndex === 0 && this.menuVisible) {
      const selectedItem = document.querySelectorAll('div[aria-selected = "true"]');
      if (selectedItem.length === 1) {
        selectedItem[0].toggleAttribute('aria-selected');
      }
      const currentItem = this._getItemRef(this.currentIndex);
      currentItem.setAttribute('aria-selected', 'true');
    }
    return (h("div", { class: {
        'c-input-menu__item-wrapper': true,
        'c-input-menu__item-wrapper--shadow': this.shadow,
      } }, !!this.items.length && this.menuVisible && (h("div", { id: 'results_' + this._id, class: this.menuVisible
        ? 'c-input-menu__items'
        : 'c-input-menu__items c-input-menu__items--hidden', style: style }, h("slot", { name: "customMenu" }))), !this.items.length &&
      this.menuVisible &&
      this.query.length > 0 &&
      this._renderEmptyMenu()));
  }
  _renderMenu(style) {
    return (h("div", { class: {
        'c-input-menu__item-wrapper': true,
        'c-input-menu__item-wrapper--shadow': this.shadow,
      } }, !!this.items.length && (h("ul", { id: 'results_' + this._id, class: this.menuVisible
        ? 'c-input-menu__items'
        : 'c-input-menu__items c-input-menu__items--hidden', role: "listbox", style: style }, this.menuVisible &&
      this.items.map((item, index) => (h("li", { id: `option--${this._id}-${index}`, "aria-posinset": (index + 1).toString(), "aria-setsize": this.items.length.toString(), "aria-selected": (this.currentIndex === index).toString(), role: "option", tabindex: "-1", ref: (el) => {
          item.ref = el;
          this._itemRefs.push({
            value: item.value,
            ref: el,
          });
        }, onClick: (event) => this._select(event, item) }, item.name))))), !this.items.length && this.menuVisible && this._renderEmptyMenu()));
  }
  _renderInputElement() {
    var _a;
    return (h("div", { class: "c-input-menu__input" }, h("input", { type: "text", "aria-expanded": this.menuVisible.toString(), "aria-owns": 'results_' + this._id, "aria-autocomplete": "list", "aria-activedescendant": this._getActiveListItemId(), autocomplete: "off", class: "c-input__input", role: "combobox", value: this.query, name: (_a = this.name) !== null && _a !== void 0 ? _a : null, onInput: (event) => this.handleChange(event), onFocus: (event) => this._handleFocus(event) })));
  }
  render() {
    this._itemRefs = [];
    let itemsPerPageStyle = {};
    if (this.itemsPerPage &&
      this.itemsPerPage > 0 &&
      this.items.length > this.itemsPerPage) {
      itemsPerPageStyle = {
        'max-height': 48 * this.itemsPerPage + 'px',
      };
    }
    if (this.customMenu) {
      const slotContent = document.querySelectorAll('[slot="customMenu"]');
      for (let i = 0; i < this.items.length; i++) {
        this._itemRefs.push({
          value: this.items[i].value,
          ref: slotContent[i],
        });
      }
    }
    return (h(Host, null, h("div", { id: 'announce-' + this._id, class: "visuallyhidden", "aria-live": "polite", "aria-atomic": "true" }, this.statusText), h("c-input", { autofocus: this.autofocus, disabled: this.disabled, "hide-details": this.hideDetails, hint: this.hint, id: this.hostId, "input-id": this._inputId, label: this.label, name: this.name, placeholder: this.placeholder, required: this.required, shadow: this.shadow, valid: this.valid, validate: this.validate, "validate-on-blur": this.validateOnBlur, validation: this.validation, value: this.query }, h("slot", { name: "pre", slot: "pre" }), h("div", { class: "c-input__content" }, this._renderInputElement(), this.customMenu
      ? this._renderCustomMenu(itemsPerPageStyle)
      : this._renderMenu(itemsPerPageStyle), this._renderChevron()), h("slot", { name: "post", slot: "post" }))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchHandler"]
  }; }
};
CAutocomplete.style = cInputMenuCss;

export { CAutocomplete as c_autocomplete };

//# sourceMappingURL=c-autocomplete.entry.js.map