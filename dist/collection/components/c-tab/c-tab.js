import { h, Host, } from '@stencil/core';
import { createRipple } from '../../utils/utils';
export class CTab {
  constructor() {
    this._onClick = (event, center = false) => {
      if (this.disabled)
        return;
      createRipple(event, this.element, center);
      this.tabChange.emit(this.value);
    };
    this.active = false;
    this.disabled = false;
    this.hostId = undefined;
    this.position = undefined;
    this.setsize = undefined;
    this.value = undefined;
  }
  handleKeydown(event) {
    if (['Space', 'Enter'].includes(event.code)) {
      event.preventDefault();
      this._onClick(event, true);
    }
  }
  render() {
    const classes = {
      'c-tab': true,
      'c-tab--active': this.active,
      'c-tab--disabled': this.disabled,
    };
    const a11y = {
      'aria-disabled': this.disabled.toString(),
      'aria-hidden': this.disabled.toString(),
      'aria-selected': this.active.toString(),
      'aria-setsize': this.setsize,
      'aria-posinset': this.position,
      role: 'tab',
      tabindex: this.active && !this.disabled ? 0 : -1,
    };
    return (h(Host, Object.assign({}, a11y, { id: this.hostId, class: classes, onClick: this._onClick }), h("slot", null)));
  }
  static get is() { return "c-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-tab.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Mark tab as active"
        },
        "attribute": "active",
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
          "text": "Mark tab as disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Id of the tab"
        },
        "attribute": "id",
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
          "text": "Value for the tab\n- for use in c-tabs"
        },
        "attribute": "value",
        "reflect": false
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
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeydown",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=c-tab.js.map
