'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');

const CLoginCardActions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    return (index.h("c-card-actions", { align: this.align, justify: this.justify, style: { padding: '0px' } }, index.h("slot", null)));
  }
};

exports.c_login_card_actions = CLoginCardActions;

//# sourceMappingURL=c-login-card-actions.cjs.entry.js.map