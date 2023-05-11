import { mdiFullscreen, mdiFullscreenExit } from '@mdi/js';
import { Host, h, getAssetPath, } from '@stencil/core';
export class CCard {
  constructor() {
    this._allowedBackgrounds = ['puhti', 'mahti', 'allas'];
    this.background = undefined;
    this.backgroundColor = 'white';
    this.fullscreen = false;
    this.isFullscreen = false;
  }
  _onFullscreen() {
    var _a, _b;
    this.isFullscreen = !this.isFullscreen;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = this.isFullscreen
        ? 'block'
        : 'flex';
    }
  }
  componentDidLoad() {
    const title = this.host.querySelector('c-card-title');
    if (!!title && this.fullscreen) {
      title.style.marginRight = '40px';
    }
  }
  async exitFullscreen() {
    var _a, _b;
    this.isFullscreen = false;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = 'flex';
    }
  }
  async enterFullscreen() {
    this.isFullscreen = true;
  }
  render() {
    const style = {
      'background-color': this.backgroundColor,
    };
    const hostClasses = {
      'c-card': true,
      'c-card--fullscreen': this.isFullscreen,
    };
    if (this._allowedBackgrounds.includes(this.background)) {
      style['background-image'] = `url(${getAssetPath(`./assets/${this.background}.gif`)}`;
      style['background-size'] = 'cover';
      style['background-position-y'] = 'bottom';
    }
    return (h(Host, { class: hostClasses, style: style }, this.fullscreen && (h("c-icon-button", { "aria-hidden": "true", class: "c-card__fullscreen-toggle", size: "small", title: this.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen', text: true, onClick: () => this._onFullscreen() }, h("c-icon", { path: this.isFullscreen ? mdiFullscreenExit : mdiFullscreen }))), h("slot", null)));
  }
  static get is() { return "c-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-card.css"]
    };
  }
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "background": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CardBackground",
          "resolved": "\"allas\" | \"mahti\" | \"puhti\"",
          "references": {
            "CardBackground": {
              "location": "local",
              "path": "/Users/lhang/csc-ui-forked/src/components/c-card/c-card.tsx"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Card background image for login pages of specific services"
        },
        "attribute": "background",
        "reflect": false
      },
      "backgroundColor": {
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
          "text": "Background color"
        },
        "attribute": "background-color",
        "reflect": false,
        "defaultValue": "'white'"
      },
      "fullscreen": {
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
          "text": "Enable the fullscreen toggle button"
        },
        "attribute": "fullscreen",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isFullscreen": {}
    };
  }
  static get methods() {
    return {
      "exitFullscreen": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLDivElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Exit fullscreen from the outside",
          "tags": []
        }
      },
      "enterFullscreen": {
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
          "text": "Enter fullscreen from the outside",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "host"; }
}
//# sourceMappingURL=c-card.js.map
