import { Host, h, } from '@stencil/core';
import { mdiChevronDown } from '@mdi/js';
import { registerClickOutside } from 'stencil-click-outside';
import { v4 as uuid } from 'uuid';
export class CSelect {
  constructor() {
    this._itemRefs = [];
    this._outerWrapperClasses = ['outer-wrapper'];
    this._uniqueId = uuid();
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
  static get is() { return "c-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["../c-input/c-input-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../c-input/c-input-menu.css"]
    };
  }
  static get properties() {
    return {
      "autofocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Auto focus the input"
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disable the input"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideDetails": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide the hint and error messages"
        },
        "attribute": "hide-details",
        "reflect": false,
        "defaultValue": "false"
      },
      "hint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hint text for the input"
        },
        "attribute": "hint",
        "reflect": false,
        "defaultValue": "''"
      },
      "hostId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Id of the element"
        },
        "attribute": "id",
        "reflect": false
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Element label"
        },
        "attribute": "label",
        "reflect": false
      },
      "shadow": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shadow variant"
        },
        "attribute": "shadow",
        "reflect": false,
        "defaultValue": "false"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Input field name"
        },
        "attribute": "name",
        "reflect": false
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set as required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "returnValue": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "false",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Return only the item value rather than the whole item object"
        },
        "attribute": "return-value",
        "reflect": false
      },
      "valid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set the valid\u00EDty of the input"
        },
        "attribute": "valid",
        "reflect": false,
        "defaultValue": "true"
      },
      "validate": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Manual validation"
        },
        "attribute": "validate",
        "reflect": false,
        "defaultValue": "false"
      },
      "validateOnBlur": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Validate the input on blur"
        },
        "attribute": "validate-on-blur",
        "reflect": false,
        "defaultValue": "false"
      },
      "validation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Custom validation message"
        },
        "attribute": "validation",
        "reflect": false,
        "defaultValue": "'Required field'"
      },
      "itemsPerPage": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items per page before adding scroll"
        },
        "attribute": "items-per-page",
        "reflect": false,
        "defaultValue": "6"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Placeholder text"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number | boolean | CSelectItem",
          "resolved": "CSelectItem | boolean | number | string",
          "references": {
            "CSelectItem": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Selected item"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "null"
      },
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CSelectItem[]",
          "resolved": "CSelectItem[]",
          "references": {
            "CSelectItem": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "selectable items"
        },
        "defaultValue": "[]"
      }
    };
  }
  static get states() {
    return {
      "menuVisible": {},
      "currentIndex": {},
      "activeListItemId": {},
      "statusText": {},
      "previousValue": {}
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when an item is selected"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "validate",
        "methodName": "validateChange"
      }, {
        "propName": "currentIndex",
        "methodName": "onCurrentIndexChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=c-select.js.map
