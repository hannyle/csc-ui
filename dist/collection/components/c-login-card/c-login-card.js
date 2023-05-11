import { h, Host } from '@stencil/core';
export class CLoginCard {
  constructor() {
    this._paths = {
      desktop: 'm0.234,0.914 c0.132,-0.026,0.286,-0.05,0.436,-0.163 c0.083,-0.063,0.152,-0.145,0.21,-0.329 c0.055,-0.172,0.072,-0.421,0.072,-0.421 h0.048 v1 h-1 v-0.057 c0,0,0.145,-0.012,0.234,-0.029',
      mobile: 'm1,1 h-1 v-0.213 c0,0,0.209,-0.046,0.337,-0.109 c0.191,-0.096,0.413,-0.183,0.629,-0.608 c0.028,-0.055,0.034,-0.069,0.034,-0.069',
    };
    this.backgroundPosition = 'bottom right';
    this.mobileBreakpoint = 600;
    this.overlay = false;
    this.overlayBlendMode = 'multiply';
    this.src = '';
    this.path = '';
    this.imageHeight = '100%';
  }
  componentDidLoad() {
    this._observer = new ResizeObserver(([entry]) => {
      const { width } = entry.contentRect;
      this._handleResize(width);
    });
    this._observer.observe(this._cardElement);
    const { width } = this._cardElement.getBoundingClientRect();
    this._handleResize(width);
  }
  disconnectedCallback() {
    this._observer.disconnect();
  }
  _handleResize(width) {
    const isMobile = width <= this.mobileBreakpoint;
    const mode = isMobile ? 'mobile' : 'desktop';
    this.imageHeight = isMobile ? `${width * 0.3}px` : '100%';
    this.path = this._paths[mode];
    this._cardElement.classList.toggle('c-login-card--mobile', isMobile);
  }
  render() {
    const style = {
      backgroundImage: `url(${this.src})`,
      backgroundPosition: this.backgroundPosition,
      height: this.imageHeight,
      '--c-login-overlay-mode': !!this.overlay && this.overlayBlendMode,
    };
    const imageClasses = {
      'c-login-card__image': true,
      'c-login-card__image--overlay': !!this.overlay,
    };
    const contentClasses = {
      'c-login-card__content': true,
      'c-login-card__content--no-image': !this.src,
    };
    return (h(Host, null, !!this.src && (h("svg", { width: "0", height: "0" }, h("defs", null, h("clipPath", { id: "cLoginClipPath", clipPathUnits: "objectBoundingBox" }, h("path", { d: this.path }))))), h("div", { class: "c-login-card", ref: (el) => (this._cardElement = el) }, !!this.src && h("div", { class: imageClasses, style: style }), h("div", { class: contentClasses }, h("slot", null)))));
  }
  static get is() { return "c-login-card"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-login-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-login-card.css"]
    };
  }
  static get properties() {
    return {
      "backgroundPosition": {
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
          "text": "Background position (css background-position)"
        },
        "attribute": "background-position",
        "reflect": false,
        "defaultValue": "'bottom right'"
      },
      "mobileBreakpoint": {
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
          "text": "Mobile breakpoint in pixels"
        },
        "attribute": "mobile-breakpoint",
        "reflect": false,
        "defaultValue": "600"
      },
      "overlay": {
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
          "text": "Add colored overlay to the background image"
        },
        "attribute": "overlay",
        "reflect": false,
        "defaultValue": "false"
      },
      "overlayBlendMode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CLoginCardBlendMode",
          "resolved": "\"color\" | \"color-burn\" | \"color-dodge\" | \"darken\" | \"difference\" | \"exclusion\" | \"hard-light\" | \"hue\" | \"lighten\" | \"luminosity\" | \"multiply\" | \"normal\" | \"overlay\" | \"saturation\" | \"screen\" | \"soft-light\"",
          "references": {
            "CLoginCardBlendMode": {
              "location": "local",
              "path": "/Users/lhang/csc-ui-forked/src/components/c-login-card/c-login-card.tsx"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Add colored overlay to the background image"
        },
        "attribute": "overlay-blend-mode",
        "reflect": false,
        "defaultValue": "'multiply'"
      },
      "src": {
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
          "text": "Background image"
        },
        "attribute": "src",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "path": {},
      "imageHeight": {}
    };
  }
  static get elementRef() { return "element"; }
}
//# sourceMappingURL=c-login-card.js.map
