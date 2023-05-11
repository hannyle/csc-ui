import { h } from '@stencil/core';
export class CStep {
  constructor() {
    this.complete = false;
    this.current = false;
  }
  render() {
    const rootClasses = {
      'c-step': true,
      'c-step--complete': this.complete,
    };
    return (h("div", { class: rootClasses }, h("div", { class: "c-step__indicator" }, !this.complete && (h("div", { class: { dot: true, current: this.current } })), this.complete && (h("div", { class: "complete" }, h("svg", { viewBox: "0 0 100 100" }, h("path", { class: "path", d: "M 12 52 l 24 24 l 47 -47 l -3 -3 l -44 44 l -21 -21 l -3 3" }))))), h("div", { class: "c-step__label" }, h("slot", null))));
  }
  static get is() { return "c-step"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-step.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-step.css"]
    };
  }
  static get properties() {
    return {
      "complete": {
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
          "text": "Mark step as complete"
        },
        "attribute": "complete",
        "reflect": false,
        "defaultValue": "false"
      },
      "current": {
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
          "text": "Mark step as current"
        },
        "attribute": "current",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=c-step.js.map
