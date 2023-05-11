'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');
const mdi = require('./mdi-a24967a4.js');

const cAlertCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-alert{--c-alert-color:var(--csc-primary);display:grid;gap:16px;grid-template-columns:1fr;color:var(--c-alert-color);border:2px solid currentColor;border-left-width:12px;border-radius:6px;padding:12px}.c-alert--info,.c-alert--error,.c-alert--success,.c-alert--warning{grid-template-columns:auto 1fr}.c-alert--info{--c-alert-color:var(--csc-link)}.c-alert--error{--c-alert-color:var(--csc-error)}.c-alert--success{--c-alert-color:var(--csc-success)}.c-alert--warning{--c-alert-color:var(--csc-warning)}.c-alert__content{color:rgba(0, 0, 0, 0.87);display:grid;align-items:center;grid-template-columns:1fr;gap:8px}svg{fill:currentColor}::slotted(*[slot=title]){margin:0 !important;font-size:18px;font-weight:600;line-height:24px}";

const CAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._icons = {
      warning: mdi.mdiAlert,
      error: mdi.mdiCloseCircle,
      success: mdi.mdiCheckCircle,
      info: mdi.mdiInformation,
    };
    this.type = undefined;
  }
  render() {
    const classes = Object.assign({ 'c-alert': true }, (!!this.type && { [`c-alert--${this.type}`]: true }));
    return (index.h(index.Host, null, index.h("div", { class: classes }, !!this.type && (index.h("svg", { width: "22", height: "22", viewBox: "0 0 24 24" }, index.h("path", { d: this._icons[this.type] }))), index.h("div", { class: "c-alert__content" }, index.h("slot", { name: "title" }), index.h("slot", null)))));
  }
};
CAlert.style = cAlertCss;

exports.c_alert = CAlert;

//# sourceMappingURL=c-alert.cjs.entry.js.map