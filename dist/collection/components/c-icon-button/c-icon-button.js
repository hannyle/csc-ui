import { h } from '@stencil/core';
import { createRipple } from '../../utils/utils';
export class CIconButton {
  constructor() {
    this._onClick = (event) => {
      createRipple(event, this._container);
    };
    this.badge = undefined;
    this.text = false;
    this.inverted = false;
    this.outlined = false;
    this.path = null;
    this.ghost = false;
    this.disabled = false;
    this.size = 'default';
  }
  _renderBadge() {
    return h("div", { class: "icon-button-badge" }, this.badge);
  }
  _outerClasses() {
    return {
      'icon-button': true,
      disabled: !!this.disabled,
      text: !!this.text,
      ghost: !!this.ghost,
      outlined: !!this.outlined,
      inverted: !!this.inverted,
      'icon-button--small': this.size === 'small',
      'icon-button--x-small': this.size === 'x-small',
    };
  }
  render() {
    return (h("button", { class: this._outerClasses(), onClick: this._onClick }, h("div", { class: "inner-container", ref: (el) => (this._container = el) }, h("slot", null, this.path && (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: this.path }))))), this.badge && this._renderBadge()));
  }
  static get is() { return "c-icon-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-icon-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-icon-button.css"]
    };
  }
  static get properties() {
    return {
      "badge": {
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
          "text": "Show a badge on top of the icon"
        },
        "attribute": "badge",
        "reflect": false
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
          "text": "Text variant of the button"
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "false"
      },
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
          "text": "Inverted color for dark backgrounds"
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
          "text": "Outlined variant of the button"
        },
        "attribute": "outlined",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Ghost variant of the button"
        },
        "attribute": "ghost",
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
          "text": "Disable the button"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'x-small' | 'small'",
          "resolved": "\"default\" | \"small\" | \"x-small\"",
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
      }
    };
  }
}
//# sourceMappingURL=c-icon-button.js.map
