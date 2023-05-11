'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');
const utils = require('./utils-ea929613.js');

const cTabCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;user-select:none;flex-grow:1}:host(:focus){outline:none}:host(:focus-visible){border-radius:4px;outline:2px var(--csc-primary) solid;outline-offset:2px}:host([role=tab][aria-disabled=true]){cursor:default !important}slot{pointer-events:none}:host(.c-tab){transition:box-shadow 0.3s ease-in-out;cursor:pointer;display:block;height:50px;line-height:50px;color:var(--csc-primary);font-weight:600;text-align:center;box-shadow:inset 0 0 0 transparent;position:relative;overflow:hidden}:host(.c-tab:hover){background:var(--csc-primary-ghost)}:host(.c-tab--active){color:var(--csc-primary);box-shadow:inset 0 -15px 0 -12px var(--csc-primary)}:host(.c-tab--active:hover){background:transparent !important}:host(.c-tab--disabled){color:var(--csc-mid-grey);cursor:default;opacity:0.75;pointer-events:none}:host(.c-tab button){appearance:none;background-color:transparent;border:none;color:inherit;cursor:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;height:100%;overflow:hidden;position:relative;width:100%}";

const CTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabChange = index.createEvent(this, "tabChange", 7);
    this._onClick = (event, center = false) => {
      if (this.disabled)
        return;
      utils.createRipple(event, this.element, center);
      this.tabChange.emit(this.value);
    };
    this.active = false;
    this.disabled = false;
    this.hostId = undefined;
    this.position = undefined;
    this.setsize = undefined;
    this.value = undefined;
  }
  handleKeydown(event) {
    if (['Space', 'Enter'].includes(event.code)) {
      event.preventDefault();
      this._onClick(event, true);
    }
  }
  render() {
    const classes = {
      'c-tab': true,
      'c-tab--active': this.active,
      'c-tab--disabled': this.disabled,
    };
    const a11y = {
      'aria-disabled': this.disabled.toString(),
      'aria-hidden': this.disabled.toString(),
      'aria-selected': this.active.toString(),
      'aria-setsize': this.setsize,
      'aria-posinset': this.position,
      role: 'tab',
      tabindex: this.active && !this.disabled ? 0 : -1,
    };
    return (index.h(index.Host, Object.assign({}, a11y, { id: this.hostId, class: classes, onClick: this._onClick }), index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};
CTab.style = cTabCss;

exports.c_tab = CTab;

//# sourceMappingURL=c-tab.cjs.entry.js.map