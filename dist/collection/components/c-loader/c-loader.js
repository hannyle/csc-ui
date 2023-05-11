import { Host, h } from '@stencil/core';
export class CLoader {
  constructor() {
    this.contentdelay = 0;
    this.hide = false;
    this.size = 48;
  }
  onElementHide(hide) {
    this.el.classList.toggle('active', !hide);
  }
  componentDidLoad() {
    this.el.classList.toggle('active', !this.hide);
  }
  render() {
    const slotHasContent = !!this.el.childNodes.length;
    const styles = {
      '--c-loader-size': `${this.size}px`,
    };
    return (h(Host, null, h("div", { class: "c-loader", style: styles }, h("svg", { class: "c-loader__loader", viewBox: "25 25 50 50" }, h("circle", { class: "c-loader__loader-path", cx: "50", cy: "50", r: "20" })), slotHasContent && (h("div", { class: "c-loader__slot", style: { 'animation-delay': `${this.contentdelay}s` } }, h("slot", null))))));
  }
  static get is() { return "c-loader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-loader.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-loader.css"]
    };
  }
  static get properties() {
    return {
      "contentdelay": {
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
          "text": "Delay in seconds of showing the contents in the slot of the loader"
        },
        "attribute": "contentdelay",
        "reflect": false,
        "defaultValue": "0"
      },
      "hide": {
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
          "text": "Hide the loader"
        },
        "attribute": "hide",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
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
          "text": "Size of the loader"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "48"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "hide",
        "methodName": "onElementHide"
      }];
  }
}
//# sourceMappingURL=c-loader.js.map
