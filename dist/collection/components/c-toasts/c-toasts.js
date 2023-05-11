import { Host, h, } from '@stencil/core';
import { CToastPosition, CToastType } from '../../types';
import { v4 as uuid } from 'uuid';
export class CToasts {
  constructor() {
    this._getDefaultOptions = () => ({
      type: CToastType.Info,
      duration: 6000,
      persistent: false,
      indeterminate: false,
      position: CToastPosition.Fixed,
      progress: true,
      id: uuid(),
    });
    this.absolute = false;
    this.horizontal = 'center';
    this.vertical = 'bottom';
    this.messages = [];
  }
  async addToast(message) {
    const customMessages = this.messages.filter((message) => message.custom);
    if (message.custom && customMessages.length > 0) {
      console.warn(`Custom toast messages are restricted to 1 visible message due to slot reflection limitations.`);
    }
    else {
      requestAnimationFrame(() => {
        const defaultOptions = this._getDefaultOptions();
        this.messages = [
          ...this.messages,
          Object.assign(Object.assign(Object.assign({}, defaultOptions), message), { duration: +(message === null || message === void 0 ? void 0 : message.duration) > 0
              ? +message.duration
              : defaultOptions.duration }),
        ];
      });
    }
  }
  async removeToast(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.closeToast();
  }
  _onMessageClose(event) {
    this._removeMessage(event.detail.id);
  }
  _removeMessage(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.remove();
    const messageCount = this.el.shadowRoot.querySelectorAll('c-toast').length;
    if (messageCount === 0) {
      this.messages = [].slice();
    }
  }
  _renderMessage(message) {
    return (h("c-toast", { message: message, onClose: (e) => this._onMessageClose(e) }, message.custom && h("slot", null)));
  }
  render() {
    return (h(Host, { class: {
        absolute: this.absolute,
        [this.vertical]: true,
        [this.horizontal]: true,
      } }, this.messages.map((message) => this._renderMessage(message))));
  }
  static get is() { return "c-toasts"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-toasts.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-toasts.css"]
    };
  }
  static get properties() {
    return {
      "absolute": {
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
          "text": "Use absolute positioning"
        },
        "attribute": "absolute",
        "reflect": false,
        "defaultValue": "false"
      },
      "horizontal": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'left' | 'center' | 'right'",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Horizontal position"
        },
        "attribute": "horizontal",
        "reflect": false,
        "defaultValue": "'center'"
      },
      "vertical": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'top' | 'bottom'",
          "resolved": "\"bottom\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Vertical position"
        },
        "attribute": "vertical",
        "reflect": false,
        "defaultValue": "'bottom'"
      }
    };
  }
  static get states() {
    return {
      "messages": {}
    };
  }
  static get methods() {
    return {
      "addToast": {
        "complexType": {
          "signature": "(message: CToastMessage) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "CToastMessage": {
              "location": "import",
              "path": "../../types"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Add a new message",
          "tags": []
        }
      },
      "removeToast": {
        "complexType": {
          "signature": "(id: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLCToastElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Remove a message by id (id should be specified in the addToast params)",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=c-toasts.js.map
