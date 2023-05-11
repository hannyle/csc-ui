import { h, Host, } from '@stencil/core';
import { mdiPlus, mdiMinus, mdiAccount, mdiPencil } from '@mdi/js';
import { createRipple } from '../../utils/utils';
export class CButton {
  constructor() {
    this._onClick = (event, center = false) => {
      var _a;
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      createRipple(event, this._container, center);
      this.tabChange.emit((_a = this.value) !== null && _a !== void 0 ? _a : this.hostElement.dataset.index);
      if (this.type === 'submit') {
        this._closestElementComposed('form', this._container).submit();
      }
    };
    this._onKeyDown = (event) => {
      if (['Space', 'Enter'].includes(event.code)) {
        if (!this.href) {
          event.preventDefault();
        }
        this._onClick(event, true);
      }
    };
    this.inverted = false;
    this.outlined = false;
    this.ghost = false;
    this.grouped = false;
    this.text = false;
    this.loading = false;
    this.fit = false;
    this.noRadius = false;
    this.iconEnd = false;
    this.type = 'button';
    this.disabled = false;
    this.icon = undefined;
    this.value = undefined;
    this.hostId = undefined;
    this.size = 'default';
    this.href = undefined;
    this.path = null;
    this.target = '_blank';
  }
  _closestElementComposed(selector, base) {
    function __closestFrom(el) {
      const found = el.closest(selector);
      return found ? found : __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  componentWillLoad() {
    this._containerhasDescriptionSlot = !!this.hostElement.querySelector('[slot="description"]');
  }
  render() {
    const SPINNER_SMALL = (h("svg", { class: "spinner", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { class: "spinner__circle", cx: "50", cy: "50", r: "45" })));
    let selectedIcon = null;
    let svg;
    if (this.icon) {
      const icons = {
        plus: mdiPlus,
        minus: mdiMinus,
        account: mdiAccount,
        edit: mdiPencil,
      };
      selectedIcon = icons[this.icon];
      svg = (h("svg", { class: "button-icon", width: "16", height: "16", viewBox: "0 0 22 22" }, h("path", { d: selectedIcon })));
    }
    const contentClasses = {
      'c-button': true,
      'c-button--description': this._containerhasDescriptionSlot,
      'c-button--disabled': !!this.disabled,
      'c-button--fitted': !!this.fit,
      'c-button--ghost': !!this.ghost,
      'c-button--large': this.size === 'large',
      'c-button--no-radius': !!this.noRadius,
      'c-button--outlined': !!this.outlined,
      'c-button--small': this.size === 'small',
      'c-button--text': !!this.text,
      'c-button--grouped': this.grouped,
      'c-button--inverted': this.inverted,
    };
    const innerClasses = {
      'c-button__content': true,
      'hide-text': this.loading,
    };
    const buttonClasses = {
      fit: !!this.fit,
      'no-radius': !!this.noRadius,
      grouped: this.grouped,
    };
    const hostClasses = {
      'c-button--active': this.grouped && !this.outlined,
      inverted: this.inverted,
    };
    const descriptionSlotClasses = {
      'c-button__description': this._containerhasDescriptionSlot,
      'c-button__description--loading': this.loading,
    };
    const Tag = !!this.href ? 'a' : 'button';
    const attributes = {
      id: this.hostId,
      class: buttonClasses,
      tabindex: this.disabled ? -1 : 0,
      role: 'button',
      disabled: this.disabled,
      onKeyDown: this._onKeyDown,
      onClick: this._onClick,
    };
    let linkAttributes = {};
    if (!!this.href) {
      linkAttributes = { href: this.href, target: this.target };
    }
    const renderIcon = (h("slot", { name: "icon" }, this.path && (h("svg", { class: "icon-by-path", width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: this.path })))));
    return (h(Host, { class: hostClasses }, h(Tag, Object.assign({}, attributes, linkAttributes), h("div", { class: contentClasses, ref: (el) => (this._container = el) }, this.loading && h("div", { class: "spinner_wrapper" }, SPINNER_SMALL), h("div", { class: innerClasses }, !this.iconEnd && renderIcon, svg, h("slot", null), this.iconEnd && renderIcon), this._containerhasDescriptionSlot && (h("div", { class: descriptionSlotClasses }, h("slot", { name: "description" })))))));
  }
  static get is() { return "c-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-button.css"]
    };
  }
  static get properties() {
    return {
      "inverted": {
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
          "text": "Inverted button style for dark backgrounds"
        },
        "attribute": "inverted",
        "reflect": false,
        "defaultValue": "false"
      },
      "outlined": {
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
          "text": "Outlined button style"
        },
        "attribute": "outlined",
        "reflect": false,
        "defaultValue": "false"
      },
      "ghost": {
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
          "text": "Light button background"
        },
        "attribute": "ghost",
        "reflect": false,
        "defaultValue": "false"
      },
      "grouped": {
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
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "True when used as a tab button"
        },
        "attribute": "grouped",
        "reflect": false,
        "defaultValue": "false"
      },
      "text": {
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
          "text": "Transparent button background"
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "false"
      },
      "loading": {
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
          "text": "Display loader on the button"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "fit": {
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
          "text": "Fit width to containing element"
        },
        "attribute": "fit",
        "reflect": false,
        "defaultValue": "false"
      },
      "noRadius": {
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
          "text": "Remove the default border radius"
        },
        "attribute": "no-radius",
        "reflect": false,
        "defaultValue": "false"
      },
      "iconEnd": {
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
          "text": "Icon after text"
        },
        "attribute": "icon-end",
        "reflect": false,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'button' | 'submit'",
          "resolved": "\"button\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Button type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
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
          "text": "Disable the button"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'plus' | 'minus' | 'account' | 'edit'",
          "resolved": "\"account\" | \"edit\" | \"minus\" | \"plus\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Please use the icon slot instead"
            }],
          "text": "Name of the icon to be displayed in the button"
        },
        "attribute": "icon",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Value for the button\n- for use in the c-tab-buttons"
        },
        "attribute": "value",
        "reflect": false
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
          "text": "Id of the button"
        },
        "attribute": "id",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'small' | 'large'",
          "resolved": "\"default\" | \"large\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the button"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "href": {
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
          "text": "Hyperlink url"
        },
        "attribute": "href",
        "reflect": false
      },
      "path": {
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
          "text": "Path for the svg icon"
        },
        "attribute": "path",
        "reflect": false,
        "defaultValue": "null"
      },
      "target": {
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
          "text": "Hyperlink target"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_blank'"
      }
    };
  }
  static get events() {
    return [{
        "method": "tabChange",
        "name": "tabChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "Emit changes to the parent"
        },
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=c-button.js.map
