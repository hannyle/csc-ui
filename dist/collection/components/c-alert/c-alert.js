import { mdiAlert, mdiCloseCircle, mdiCheckCircle, mdiInformation, } from '@mdi/js';
import { Host, h } from '@stencil/core';
export class CAlert {
  constructor() {
    this._icons = {
      warning: mdiAlert,
      error: mdiCloseCircle,
      success: mdiCheckCircle,
      info: mdiInformation,
    };
    this.type = undefined;
  }
  render() {
    const classes = Object.assign({ 'c-alert': true }, (!!this.type && { [`c-alert--${this.type}`]: true }));
    return (h(Host, null, h("div", { class: classes }, !!this.type && (h("svg", { width: "22", height: "22", viewBox: "0 0 24 24" }, h("path", { d: this._icons[this.type] }))), h("div", { class: "c-alert__content" }, h("slot", { name: "title" }), h("slot", null)))));
  }
  static get is() { return "c-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-alert.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CAlertType",
          "resolved": "CAlertType.Error | CAlertType.Info | CAlertType.Success | CAlertType.Warning",
          "references": {
            "CAlertType": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Type of the alert"
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=c-alert.js.map
