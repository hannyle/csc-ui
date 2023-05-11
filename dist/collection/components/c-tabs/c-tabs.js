import { h, Host, } from '@stencil/core';
export class CTabs {
  constructor() {
    this.value = undefined;
    this.borderless = false;
  }
  onExternalValueChange() {
    this._handleActiveTab();
    this.changeValue.emit(this.value);
  }
  tabChangeHandler(e) {
    this.value = e.detail;
  }
  handleKeyDown(event) {
    if (event.key === 'Enter' || event.code === 'Space') {
      this.value = event.target.value;
    }
  }
  handleKeyUp(ev) {
    const isArrowLeft = ev.key === 'ArrowLeft';
    const isArrowRight = ev.key === 'ArrowRight';
    const tabIndex = this._getTabIndex(this.value);
    const firstAvailableValue = this.availableValues.at(0);
    const lastAvailableValue = this.availableValues.at(-1);
    const isBeginning = this.value === firstAvailableValue;
    const isEnd = this.value === lastAvailableValue;
    const nextValue = isEnd
      ? firstAvailableValue
      : this.availableValues[tabIndex + 1];
    const previousValue = isBeginning
      ? lastAvailableValue
      : this.availableValues[tabIndex - 1];
    if (!isArrowRight && !isArrowLeft)
      return;
    if (isArrowLeft) {
      this.value = previousValue;
    }
    if (isArrowRight) {
      this.value = nextValue;
    }
    this._handleActiveTab(true);
    this.changeValue.emit(this.value);
  }
  componentDidLoad() {
    this._handleActiveTab();
  }
  get tabs() {
    return Array.from(this.el.childNodes).filter((tab) => tab.tagName === 'C-TAB');
  }
  get setsize() {
    return this.tabs.length;
  }
  get availableValues() {
    return this.tabs.filter((tab) => !tab.disabled).map((tab) => tab.value);
  }
  _getTabIndex(value) {
    return this.availableValues.findIndex((tab) => tab === value);
  }
  _handleActiveTab(isUserAction = false) {
    let position = 0;
    this.tabs.forEach((tab) => {
      if (!tab.disabled) {
        position += 1;
      }
      const isActive = tab.value === this.value;
      tab.active = isActive;
      if (!isUserAction && !tab.disabled) {
        tab.position = position;
        tab.setsize = this.availableValues.length;
      }
      if (isActive && isUserAction) {
        tab.focus();
      }
    });
  }
  render() {
    const classes = {
      'c-tabs': true,
      'c-tabs--borderless': this.borderless,
    };
    return (h(Host, { role: "tablist", class: classes }, h("slot", null)));
  }
  static get is() { return "c-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-tabs.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-tabs.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Currently active tab"
        },
        "attribute": "value",
        "reflect": false
      },
      "borderless": {
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
          "text": "Disable the bottom border"
        },
        "attribute": "borderless",
        "reflect": false,
        "defaultValue": "false"
      }
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
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onExternalValueChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "tabChange",
        "method": "tabChangeHandler",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": true,
        "passive": false
      }, {
        "name": "keyup",
        "method": "handleKeyUp",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=c-tabs.js.map
