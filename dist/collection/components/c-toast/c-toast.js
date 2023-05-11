import { Host, h, } from '@stencil/core';
import { mdiClose, mdiAlert, mdiCloseCircle, mdiCheckCircle, mdiInformation, } from '@mdi/js';
export class CToast {
  constructor() {
    this._closed = false;
    this._icons = {
      close: mdiClose,
      warning: mdiAlert,
      error: mdiCloseCircle,
      success: mdiCheckCircle,
      info: mdiInformation,
    };
    this.message = undefined;
  }
  async closeToast() {
    if (this._closed)
      return;
    this._closed = true;
    this.el.classList.remove('show');
    this.el.ontransitionend = () => this.close.emit(this.message);
  }
  componentDidLoad() {
    window.requestAnimationFrame(() => {
      this.el.classList.add('show');
    });
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._startTime = Date.now();
    this._remainingTime = this.message.duration;
    this._timeout = window.setTimeout(() => this.closeToast(), +this.message.duration);
  }
  disconnectedCallback() {
    window.clearTimeout(this._timeout);
  }
  _onMouseEnter() {
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._remainingTime = this._remainingTime - (Date.now() - this._startTime);
    window.clearTimeout(this._timeout);
  }
  _onMouseLeave() {
    if (this.message.persistent || this.message.indeterminate)
      return;
    this._startTime = Date.now();
    this._timeout = window.setTimeout(() => this.closeToast(), this._remainingTime);
  }
  _renderCloseButton() {
    const Tag = !!this.message.closeText ? 'c-button' : 'c-icon-button';
    return (h(Tag, { "aria-label": "close", size: "small", text: true, onClick: () => this.closeToast() }, h("svg", Object.assign({}, Object.assign({}, (!!this.message.closeText && { slot: 'icon' })), { "aria-hidden": "true", viewBox: "0 0 24 24" }), h("path", { d: this._icons.close })), this.message.closeText));
  }
  render() {
    const showProgressBar = !this.message.persistent && this.message.progress;
    return (h(Host, { id: `c-toast--${this.message.id}`, class: { [this.message.type]: true }, role: "alert", "aria-atomic": "true", "aria-live": "assertive", onMouseEnter: () => this._onMouseEnter(), onMouseLeave: () => this._onMouseLeave() }, h("span", { class: "visuallyhidden" }, this.message.type, " notification"), this.message.custom ? (h("div", { class: "c-toast__custom-item" }, h("div", { class: "c-toast__content" }, h("slot", null)))) : (h("div", { class: "c-toast__item" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: this._icons[this.message.type] })), h("div", { class: "c-toast__content" }, !!this.message.title && h("p", null, this.message.title), this.message.message), !this.message.indeterminate && this._renderCloseButton())), showProgressBar && (h("div", { class: "c-toast__progress", style: { '--c-toast-duration': `${this.message.duration}ms` } }, h("div", { class: {
        'c-toast__progress__bar': true,
        indeterminate: this.message.indeterminate,
      } })))));
  }
  static get is() { return "c-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-toast.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-toast.css"]
    };
  }
  static get properties() {
    return {
      "message": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CToastMessage",
          "resolved": "CToastMessage",
          "references": {
            "CToastMessage": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Messages"
        }
      }
    };
  }
  static get events() {
    return [{
        "method": "close",
        "name": "close",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emit inner value change to parent"
        },
        "complexType": {
          "original": "CToastMessage",
          "resolved": "CToastMessage",
          "references": {
            "CToastMessage": {
              "location": "import",
              "path": "../../types"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "closeToast": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Close toast",
          "tags": [{
              "name": "emits",
              "text": "close"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=c-toast.js.map
