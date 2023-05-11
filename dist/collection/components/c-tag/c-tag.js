import { Host, h } from '@stencil/core';
export class CTag {
  constructor() {
    this.active = false;
    this.fit = false;
    this.flat = false;
    this.closeable = false;
    this.badge = null;
  }
  render() {
    const classes = {
      'c-tag': true,
      'c-tag--closeable': this.closeable,
      'c-tag--badge': !!this.badge || this.badge === 0,
      active: this.active,
      flat: this.flat,
    };
    const hostClasses = {
      fit: this.fit,
      flat: this.flat,
    };
    const hostParams = Object.assign({ tabindex: 0 }, (!this.flat && {
      role: 'button',
    }));
    return (h(Host, Object.assign({ tabindex: "0" }, hostParams, { class: hostClasses }), h("div", { class: classes }, h("div", { class: "row" }, !!this.badge && h("div", { class: "badge" }, this.badge), h("slot", null), this.closeable && (h("svg", { viewBox: "0 0 24 24" }, h("path", { fill: "currentColor", d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })))))));
  }
  static get is() { return "c-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-tag.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-tag.css"]
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
          "text": "Mark tag as active"
        },
        "attribute": "active",
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
          "text": "Stretch to fill the container"
        },
        "attribute": "fit",
        "reflect": false,
        "defaultValue": "false"
      },
      "flat": {
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
          "text": "Remove the hover effect"
        },
        "attribute": "flat",
        "reflect": false,
        "defaultValue": "false"
      },
      "closeable": {
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
          "text": "Mark tag as closeable"
        },
        "attribute": "closeable",
        "reflect": false,
        "defaultValue": "false"
      },
      "badge": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Display an optional badge at the start of the tag"
        },
        "attribute": "badge",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
}
//# sourceMappingURL=c-tag.js.map
