'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');

const cStepCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{position:relative;width:180px}:host(.mobile){width:22px;height:22px}:host(.mobile) .c-step__label{display:none}.c-step{--c-step-line-color:var(--csc-mid-grey);display:grid;justify-items:center;padding:0;gap:8px;position:relative}.c-step__indicator .dot{background-color:#fff;box-shadow:inset 0 0 0 2px var(--c-step-line-color);border-radius:22px;height:22px;width:22px;position:relative}.c-step__indicator .dot.current{--c-step-line-color:var(--csc-primary);box-shadow:inset 0 0 0 3px var(--c-step-line-color)}.c-step__indicator .dot.current::before{content:\"\";border-radius:14px;height:10px;width:10px;background-color:var(--c-step-line-color);position:absolute;top:6px;left:6px}.c-step__indicator .complete{display:flex;align-items:center;justify-content:center}.c-step__indicator .complete svg{width:100%;height:100%}.c-step--complete .c-step__indicator>div{--c-step-line-color:var(--csc-primary);position:relative;border-radius:22px;height:22px;width:22px;background-color:var(--c-step-line-color);padding:4px}.c-step--complete .c-step__indicator>div svg{position:relative;fill:#fff}.c-step--complete .c-step__indicator>div svg .path{fill:none;stroke:#fff;stroke-dashoffset:0;stroke-width:13;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}";

const CStep = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.complete = false;
    this.current = false;
  }
  render() {
    const rootClasses = {
      'c-step': true,
      'c-step--complete': this.complete,
    };
    return (index.h("div", { class: rootClasses }, index.h("div", { class: "c-step__indicator" }, !this.complete && (index.h("div", { class: { dot: true, current: this.current } })), this.complete && (index.h("div", { class: "complete" }, index.h("svg", { viewBox: "0 0 100 100" }, index.h("path", { class: "path", d: "M 12 52 l 24 24 l 47 -47 l -3 -3 l -44 44 l -21 -21 l -3 3" }))))), index.h("div", { class: "c-step__label" }, index.h("slot", null))));
  }
};
CStep.style = cStepCss;

exports.c_step = CStep;

//# sourceMappingURL=c-step.cjs.entry.js.map