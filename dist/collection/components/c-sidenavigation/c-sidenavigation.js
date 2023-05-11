import { mdiArrowRight } from '@mdi/js';
import { Host, h } from '@stencil/core';
export class CSidenavigation {
  constructor() {
    this.mobile = undefined;
    this.menuVisible = false;
  }
  handleChange(event) {
    const slotted = this.host.querySelectorAll('c-sidenavigationitem');
    const target = event.target;
    const { active } = target;
    slotted.forEach((item) => {
      if (item.querySelector('[slot="subnavitem"]')) {
        item.active = false;
      }
    });
    if (target.querySelector('[slot="subnavitem"]')) {
      target.active = !active;
    }
    else {
      target.active = true;
    }
  }
  componentDidLoad() {
    const el = document.querySelector('body');
    ['click', 'keyup'].forEach((eventType) => {
      el.addEventListener(eventType, (e) => {
        if (e.target.matches('c-navigationbutton')) {
          if (eventType === 'click') {
            this.menuVisible = !this.menuVisible;
          }
          else if (e instanceof KeyboardEvent && e.key === 'Enter') {
            this.menuVisible = !this.menuVisible;
          }
        }
      });
    });
  }
  _closeMenu() {
    this.menuVisible = false;
  }
  render() {
    const classes = {
      'c-sidenavigation': true,
      'hide-menu': !this.menuVisible,
      mobile: !!this.mobile,
      desktop: !this.mobile,
    };
    const containerClasses = {
      'c-sidenavigation__content': true,
      'c-sidenavigation__content--hidden': !this.menuVisible,
      'c-sidenavigation__content--mobile': !!this.mobile,
      'c-sidenavigation__content--desktop': !this.mobile,
    };
    return (h(Host, { class: { desktop: !this.mobile } }, h("div", { class: containerClasses }, this.mobile && (h("div", { class: "c-sidenavigation__burger" }, h("c-icon-button", { inverted: true, text: true, onClick: () => this._closeMenu() }, h("span", { class: "visuallyhidden" }, "Close sidemenu"), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiArrowRight }))))), h("nav", { class: classes, role: "menubar" }, h("slot", null), h("div", { class: "vertical-spacer" }), h("slot", { name: "bottom" }))), this.menuVisible && this.mobile && (h("div", { class: "c-overlay c-fadeIn", onClick: () => this._closeMenu() }))));
  }
  static get is() { return "c-sidenavigation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-sidenavigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-sidenavigation.css"]
    };
  }
  static get properties() {
    return {
      "mobile": {
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
          "text": "Mobile version"
        },
        "attribute": "mobile",
        "reflect": false
      },
      "menuVisible": {
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
          "text": "Mobile version menu visibility"
        },
        "attribute": "menu-visible",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "itemChange",
        "method": "handleChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=c-sidenavigation.js.map
