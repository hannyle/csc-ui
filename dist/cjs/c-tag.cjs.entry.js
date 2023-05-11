'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');

const cTagCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-tag-margin:2px;display:inline-block;cursor:pointer;user-select:none;margin:var(--c-tag-margin)}:host(.fit){display:block;flex-grow:1}:host(.flat){cursor:inherit}:host(:focus){outline:none}:host(:focus-visible){outline:1px black solid}svg{width:14px;height:14px}.row{display:flex;align-items:center;column-gap:8px}.c-tag{background:transparent;border-radius:15px;box-shadow:inset 0px 0px 0px 1px var(--csc-primary);color:var(--csc-primary);display:flex;font-size:14px;font-weight:400;line-height:1.1;min-height:24px;padding:4px 12px;transition:background-color 0.2s ease}.c-tag:hover{background:var(--csc-primary-text-hover);color:var(--csc-primary)}.c-tag.active{background:var(--csc-primary);color:#fff}.c-tag.active:hover{background:#50978d;color:#fff;box-shadow:none}.c-tag.active .badge{background-color:#fff;color:var(--csc-primary)}.c-tag.flat:hover{background:transparent}.c-tag.flat.active:hover{background:var(--csc-primary)}.c-tag .badge{background-color:var(--csc-primary);border-radius:24px;color:#fff;display:grid;font-size:12px;height:16px;line-height:1;min-width:16px;padding:0 4px;place-content:center}.c-tag--badge{padding-left:4px}.c-tag--closeable{padding-right:8px}";

const CTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
    this.fit = false;
    this.flat = false;
    this.closeable = false;
    this.badge = null;
  }
  render() {
    const classes = {
      'c-tag': true,
      'c-tag--closeable': this.closeable,
      'c-tag--badge': !!this.badge || this.badge === 0,
      active: this.active,
      flat: this.flat,
    };
    const hostClasses = {
      fit: this.fit,
      flat: this.flat,
    };
    const hostParams = Object.assign({ tabindex: 0 }, (!this.flat && {
      role: 'button',
    }));
    return (index.h(index.Host, Object.assign({ tabindex: "0" }, hostParams, { class: hostClasses }), index.h("div", { class: classes }, index.h("div", { class: "row" }, !!this.badge && index.h("div", { class: "badge" }, this.badge), index.h("slot", null), this.closeable && (index.h("svg", { viewBox: "0 0 24 24" }, index.h("path", { fill: "currentColor", d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })))))));
  }
};
CTag.style = cTagCss;

exports.c_tag = CTag;

//# sourceMappingURL=c-tag.cjs.entry.js.map