'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');
const index$1 = require('./index-fea31ff9.js');
const v4 = require('./v4-14140ff3.js');

const cToastsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:grid;gap:12px;grid-template-columns:1fr;left:0;padding:12px;pointer-events:none;position:fixed;right:0;z-index:10000;max-width:100%;min-width:30vw;width:640px}:host(.absolute){position:absolute}:host(.bottom){bottom:0}:host(.top){top:0}:host(.right){right:0;left:auto;justify-content:end}:host(.left){right:auto;left:0;justify-content:start}:host(.center){justify-content:center;margin:0 auto}";

const CToasts = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._getDefaultOptions = () => ({
      type: index$1.CToastType.Info,
      duration: 6000,
      persistent: false,
      indeterminate: false,
      position: index$1.CToastPosition.Fixed,
      progress: true,
      id: v4.v4(),
    });
    this.absolute = false;
    this.horizontal = 'center';
    this.vertical = 'bottom';
    this.messages = [];
  }
  async addToast(message) {
    const customMessages = this.messages.filter((message) => message.custom);
    if (message.custom && customMessages.length > 0) {
      console.warn(`Custom toast messages are restricted to 1 visible message due to slot reflection limitations.`);
    }
    else {
      requestAnimationFrame(() => {
        const defaultOptions = this._getDefaultOptions();
        this.messages = [
          ...this.messages,
          Object.assign(Object.assign(Object.assign({}, defaultOptions), message), { duration: +(message === null || message === void 0 ? void 0 : message.duration) > 0
              ? +message.duration
              : defaultOptions.duration }),
        ];
      });
    }
  }
  async removeToast(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.closeToast();
  }
  _onMessageClose(event) {
    this._removeMessage(event.detail.id);
  }
  _removeMessage(id) {
    const toast = this.el.shadowRoot.querySelector(`#c-toast--${id}`);
    toast === null || toast === void 0 ? void 0 : toast.remove();
    const messageCount = this.el.shadowRoot.querySelectorAll('c-toast').length;
    if (messageCount === 0) {
      this.messages = [].slice();
    }
  }
  _renderMessage(message) {
    return (index.h("c-toast", { message: message, onClose: (e) => this._onMessageClose(e) }, message.custom && index.h("slot", null)));
  }
  render() {
    return (index.h(index.Host, { class: {
        absolute: this.absolute,
        [this.vertical]: true,
        [this.horizontal]: true,
      } }, this.messages.map((message) => this._renderMessage(message))));
  }
  get el() { return index.getElement(this); }
};
CToasts.style = cToastsCss;

exports.c_toasts = CToasts;

//# sourceMappingURL=c-toasts.cjs.entry.js.map