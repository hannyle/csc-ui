import { h } from '@stencil/core';
export class CLink {
  constructor() {
    this.href = null;
    this.underline = false;
    this.target = null;
    this.color = 'link';
    this.weight = '600';
    this.path = null;
    this.iconFill = 'link';
    this.iconAfter = undefined;
    this.iconStyle = {};
  }
  render() {
    const CSCColor = (color) => `var(--csc-${color})`;
    const classList = {
      underline: this.underline,
      icon: !!this.path,
      'icon-after': this.iconAfter,
    };
    const iconStyle = Object.assign(Object.assign({}, this.iconStyle), { fill: this.iconFill ? CSCColor(this.iconFill) : 'inherit' });
    const style = {
      color: CSCColor(this.color),
      fontWeight: this.weight.toString(),
    };
    return (h("a", { class: classList, href: this.href, target: this.target, style: style }, h("slot", { name: "icon" }, this.path && (h("svg", { style: iconStyle, class: "icon-by-path", width: "18", height: "18", viewBox: "0 0 24 24" }, h("path", { d: this.path })))), h("slot", null)));
  }
  static get is() { return "c-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-link.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-link.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Url of link"
        },
        "attribute": "href",
        "reflect": false,
        "defaultValue": "null"
      },
      "underline": {
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
          "text": "Display line under the link"
        },
        "attribute": "underline",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "regular target attribute of a hyperlink"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "null"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CSCColor",
          "resolved": "\"dark-grey\" | \"error\" | \"info\" | \"light-grey\" | \"light-grey-blue\" | \"lightest-grey\" | \"link\" | \"mid-grey\" | \"primary\" | \"primary-ghost\" | \"primary-ghost-hover\" | \"primary-hover\" | \"primary-text-hover\" | \"success\" | \"warning\"",
          "references": {
            "CSCColor": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Use another CSC color"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'link'"
      },
      "weight": {
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
          "text": "Customisable font weight"
        },
        "attribute": "weight",
        "reflect": false,
        "defaultValue": "'600'"
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
      "iconFill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CSCColor",
          "resolved": "\"dark-grey\" | \"error\" | \"info\" | \"light-grey\" | \"light-grey-blue\" | \"lightest-grey\" | \"link\" | \"mid-grey\" | \"primary\" | \"primary-ghost\" | \"primary-ghost-hover\" | \"primary-hover\" | \"primary-text-hover\" | \"success\" | \"warning\"",
          "references": {
            "CSCColor": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Fill color for the svg icon"
        },
        "attribute": "icon-fill",
        "reflect": false,
        "defaultValue": "'link'"
      },
      "iconAfter": {
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
          "text": "Icon position"
        },
        "attribute": "icon-after",
        "reflect": false
      },
      "iconStyle": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{}",
          "resolved": "{}",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Icon style overrides"
        },
        "defaultValue": "{}"
      }
    };
  }
}
//# sourceMappingURL=c-link.js.map
