import { Host, h } from '@stencil/core';
export class CProgressBar {
  constructor() {
    this.value = 0;
    this.hideDetails = false;
    this.singleLine = false;
    this.label = '';
    this.color = undefined;
    this.indeterminate = false;
  }
  _getSafeValue() {
    if (this.value >= 0 && this.value <= 100)
      return this.value;
    if (this.value < 0)
      return 0;
    return 100;
  }
  render() {
    const value = this._getSafeValue();
    const style = {
      '--value': `${value}%`,
      '--bar-color': this.color ? this.color : null,
    };
    const classes = {
      'c-progress': true,
      'c-progress--indeterminate': this.indeterminate,
      'adjacent-details': this.singleLine,
    };
    const detailsClasses = {
      'c-progress__percentage': true,
      'c-progress__percentage--negative': this.value < 0,
      'adjacent-details': this.singleLine,
    };
    const a11y = {
      'aria-busy': (!this.indeterminate).toString(),
      title: `${value} %`,
    };
    const params = {
      role: 'progressbar',
      max: '100',
    };
    if (!this.indeterminate) {
      params.value = value.toString();
      params['aria-valuenow'] = value.toString();
    }
    return (h(Host, Object.assign({}, a11y), h("label", { class: classes, style: style }, h("progress", Object.assign({}, params), !this.indeterminate && `${value}%`)), !this.indeterminate && !this.hideDetails && (h("div", { class: detailsClasses }, this.value, " % ", this.label))));
  }
  static get is() { return "c-progress-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-progress-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-progress-bar.css"]
    };
  }
  static get properties() {
    return {
      "value": {
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
          "text": "Progress bar value in percentage (0 to 100)"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
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
          "text": "Hide the percentage display"
        },
        "attribute": "hide-details",
        "reflect": false,
        "defaultValue": "false"
      },
      "singleLine": {
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
          "text": "Place details next to progress bar"
        },
        "attribute": "single-line",
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
          "text": "Optional details message next to percentage display"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "color": {
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
          "tags": [{
              "name": "default",
              "text": "var(--csc-primary)"
            }],
          "text": "Color of the bar (valid css color)"
        },
        "attribute": "color",
        "reflect": false
      },
      "indeterminate": {
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
          "text": "Indeterminate state of the progress bar"
        },
        "attribute": "indeterminate",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=c-progress-bar.js.map
