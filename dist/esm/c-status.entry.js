import { r as registerInstance, h, H as Host } from './index-aa797944.js';

const cStatusCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block}.c-status{--c-status-bg:#e5eff1;--c-status-info:#002f5f;--c-status-info-bg:#eef2f8;--c-status-warning:#c74600;--c-status-warning-bg:#fff7e3;--c-status-error:#b90729;--c-status-error-bg:#f8e5e9;--c-status-success:#3a7a06;--c-status-success-bg:#e5f2da;display:inline-flex;min-height:24px;min-width:88px;padding:4px 16px;align-items:center;justify-content:center;border-radius:4px;color:var(--csc-primary);background-color:var(--c-status-bg);position:relative;box-shadow:inset 0 0 0 1px currentColor;overflow:hidden;line-height:1;font-size:14px}.c-status--info{color:var(--c-status-info);background-color:var(--c-status-info-bg)}.c-status--warning{color:var(--c-status-warning);background-color:var(--c-status-warning-bg)}.c-status--error{color:var(--c-status-error);background-color:var(--c-status-error-bg)}.c-status--success{color:var(--c-status-success);background-color:var(--c-status-success-bg)}";

const CStatus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = undefined;
  }
  render() {
    const classes = Object.assign({ 'c-status': true }, (!!this.type && { [`c-status--${this.type}`]: this.type }));
    return (h(Host, null, h("div", { class: classes }, h("slot", null))));
  }
};
CStatus.style = cStatusCss;

export { CStatus as c_status };

//# sourceMappingURL=c-status.entry.js.map