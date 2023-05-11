import { Host, h, } from '@stencil/core';
import { mdiChevronDown, mdiAlert } from '@mdi/js';
import { v4 as uuid } from 'uuid';
export class CAutocomplete {
  constructor() {
    this._itemRefs = [];
    this._uniqueId = uuid();
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
  static get is() { return "c-autocomplete"; }
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
      "customMenu": {
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
          "text": "Render custom menu"
        },
        "attribute": "custom-menu",
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
      "query": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Search string"
        },
        "attribute": "query",
        "reflect": false,
        "defaultValue": "null"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number | CAutocompleteItem",
          "resolved": "CAutocompleteItem | number | string",
          "references": {
            "CAutocompleteItem": {
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
      "dense": {
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
          "text": "Dense variant"
        },
        "attribute": "dense",
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
          "text": "Show required validation"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
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
      "items": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CAutocompleteItem[]",
          "resolved": "CAutocompleteItem[]",
          "references": {
            "CAutocompleteItem": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items to be selected"
        },
        "defaultValue": "[]"
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
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "menuVisible": {},
      "currentIndex": {},
      "statusText": {}
    };
  }
  static get events() {
    return [{
        "method": "changeQuery",
        "name": "changeQuery",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when text is typed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
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
  static get methods() {
    return {
      "setValue": {
        "complexType": {
          "signature": "(event: any, item: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }, {
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the value of the autocomplete externally",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "items",
        "methodName": "watchHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-autocomplete.js.map
