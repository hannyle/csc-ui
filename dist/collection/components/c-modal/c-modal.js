import { h, } from '@stencil/core';
export class CModal {
  constructor() {
    this._debounce = null;
    this.value = false;
    this.dismissable = false;
    this.width = 600;
    this.zIndex = 10;
    this.innerValue = false;
    this.animateModal = false;
  }
  onValueChange(value) {
    setTimeout(() => {
      this.innerValue = value;
      this.changeValue.emit(this.value);
      const cardChild = this.el.querySelector('c-card');
      if (!value && cardChild) {
        cardChild.exitFullscreen();
      }
    }, value ? 0 : 500);
  }
  _hideModal() {
    if (!this.dismissable) {
      this.animateModal = true;
      if (this._debounce !== null) {
        clearTimeout(this._debounce);
        this._debounce = null;
      }
      this._debounce = window.setTimeout(() => {
        this.animateModal = false;
        this._debounce = null;
      }, 150);
      return;
    }
    this.value = false;
    this.changeValue.emit(this.value);
  }
  componentDidLoad() {
    this.innerValue = this.value;
    const width = isNaN(this.width) ? this.width : `${this.width}px`;
    this.el.style.setProperty('--c-modal-width', `${width}`);
  }
  render() {
    const modalClasses = {
      'c-modal': true,
      'c-modal--show': this.value,
      'c-modal--hide': !this.innerValue,
      'c-modal--animate': this.animateModal,
    };
    const overlayClasses = {
      'c-overlay': true,
      'c-overlay--hide': !this.innerValue,
      'c-overlay--show': this.value,
    };
    const contentStyle = {
      'z-index': `${this.zIndex + 1}`,
    };
    const overlayStyle = {
      'z-index': `${this.zIndex}`,
    };
    return (h("div", { class: "modal-wrapper" }, h("div", { class: modalClasses, "aria-hidden": !this.value, style: contentStyle }, this.innerValue && h("slot", null)), h("div", { class: overlayClasses, style: overlayStyle, onClick: () => this._hideModal() })));
  }
  static get is() { return "c-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-modal.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Is the modal visible"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "false"
      },
      "dismissable": {
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
          "text": "Dismissed when touching/clicking outside the content"
        },
        "attribute": "dismissable",
        "reflect": false,
        "defaultValue": "false"
      },
      "width": {
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
          "text": "Width of the dialog. Numeric value is considered as pixel value (400 -> 400px)"
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "600"
      },
      "zIndex": {
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
          "text": "Z-index of the modal"
        },
        "attribute": "z-index",
        "reflect": false,
        "defaultValue": "10"
      }
    };
  }
  static get states() {
    return {
      "innerValue": {},
      "animateModal": {}
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered when value is changed"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }];
  }
}
//# sourceMappingURL=c-modal.js.map
