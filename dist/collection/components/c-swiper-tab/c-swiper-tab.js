import { h, Host, } from '@stencil/core';
import { createRipple } from '../../utils/utils';
export class CSwiperTab {
  constructor() {
    this.disabled = false;
    this.active = false;
    this.label = undefined;
    this.hostId = undefined;
    this.setsize = undefined;
    this.position = undefined;
    this.value = undefined;
  }
  onTabClick(event) {
    if (this.active)
      return;
    createRipple(event, this._container);
    this.changeValue.emit(this.value);
  }
  render() {
    const classes = {
      'c-swiper-tab': true,
      'c-swiper-tab--active': !this.disabled && this.active,
      'c-swiper-tab--disabled': this.disabled,
    };
    const a11y = {
      'aria-selected': this.active ? 'true' : 'false',
      'aria-setsize': this.setsize,
      'aria-posinset': this.position,
      tabindex: this.active ? 0 : -1,
    };
    return (h(Host, Object.assign({}, a11y, { role: "tab" }), h("div", { id: this.hostId, class: classes }, h("div", { class: "c-swiper-tab__content", ref: (el) => (this._container = el) }, h("div", { class: "c-swiper-tab__header" }, this.label, h("slot", { name: "icon" })), h("div", { class: "c-swiper-tab__description" }, h("slot", null))))));
  }
  static get is() { return "c-swiper-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-swiper-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-swiper-tab.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Disable button"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "active": {
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
          "text": "Mark as active"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Label of the button"
        },
        "attribute": "label",
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
      "setsize": {
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
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "Size of the set"
        },
        "attribute": "setsize",
        "reflect": false
      },
      "position": {
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
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "Position in the set"
        },
        "attribute": "position",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the button"
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "private",
              "text": undefined
            }],
          "text": "Emit value change to the parent"
        },
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onTabClick",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-swiper-tab.js.map
