import { Host, h, } from '@stencil/core';
export class CSteps {
  constructor() {
    this._isInitialized = false;
    this.value = undefined;
    this.isMobile = false;
    this.label = '';
  }
  watchPropHandler() {
    this._handleDividers();
  }
  _handleDividers() {
    this._stepElements = this.host.querySelectorAll('c-step');
    const dividers = this.host.querySelectorAll('.divider');
    this._stepElements.forEach((item, index) => {
      item.current = index + 1 === +this.value;
      item.complete = index + 1 < +this.value;
      if (index + 1 < this._stepElements.length) {
        const div = this._isInitialized
          ? dividers[index]
          : document.createElement('div');
        div.classList.toggle('complete', !!item.complete);
        if (!this._isInitialized) {
          div.classList.add('divider');
          item.after(div);
        }
      }
      if (item.current) {
        this.label = item.textContent;
      }
    });
    this._isInitialized = true;
  }
  componentDidLoad() {
    this._handleDividers();
    this._resizeObserver = new ResizeObserver(([entry]) => {
      const maxWidth = this._stepElements.length * 180;
      this.isMobile = maxWidth > entry.contentRect.width;
      this.host.shadowRoot
        .querySelector('.c-steps')
        .classList.toggle('mobile', this.isMobile);
      this._stepElements.forEach((node) => {
        node.classList.toggle('mobile', this.isMobile);
      });
    });
    window.requestAnimationFrame(() => {
      this._resizeObserver.observe(this.host);
    });
  }
  _getA11yMessage(total, current) {
    return `
      Steps, step ${Math.min(current, total)} of ${total}.
      ${this.label}.
      ${current - 1} step${current - 1 !== 1 ? 's' : ''} marked as completed.
    `;
  }
  render() {
    return (h(Host, { tabindex: "0" }, this._stepElements && (h("span", { class: "visuallyhidden" }, this._getA11yMessage(this._stepElements.length, +this.value))), h("div", { class: "c-steps", "aria-hidden": "true" }, h("slot", null)), this.isMobile && (h("div", { class: "c-steps__label", "aria-hidden": "true" }, this.label))));
  }
  static get is() { return "c-steps"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-steps.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-steps.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the accordion (current step number)"
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isMobile": {},
      "label": {}
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
          "text": "Emit changes to the parent"
        },
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "watchPropHandler"
      }];
  }
}
//# sourceMappingURL=c-steps.js.map
