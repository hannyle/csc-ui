import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-aa797944.js';

const cTabsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host(.c-tabs){box-shadow:inset 0 -1px 0 0 var(--csc-light-grey);display:flex;list-style:none;margin:0;padding:0}:host(.c-tabs--borderless){box-shadow:none}";

const CTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeValue = createEvent(this, "changeValue", 3);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["onExternalValueChange"]
  }; }
};
CTabs.style = cTabsCss;

export { CTabs as c_tabs };

//# sourceMappingURL=c-tabs.entry.js.map