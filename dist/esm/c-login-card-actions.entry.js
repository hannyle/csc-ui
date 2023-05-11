import { r as registerInstance, h } from './index-aa797944.js';

const CLoginCardActions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.align = 'center';
    this.justify = 'start';
  }
  render() {
    return (h("c-card-actions", { align: this.align, justify: this.justify, style: { padding: '0px' } }, h("slot", null)));
  }
};

export { CLoginCardActions as c_login_card_actions };

//# sourceMappingURL=c-login-card-actions.entry.js.map