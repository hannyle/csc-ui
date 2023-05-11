'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-274b3d40.js');
const mdi = require('./mdi-a24967a4.js');
const utils = require('./utils-ea929613.js');

const cButtonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-outline-color:var(--csc-primary);display:inline-flex}:host(.inverted){--c-outline-color:#fff}::slotted([slot=icon]){font-size:var(--c-button-icon-size)}::slotted(svg){fill:var(--c-color)}a{text-decoration:none}button,a{font-family:var(--csc-font-family);display:flex;border:none;padding:0;background:transparent;border-radius:var(--c-radius);position:relative;overflow:hidden;margin:0}button:not(.grouped),a:not(.grouped){--c-radius:4px}button.no-radius,a.no-radius{--c-radius:0}button:focus,a:focus{outline:2px var(--c-outline-color) solid;outline-offset:2px}@supports selector(:focus-visible){button:focus,a:focus{outline:none}}button:focus-visible,a:focus-visible{outline:2px var(--c-outline-color) solid;outline-offset:2px}button.grouped,a.grouped{flex:1;transform:translateZ(0)}button.grouped:focus,button.grouped:focus-visible,a.grouped:focus,a.grouped:focus-visible{outline-offset:4px;z-index:1}button.fit,a.fit{flex-grow:1 !important;width:100%}@media (max-width: 767px){.full-width-mobile{max-width:100% !important;width:100% !important;margin:0 !important}.full-width-mobile .c-button-padding{padding:24px 38px}.full-width{flex-grow:1 !important}}.c-button{--c-height:44px;--c-padding:0 16px;--c-font-size:16px;--c-background-color:var(--csc-primary);--c-color:#fff;--c-hover-background:var(--csc-primary-hover);--c-button-icon-size:24px;background-color:var(--c-background-color);border-radius:var(--c-radius);position:relative;cursor:pointer;box-shadow:none;outline:none;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);transition:background-color 0.3s;color:var(--c-color);margin:0;text-decoration:none;display:inline-block;text-align:center;font-size:var(--c-font-size);font-weight:700;line-height:18px;user-select:none;min-width:88px;white-space:nowrap}.c-button *{pointer-events:none}.c-button svg{fill:var(--c-color);height:var(--c-button-icon-size);width:var(--c-button-icon-size)}.c-button svg.icon-by-path{margin-right:8px}.c-button svg.button-icon{margin-right:16px;font-size:10px;margin-left:-8px;margin-bottom:-2px}.c-button:hover{background-color:var(--c-hover-background)}.c-button--inverted{--c-background-color:#fff;--c-color:var(--csc-primary);--c-hover-background:rgba(255, 255, 255, 0.85)}.c-button--small{--c-height:28px;--c-padding:0 12px;--c-font-size:14px;--c-button-icon-size:20px}.c-button--large{--c-height:52px;--c-padding:0 24px;--c-font-size:18px}.c-button--ghost{--c-background-color:var(--csc-primary-ghost);--c-color:var(--csc-primary);--c-hover-background:var(--csc-primary-ghost-hover)}.c-button--ghost.c-button--inverted{--c-background-color:rgba(255, 255, 255, 0.15);--c-color:#fff;--c-hover-background:rgba(255, 255, 255, 0.25)}.c-button--ghost.c-button--disabled{--c-background-color:var(--csc-lightest-grey);--c-hover-background:var(--csc-lightest-grey)}.c-button--text{--c-background-color:transparent;--c-color:var(--csc-primary);--c-hover-background:var(--csc-primary-text-hover)}.c-button--text.c-button--inverted{--c-color:#fff;--c-hover-background:rgba(255, 255, 255, 0.15)}.c-button--text.c-button--disabled{--c-background-color:transparent;--c-hover-background:transparent}.c-button--outlined{--c-background-color:transparent;--c-color:var(--csc-primary);--c-hover-background:var(--csc-primary-text-hover);box-shadow:inset 0 0 0 2px var(--c-color)}.c-button--outlined.c-button--inverted{--c-color:#fff;--c-hover-background:rgba(255, 255, 255, 0.15)}.c-button--outlined.c-button--disabled{--c-background-color:transparent;--c-hover-background:transparent}.c-button--outlined.c-button--grouped{--c-background-color:#fff;--c-hover-background:var(--csc-primary-text-hover)}.c-button--outlined.c-button--grouped::before,.c-button--outlined.c-button--grouped::after{background-color:#fff;content:\"\";height:100%;left:0;position:absolute;top:0;transition:background-color 0.3s ease-in-out;width:100%;z-index:-1}.c-button--outlined.c-button--grouped:hover{background-color:#fff}.c-button--outlined.c-button--grouped:hover::after{background-color:var(--csc-primary-text-hover)}.c-button--disabled{--c-color:var(--csc-mid-grey);--c-background-color:var(--csc-light-grey);--c-hover-background:var(--csc-light-grey);cursor:default !important;pointer-events:none}.c-button--disabled.outlined{--c-background-color:transparent;--c-hover-background:transparent;--c-color:var(--csc-mid-grey)}.c-button--disabled.grouped{box-shadow:none !important}.c-button--disabled.grouped:not(.outlined){color:var(--csc-dark-grey) !important;box-shadow:none}.c-button--no-radius{--c-radius:0}.c-button--fitted{width:100%}.c-button.grouped{border-radius:0;white-space:nowrap;border:none;box-shadow:none;flex-grow:1}.c-button--description{display:grid;grid-template-columns:1fr;gap:0}.c-button__content{display:flex;gap:8px;height:var(--c-height);align-items:center;justify-content:center;padding:var(--c-padding)}.c-button__description{font-weight:400;font-size:12px;padding:0 12px 12px}.c-button__description--loading{opacity:0.5}.spinner__circle{animation:2s ease-in-out infinite both circle-animation;display:block;fill:transparent;stroke:var(--c-color);stroke-linecap:round;stroke-dasharray:283;stroke-dashoffset:280;stroke-width:10px;transform-origin:50% 50%}.fit{width:100%}.hide-text{color:transparent !important}.hide-text svg{fill:transparent !important}.hide-text .outlined.c-button svg{fill:transparent !important}.spinner_wrapper{width:100%;position:absolute;height:var(--c-height);display:grid;place-content:center}.spinner_wrapper.dense_spinner{padding-top:7px}.spinner_wrapper.dense_spinner .spinner{max-width:24px}.spinner{animation:3s linear infinite svg-animation;max-width:30px;position:relative;height:calc(var(--c-height) - 12px)}@keyframes svg-animation{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes circle-animation{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";

const CButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabChange = index.createEvent(this, "tabChange", 7);
    this._onClick = (event, center = false) => {
      var _a;
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      utils.createRipple(event, this._container, center);
      this.tabChange.emit((_a = this.value) !== null && _a !== void 0 ? _a : this.hostElement.dataset.index);
      if (this.type === 'submit') {
        this._closestElementComposed('form', this._container).submit();
      }
    };
    this._onKeyDown = (event) => {
      if (['Space', 'Enter'].includes(event.code)) {
        if (!this.href) {
          event.preventDefault();
        }
        this._onClick(event, true);
      }
    };
    this.inverted = false;
    this.outlined = false;
    this.ghost = false;
    this.grouped = false;
    this.text = false;
    this.loading = false;
    this.fit = false;
    this.noRadius = false;
    this.iconEnd = false;
    this.type = 'button';
    this.disabled = false;
    this.icon = undefined;
    this.value = undefined;
    this.hostId = undefined;
    this.size = 'default';
    this.href = undefined;
    this.path = null;
    this.target = '_blank';
  }
  _closestElementComposed(selector, base) {
    function __closestFrom(el) {
      const found = el.closest(selector);
      return found ? found : __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  componentWillLoad() {
    this._containerhasDescriptionSlot = !!this.hostElement.querySelector('[slot="description"]');
  }
  render() {
    const SPINNER_SMALL = (index.h("svg", { class: "spinner", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg" }, index.h("circle", { class: "spinner__circle", cx: "50", cy: "50", r: "45" })));
    let selectedIcon = null;
    let svg;
    if (this.icon) {
      const icons = {
        plus: mdi.mdiPlus,
        minus: mdi.mdiMinus,
        account: mdi.mdiAccount,
        edit: mdi.mdiPencil,
      };
      selectedIcon = icons[this.icon];
      svg = (index.h("svg", { class: "button-icon", width: "16", height: "16", viewBox: "0 0 22 22" }, index.h("path", { d: selectedIcon })));
    }
    const contentClasses = {
      'c-button': true,
      'c-button--description': this._containerhasDescriptionSlot,
      'c-button--disabled': !!this.disabled,
      'c-button--fitted': !!this.fit,
      'c-button--ghost': !!this.ghost,
      'c-button--large': this.size === 'large',
      'c-button--no-radius': !!this.noRadius,
      'c-button--outlined': !!this.outlined,
      'c-button--small': this.size === 'small',
      'c-button--text': !!this.text,
      'c-button--grouped': this.grouped,
      'c-button--inverted': this.inverted,
    };
    const innerClasses = {
      'c-button__content': true,
      'hide-text': this.loading,
    };
    const buttonClasses = {
      fit: !!this.fit,
      'no-radius': !!this.noRadius,
      grouped: this.grouped,
    };
    const hostClasses = {
      'c-button--active': this.grouped && !this.outlined,
      inverted: this.inverted,
    };
    const descriptionSlotClasses = {
      'c-button__description': this._containerhasDescriptionSlot,
      'c-button__description--loading': this.loading,
    };
    const Tag = !!this.href ? 'a' : 'button';
    const attributes = {
      id: this.hostId,
      class: buttonClasses,
      tabindex: this.disabled ? -1 : 0,
      role: 'button',
      disabled: this.disabled,
      onKeyDown: this._onKeyDown,
      onClick: this._onClick,
    };
    let linkAttributes = {};
    if (!!this.href) {
      linkAttributes = { href: this.href, target: this.target };
    }
    const renderIcon = (index.h("slot", { name: "icon" }, this.path && (index.h("svg", { class: "icon-by-path", width: "24", height: "24", viewBox: "0 0 24 24" }, index.h("path", { d: this.path })))));
    return (index.h(index.Host, { class: hostClasses }, index.h(Tag, Object.assign({}, attributes, linkAttributes), index.h("div", { class: contentClasses, ref: (el) => (this._container = el) }, this.loading && index.h("div", { class: "spinner_wrapper" }, SPINNER_SMALL), index.h("div", { class: innerClasses }, !this.iconEnd && renderIcon, svg, index.h("slot", null), this.iconEnd && renderIcon), this._containerhasDescriptionSlot && (index.h("div", { class: descriptionSlotClasses }, index.h("slot", { name: "description" })))))));
  }
  get hostElement() { return index.getElement(this); }
};
CButton.style = cButtonCss;

const cCardCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-card-gap:24px;border-radius:6px;box-shadow:rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 5px 5px;display:flex;flex-direction:column;gap:var(--c-card-gap);padding:var(--c-card-gap) 0;position:relative}::slotted(c-loader){border-radius:6px}:host(.c-card--fullscreen){height:100vh;left:0 !important;overflow-y:scroll;position:fixed;top:0 !important;width:100vw;z-index:10}.c-card__fullscreen-toggle{position:absolute;right:24px;top:24px}";

const CCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._allowedBackgrounds = ['puhti', 'mahti', 'allas'];
    this.background = undefined;
    this.backgroundColor = 'white';
    this.fullscreen = false;
    this.isFullscreen = false;
  }
  _onFullscreen() {
    var _a, _b;
    this.isFullscreen = !this.isFullscreen;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = this.isFullscreen
        ? 'block'
        : 'flex';
    }
  }
  componentDidLoad() {
    const title = this.host.querySelector('c-card-title');
    if (!!title && this.fullscreen) {
      title.style.marginRight = '40px';
    }
  }
  async exitFullscreen() {
    var _a, _b;
    this.isFullscreen = false;
    const modalWrapper = (_b = (_a = this.host.parentElement) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.modal-wrapper');
    if (modalWrapper) {
      modalWrapper.style.display = 'flex';
    }
  }
  async enterFullscreen() {
    this.isFullscreen = true;
  }
  render() {
    const style = {
      'background-color': this.backgroundColor,
    };
    const hostClasses = {
      'c-card': true,
      'c-card--fullscreen': this.isFullscreen,
    };
    if (this._allowedBackgrounds.includes(this.background)) {
      style['background-image'] = `url(${index.getAssetPath(`./assets/${this.background}.gif`)}`;
      style['background-size'] = 'cover';
      style['background-position-y'] = 'bottom';
    }
    return (index.h(index.Host, { class: hostClasses, style: style }, this.fullscreen && (index.h("c-icon-button", { "aria-hidden": "true", class: "c-card__fullscreen-toggle", size: "small", title: this.isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen', text: true, onClick: () => this._onFullscreen() }, index.h("c-icon", { path: this.isFullscreen ? mdi.mdiFullscreenExit : mdi.mdiFullscreen }))), index.h("slot", null)));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return index.getElement(this); }
};
CCard.style = cCardCss;

const cContainerCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;margin-left:auto;margin-right:auto;max-width:1200px}:host(.padding){padding:24px}";

const CContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.width = undefined;
  }
  render() {
    let style = {};
    if (this.width > 0) {
      style = { 'max-width': `${this.width}px` };
    }
    return (index.h(index.Host, { style: style }, index.h("slot", null)));
  }
};
CContainer.style = cContainerCss;

const cCscLogoCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;margin-top:4px}svg .cls-1{fill:none}svg .cls-2{clip-path:url(#clip-path)}svg .cls-3{fill:#5e6a71}svg .cls-4{fill:var(--csc-primary)}svg .cls-5{fill:#830051}";

const CCscLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.width = 60;
  }
  render() {
    const svg = (index.h("svg", { viewBox: "0 0 233.61 149.04" }, index.h("defs", null, index.h("clipPath", { id: "clip-path", transform: "translate(0)" }, index.h("rect", { class: "cls-1", width: "233.61", height: "156.31" }))), index.h("title", null, "CSC_logo_no_tagline"), index.h("g", { id: "Layer_2", "data-name": "Layer 2" }, index.h("g", { id: "Layer_1-2", "data-name": "Layer 1" }, index.h("g", { class: "cls-2" }, index.h("path", { class: "cls-3", d: "M97.24,130.66l-.27-.17a.69.69,0,0,1-.44.19,14.57,14.57,0,0,1-1.87-1.07,9.29,9.29,0,0,0-4.46-1.06c-6,0-9.21,4.93-9.21,10.24S84.22,149,90.09,149c4.6,0,5.89-2.57,7-2.57a2.17,2.17,0,0,1,.25.05l.22-.11-2.44-3.34-.28.17a1.84,1.84,0,0,1,.06.41c0,1.34-2.36,2.71-4.64,2.65-4.33-.08-6.08-3.72-6.08-7.56s1.86-7.45,6-7.45c2.2,0,4.44,1.15,4.44,2.21,0,.25.06.41,0,.53l.33.13ZM108,146.72l.32.13a.75.75,0,0,1,.42-.22,12.54,12.54,0,0,0,7.62,2.41c4.32,0,7.28-2.49,7.28-6.19,0-8.14-11.86-4.17-11.86-8.6,0-1.7,1-3,4.11-3,2.41,0,5.26,1,5.26,2.49a.92.92,0,0,1,0,.3l.36.17,1.92-4.14-.28-.11a.85.85,0,0,1-.62.3,11.61,11.61,0,0,1-1.95-.88,11,11,0,0,0-4.5-.87c-4.33,0-7.4,2.08-7.4,5.8,0,7.82,11.76,3.68,11.76,8.67,0,2.27-1.65,3.28-4,3.28-2.77,0-6.11-1.53-6.11-3a1.89,1.89,0,0,1,0-.41l-.31-.17Zm42.56-16.06-.28-.17a.64.64,0,0,1-.43.19,14.57,14.57,0,0,1-1.87-1.07,9.3,9.3,0,0,0-4.47-1.06c-6,0-9.21,4.93-9.21,10.24S137.5,149,143.37,149c4.6,0,5.89-2.57,7-2.57a1.59,1.59,0,0,1,.24.05l.22-.11-2.44-3.34-.27.17a1.84,1.84,0,0,1,.05.41c0,1.34-2.35,2.71-4.63,2.65-4.33-.08-6.08-3.72-6.08-7.56s1.86-7.45,6-7.45c2.2,0,4.44,1.15,4.44,2.21a1.82,1.82,0,0,1,0,.53l.33.13Z", transform: "translate(0)" }), index.h("path", { class: "cls-4", d: "M117.26,117.71s-2.66-.42-2.72-1.66c-2.41-54.33-7.39-52.22-111.82-54.33-2,0-2.72-2.87-2.72-2.87H117.26Z", transform: "translate(0)" }), index.h("path", { class: "cls-5", d: "M116.35,0s2.66.42,2.72,1.66C121.49,56,126.46,53.88,230.89,56c2,0,2.72,2.87,2.72,2.87H116.35Z", transform: "translate(0)" }))))));
    return index.h(index.Host, { style: { width: `${this.width}px` } }, svg);
  }
};
CCscLogo.style = cCscLogoCss;

const cFlexCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;flex:1}";

const CFlex = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
CFlex.style = cFlexCss;

const cIconCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block}";

const CIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.path = undefined;
    this.size = 24;
    this.color = 'var(--csc-primary)';
  }
  render() {
    return (index.h(index.Host, { style: { height: `${this.size}px` } }, index.h("svg", { width: this.size, height: this.size, viewBox: "0 0 24 24" }, index.h("path", { d: this.path, style: { fill: this.color } }))));
  }
};
CIcon.style = cIconCss;

const cIconButtonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}button.icon-button{font-family:var(--csc-font-family);display:flex;border:none;padding:0;width:40px;height:40px;background:var(--csc-primary);color:#fff;transition:background-color 0.3s ease;border-radius:50%;cursor:pointer;position:relative;align-items:center;justify-content:center;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;transform:translate3d(0, 0, 0);-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0)}button.icon-button ::slotted(svg),button.icon-button ::slotted(i),button.icon-button ::slotted(span){width:24px;height:24px;font-size:24px}button.icon-button ::slotted(*),button.icon-button svg{display:flex;align-items:center;justify-content:center}button.icon-button--small{width:32px;height:32px}button.icon-button--small ::slotted(svg),button.icon-button--small ::slotted(i),button.icon-button--small ::slotted(span){width:22px !important;height:22px !important;font-size:16px !important}button.icon-button--x-small{width:28px;height:28px}button.icon-button--x-small ::slotted(svg),button.icon-button--x-small ::slotted(i),button.icon-button--x-small ::slotted(span){width:18px !important;height:18px !important;font-size:14px !important}button.icon-button:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){button.icon-button:focus{outline:none}}button.icon-button:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}button.icon-button.ghost{background:var(--csc-primary-ghost);color:var(--csc-primary)}button.icon-button.ghost ::slotted(*),button.icon-button.ghost svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.ghost:hover{background:var(--csc-primary-ghost-hover)}button.icon-button.ghost.inverted{color:#fff;background:rgba(255, 255, 255, 0.15)}button.icon-button.ghost.inverted ::slotted(*),button.icon-button.ghost.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.ghost.inverted:hover{background:rgba(255, 255, 255, 0.25)}button.icon-button.text{background:transparent;color:var(--csc-primary)}button.icon-button.text ::slotted(*),button.icon-button.text svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.text:hover{background:var(--csc-primary-text-hover)}button.icon-button.text.inverted{color:#fff}button.icon-button.text.inverted ::slotted(*),button.icon-button.text.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.text.inverted:hover{background:rgba(255, 255, 255, 0.15)}button.icon-button.outlined{background:transparent;box-shadow:inset 0 0 0 2px var(--csc-primary);color:var(--csc-primary)}button.icon-button.outlined ::slotted(*),button.icon-button.outlined svg{color:var(--csc-primary) !important;fill:var(--csc-primary) !important}button.icon-button.outlined.disabled{background:transparent;box-shadow:inset 0 0 0 2px #acacac}button.icon-button.outlined:hover{background:var(--csc-primary-text-hover)}button.icon-button.outlined.inverted{color:#fff;box-shadow:inset 0 0 0 2px #fff}button.icon-button.outlined.inverted ::slotted(*),button.icon-button.outlined.inverted svg{color:#fff !important;fill:#fff !important}button.icon-button.outlined.inverted:hover{background:rgba(255, 255, 255, 0.15)}button.icon-button.disabled{background:var(--csc-light-grey);pointer-events:none}button.icon-button.disabled ::slotted(*),button.icon-button.disabled svg{color:var(--csc-mid-grey) !important;fill:var(--csc-mid-grey) !important}button.icon-button.disabled.text{background:transparent}button.icon-button.disabled.ghost{background:var(--csc-lightest-grey)}button.icon-button.disabled:hover{background:transparent}button.icon-button:hover{background:var(--csc-primary-hover)}::slotted(*),svg{color:rgb(255, 255, 255);fill:rgb(255, 255, 255);pointer-events:none}.icon-button-badge{background:#ff5800;border-radius:16px;display:flex;align-items:center;justify-content:center;min-width:16px;height:16px;color:#fff;position:absolute;right:-6px;font-size:12px;box-shadow:0 0 0 2px #fff;top:-6px;padding:0 4px}.inner-container{top:0;bottom:0;right:0;left:0;display:flex;align-items:center;justify-content:center;height:100%;border-radius:50%;overflow:hidden;position:relative;transform:translateZ(0);width:100%}.ripple{transition:background 0.5s;background-position:center;position:absolute;border-radius:50%}.ripple:hover{background:rgba(255, 255, 255, 0) radial-gradient(circle, transparent 1%, rgba(255, 255, 255, 0.15) 1%) center/15000%}.ripple:active{background-color:rgba(255, 255, 255, 0.25);background-size:100%;transition:background 0s}.disabled .icon-button-badge{background:#acacac}.outlined .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.outlined .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}.text .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.text .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}.ghost .ripple:hover{background:rgba(0, 103, 120, 0) radial-gradient(circle, transparent 1%, rgba(0, 103, 120, 0.05) 1%) center/15000%}.ghost .ripple:active{background-color:rgba(0, 103, 120, 0.15);background-size:100%;transition:background 0s}";

const CIconButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._onClick = (event) => {
      utils.createRipple(event, this._container);
    };
    this.badge = undefined;
    this.text = false;
    this.inverted = false;
    this.outlined = false;
    this.path = null;
    this.ghost = false;
    this.disabled = false;
    this.size = 'default';
  }
  _renderBadge() {
    return index.h("div", { class: "icon-button-badge" }, this.badge);
  }
  _outerClasses() {
    return {
      'icon-button': true,
      disabled: !!this.disabled,
      text: !!this.text,
      ghost: !!this.ghost,
      outlined: !!this.outlined,
      inverted: !!this.inverted,
      'icon-button--small': this.size === 'small',
      'icon-button--x-small': this.size === 'x-small',
    };
  }
  render() {
    return (index.h("button", { class: this._outerClasses(), onClick: this._onClick }, index.h("div", { class: "inner-container", ref: (el) => (this._container = el) }, index.h("slot", null, this.path && (index.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, index.h("path", { d: this.path }))))), this.badge && this._renderBadge()));
  }
};
CIconButton.style = cIconButtonCss;

const cLoaderCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{width:100%;position:absolute;top:0;left:0;right:0;bottom:0;z-index:6;background:rgba(255, 255, 255, 0.8);border-radius:inherit;visibility:hidden;opacity:0;transition:opacity 0.3s ease-in-out}:host(.active){opacity:1;visibility:visible}:host(.active) .c-loader{transform:scale(1)}:host{--rotation-animation-speed:2s;--rotation-animation-easing:linear;--stroke-animation-speed:1.5s;--stroke-animation-easing:ease-in-out;--stroke-width:4px;--stroke-start-dasharray:1, 200;--stroke-end-dasharray:89, 200}.c-loader{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:scale(0.5);transition:transform 0.3s ease-in-out}.c-loader__loader{height:var(--c-loader-size);width:var(--c-loader-size);animation:rotate var(--rotation-animation-speed) var(--rotation-animation-easing) infinite}.c-loader__loader-path{fill:none;stroke-width:var(--stroke-width);animation:animate-stroke var(--stroke-animation-speed) var(--stroke-animation-easing) infinite;stroke-linecap:round;stroke:var(--csc-primary)}.c-loader__slot{line-height:40px;font-size:14px;color:var(--csc-mid-grey);text-align:center;font-weight:500;display:block;max-height:0px;overflow:hidden;animation-duration:4s;animation-direction:forwards;animation-iteration-count:1;animation-name:fadein;animation-fill-mode:forwards}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes animate-stroke{0%{stroke-dasharray:var(--stroke-start-dasharray);stroke-dashoffset:0}50%{stroke-dasharray:var(--stroke-end-dasharray);stroke-dashoffset:-35}100%{stroke-dasharray:var(--stroke-end-dasharray);stroke-dashoffset:-124}}@keyframes fadein{0%{max-height:0px}100%{max-height:300px}}";

const CLoader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.contentdelay = 0;
    this.hide = false;
    this.size = 48;
  }
  onElementHide(hide) {
    this.el.classList.toggle('active', !hide);
  }
  componentDidLoad() {
    this.el.classList.toggle('active', !this.hide);
  }
  render() {
    const slotHasContent = !!this.el.childNodes.length;
    const styles = {
      '--c-loader-size': `${this.size}px`,
    };
    return (index.h(index.Host, null, index.h("div", { class: "c-loader", style: styles }, index.h("svg", { class: "c-loader__loader", viewBox: "25 25 50 50" }, index.h("circle", { class: "c-loader__loader-path", cx: "50", cy: "50", r: "20" })), slotHasContent && (index.h("div", { class: "c-loader__slot", style: { 'animation-delay': `${this.contentdelay}s` } }, index.h("slot", null))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "hide": ["onElementHide"]
  }; }
};
CLoader.style = cLoaderCss;

const cMainCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;background:#D8E8EA;height:100vh;display:flex;flex-direction:column}";

const CMain = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
CMain.style = cMainCss;

const cNavigationbuttonCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;margin-right:0px;padding-right:12px;padding-left:12px;padding-top:14px;padding-bottom:10px;cursor:pointer;user-select:none}";

const CNavigationbutton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._svg = (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "15.33", viewBox: "0 0 20 15.33" }, index.h("line", { id: "Line_300", "data-name": "Line 300", x2: "18", transform: "translate(1 1)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), index.h("line", { id: "Line_301", "data-name": "Line 301", x2: "18", transform: "translate(1 7.67)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), index.h("line", { id: "Line_302", "data-name": "Line 302", x2: "18", transform: "translate(1 14.33)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" })));
  }
  render() {
    return index.h(index.Host, { tabindex: 0 }, this._svg);
  }
};
CNavigationbutton.style = cNavigationbuttonCss;

const cRowCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-row{display:flex;flex:1 1 auto;flex-wrap:wrap;gap:var(--row-gap)}.c-row slot{display:flex;flex-wrap:wrap;width:100%;gap:var(--row-gap)}.c-row--nowrap slot{flex-wrap:nowrap !important}.c-row--align-center slot{align-items:center}.c-row--align-start slot{align-items:flex-start}.c-row--align-center slot{align-items:center}.c-row--align-end slot{align-items:flex-end}.c-row--justify-start slot{justify-content:flex-start}.c-row--justify-center slot{justify-content:center}.c-row--justify-end slot{justify-content:flex-end}.c-row--justify-space-between slot{justify-content:space-between}.c-row--justify-space-around slot{justify-content:space-around}";

const CRow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.gap = 0;
    this.nowrap = false;
    this.align = 'start';
    this.justify = 'start';
  }
  render() {
    const classes = {
      'c-row': true,
      'c-row--nowrap': this.nowrap,
      [`c-row--align-${this.align}`]: true,
      [`c-row--justify-${this.justify}`]: true,
    };
    return (index.h("div", { class: classes, style: { '--row-gap': `${this.gap}px` } }, index.h("slot", null)));
  }
};
CRow.style = cRowCss;

const cSidenavigationCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host::-webkit-scrollbar{width:12px;background:#d8e8ea}:host::-webkit-scrollbar-track{border-radius:10px}:host::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.3);border-radius:10px;border:solid 3px #d8e8ea}:host(.autoheight){height:calc(100vh - 60px);overflow-y:auto;overflow-x:hidden}:host(.desktop){flex-grow:1;display:flex;flex-shrink:2;flex-basis:260px;max-width:320px;background:var(--csc-primary)}.c-sidenavigation{background:var(--csc-primary);display:flex;flex-flow:column nowrap;flex:1;gap:4px;min-height:fit-content;padding:24px 0px 24px 24px;position:relative;transition:transform 0.3s ease;width:100%;z-index:8}.c-sidenavigation__content{display:flex;flex-direction:column;flex-basis:260px;flex-grow:1;flex-shrink:2;width:320px}.c-sidenavigation__content--mobile{height:100vh;max-width:320px;overflow-y:scroll;position:fixed;right:0;top:0;transition:transform 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);transform:translateX(0%);z-index:999}.c-sidenavigation__content--mobile.c-sidenavigation__content--hidden{transform:translateX(100%)}.c-sidenavigation__content--mobile>nav{min-height:auto;padding-top:0}.c-sidenavigation__burger{background-color:var(--csc-primary);display:flex;justify-content:flex-end;padding:8px 16px}.c-sidenavigation ul{display:flex;flex-flow:column nowrap;gap:8px;list-style:none;margin:0;padding:0}.autoheight>nav{height:calc(100vh - 60px);overflow-x:hidden;overflow-y:auto}.vertical-spacer{flex:1;margin-bottom:8px}.c-overlay{background:rgba(0, 0, 0, 0.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:998}@keyframes fadeIn{0%{background:rgba(0, 0, 0, 0)}100%{background:rgba(0, 0, 0, 0.5)}}.c-fadeIn{animation-duration:0.5s;animation-iteration-count:1;animation-name:fadeIn;z-index:997}c-sidenavigationitem,c-subnavigationitem{display:contents}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}";

const CSidenavigation = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = undefined;
    this.menuVisible = false;
  }
  handleChange(event) {
    const slotted = this.host.querySelectorAll('c-sidenavigationitem');
    const target = event.target;
    const { active } = target;
    slotted.forEach((item) => {
      if (item.querySelector('[slot="subnavitem"]')) {
        item.active = false;
      }
    });
    if (target.querySelector('[slot="subnavitem"]')) {
      target.active = !active;
    }
    else {
      target.active = true;
    }
  }
  componentDidLoad() {
    const el = document.querySelector('body');
    ['click', 'keyup'].forEach((eventType) => {
      el.addEventListener(eventType, (e) => {
        if (e.target.matches('c-navigationbutton')) {
          if (eventType === 'click') {
            this.menuVisible = !this.menuVisible;
          }
          else if (e instanceof KeyboardEvent && e.key === 'Enter') {
            this.menuVisible = !this.menuVisible;
          }
        }
      });
    });
  }
  _closeMenu() {
    this.menuVisible = false;
  }
  render() {
    const classes = {
      'c-sidenavigation': true,
      'hide-menu': !this.menuVisible,
      mobile: !!this.mobile,
      desktop: !this.mobile,
    };
    const containerClasses = {
      'c-sidenavigation__content': true,
      'c-sidenavigation__content--hidden': !this.menuVisible,
      'c-sidenavigation__content--mobile': !!this.mobile,
      'c-sidenavigation__content--desktop': !this.mobile,
    };
    return (index.h(index.Host, { class: { desktop: !this.mobile } }, index.h("div", { class: containerClasses }, this.mobile && (index.h("div", { class: "c-sidenavigation__burger" }, index.h("c-icon-button", { inverted: true, text: true, onClick: () => this._closeMenu() }, index.h("span", { class: "visuallyhidden" }, "Close sidemenu"), index.h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, index.h("path", { d: mdi.mdiArrowRight }))))), index.h("nav", { class: classes, role: "menubar" }, index.h("slot", null), index.h("div", { class: "vertical-spacer" }), index.h("slot", { name: "bottom" }))), this.menuVisible && this.mobile && (index.h("div", { class: "c-overlay c-fadeIn", onClick: () => this._closeMenu() }))));
  }
  get host() { return index.getElement(this); }
};
CSidenavigation.style = cSidenavigationCss;

const cSidenavigationitemCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host(.c-sidenavigation-item){align-items:center;backface-visibility:hidden;background-color:rgba(216, 232, 234, 0);border-radius:4px 0 0 4px;color:#fff;cursor:pointer;display:grid;grid-template-columns:1fr;font-weight:400;overflow:hidden;position:relative;transform:translate3d(0, 0, 0);user-select:none;min-width:296px}:host(.c-sidenavigation-item:hover){background-color:rgba(216, 232, 234, 0.2666666667)}:host(.c-sidenavigation-item:focus){outline:none}:host(.c-sidenavigation-item:focus-visible){border-radius:4px 0 0 4px;outline:2px #fff solid;outline-offset:2px}:host(.c-sidenavigation-item.active){background-color:#d8e8ea;color:var(--csc-primary)}:host(.c-sidenavigation-item.active) .svg{fill:var(--csc-primary);transform:rotate(90deg)}:host(.c-sidenavigation-item.active) .c-sidenavigation-item__header{color:var(--csc-primary)}.c-sidenavigation-item__header{align-items:center;color:#fff;display:grid;gap:8px;grid-template-columns:1fr;min-height:46px;padding:0 12px}.c-sidenavigation-item__header--expandable{grid-template-columns:auto 1fr}.c-sidenavigation-item__slot{max-width:100%;overflow:hidden}:host(.c-sidenavigation-item--parent.active){padding-bottom:4px}::slotted(span){margin-right:8px;font-size:20px}::slotted([slot=main]){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.styleMain{padding-left:16px}.subnavitem{height:0;overflow-y:hidden;transition:all 500ms ease;width:100%}.subnavactive{height:max-content;width:100%}.svg{align-self:center;fill:#fff;transition:transform 0.3s ease}:host>div.active .svg{fill:var(--csc-primary);transform:rotate(90deg)}.svg.hidden{opacity:0}.middle{display:flex;height:100%;align-items:center}";

const CSidenavigationitem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemChange = index.createEvent(this, "itemChange", 7);
    this._slotHasContent = false;
    this.active = undefined;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  onActiveChange(active) {
    this._handleChildFocusableChange(active);
  }
  _handleChildFocusableChange(focusable) {
    if (!this._slotHasContent)
      return;
    const children = Array.from(this.hostElement.querySelector('[slot="subnavitem"]').children);
    children.forEach((child) => {
      child.ariaHidden = (!focusable).toString();
      child.focusable = focusable;
    });
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      !(event instanceof KeyboardEvent)) {
      this.itemChange.emit(event);
      if (!this._slotHasContent) {
        const sidenav = document.querySelector('c-sidenavigation');
        sidenav.menuVisible = false;
      }
      if (this.href) {
        if (this.target) {
          window.open(this.href, this.target);
        }
        else {
          window.location.href = this.href;
        }
      }
    }
  }
  componentWillLoad() {
    var _a, _b;
    this._slotHasContent = !!this.hostElement.querySelector('[slot="subnavitem"]');
    const children = Array.from(this.hostElement.querySelector('[slot="main"]').childNodes);
    this._ariaLabel = (_b = (_a = children.find((c) => !!c.nodeValue)) === null || _a === void 0 ? void 0 : _a.nodeValue) === null || _b === void 0 ? void 0 : _b.trim();
    this._handleChildFocusableChange(this.active);
  }
  render() {
    var _a, _b;
    const classes = {
      'c-sidenavigation-item': true,
      'c-sidenavigation-item--parent': this._slotHasContent,
      active: this.active,
    };
    const subNavigationClasses = {
      subnavactive: this.active,
      subnavitem: !this.active,
    };
    const a11y = {
      role: 'menuitem',
      tabindex: '0',
    };
    if (this._slotHasContent) {
      a11y['aria-expanded'] = (_a = (!!this.active)) === null || _a === void 0 ? void 0 : _a.toString();
    }
    else if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (index.h(index.Host, Object.assign({}, a11y, { class: classes, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), index.h("div", { class: {
        'c-sidenavigation-item__header': true,
        'c-sidenavigation-item__header--expandable': this._slotHasContent,
      } }, this._slotHasContent && (index.h("svg", { width: "22", height: "22", viewBox: "0 0 24 24", class: "svg" }, index.h("path", { d: mdi.mdiChevronRight }))), index.h("div", { class: "c-sidenavigation-item__slot" }, index.h("slot", { name: "main" }))), this._slotHasContent && (index.h("nav", { role: "menubar", "aria-label": this._ariaLabel, "aria-expanded": (_b = (!!this.active)) === null || _b === void 0 ? void 0 : _b.toString(), class: subNavigationClasses }, index.h("slot", { name: "subnavitem" }))), index.h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["onActiveChange"]
  }; }
};
CSidenavigationitem.style = cSidenavigationitemCss;

const cSpacerCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{flex-grow:1 !important}";

const CSpacer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h(index.Host, null);
  }
};
CSpacer.style = cSpacerCss;

const cSubnavigationitemCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}.c-subnavigation-item{align-items:center;background-color:transparent;border-radius:4px;color:#595959;cursor:pointer;display:block;display:flex;font-weight:400;line-height:46px;margin:0 8px;overflow:hidden;padding-left:34px;position:relative;transition:background-color 0.2s ease-in;user-select:none;max-width:280px}.c-subnavigation-item__wrapper{padding:2px 0}.c-subnavigation-item__content{display:flex;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.c-subnavigation-item__content::before{background-color:var(--csc-primary);content:\"\";height:100%;left:0;position:absolute;top:0;transform:translateZ(0) translateX(-8px);transition:transform 0.2s ease-in-out;width:8px}.c-subnavigation-item:hover{background-color:#f0f6f7;color:var(--csc-primary)}:host(.active) .c-subnavigation-item{background-color:#ffffff}:host(.active) .c-subnavigation-item__content::before{transform:translateZ(0) translateX(0)}::slotted(span){margin-right:8px;font-size:20px;line-height:1}.c-subnavigation-item:focus{outline:none}.c-subnavigation-item:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:0}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-subnavigation-item__slot{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.c-subnavigation-item__slot slot{display:flex;align-items:center}";

const CSubnavigationitem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = undefined;
    this.focusable = false;
    this.href = undefined;
    this.target = null;
    this.loading = false;
  }
  _redirect(event) {
    if ((event instanceof KeyboardEvent && (event === null || event === void 0 ? void 0 : event.key) === 'Enter') ||
      event instanceof MouseEvent ||
      event instanceof PointerEvent) {
      event.stopPropagation();
      const sidenav = document.querySelector('c-sidenavigation');
      sidenav.menuVisible = false;
      if (this.href) {
        if (this.target) {
          window.open(this.href, this.target);
        }
        else {
          window.location.href = this.href;
        }
      }
    }
  }
  render() {
    const a11y = {
      tabindex: this.focusable ? '0' : '-1',
      role: 'menuitem',
    };
    if (this.active) {
      a11y['aria-current'] = 'page';
    }
    return (index.h(index.Host, Object.assign({}, a11y, { class: { active: this.active }, onClick: (e) => this._redirect(e), onKeyDown: (e) => this._redirect(e) }), index.h("div", { class: "c-subnavigation-item__wrapper" }, index.h("div", { class: "c-subnavigation-item" }, index.h("div", { class: "c-subnavigation-item__content" }, index.h("div", { class: "c-subnavigation-item__slot" }, index.h("slot", null)), this.active && (index.h("span", { class: "visuallyhidden" }, ", Current page"))), index.h("c-loader", { size: 32, hide: !this.loading, style: { pointerEvents: 'none' } })))));
  }
  get element() { return index.getElement(this); }
};
CSubnavigationitem.style = cSubnavigationitemCss;

const cTitleCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;font-size:16px;text-transform:uppercase;color:#595959;font-weight:500}.title-underline{width:44px;height:4px;border-radius:4px;background-color:var(--csc-primary);margin-top:10px}:host(.center){text-align:center;display:flex;flex-direction:column;align-items:center}";

const CTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { class: "title-underline" })));
  }
};
CTitle.style = cTitleCss;

const cToolbarCss = ".c-toolbar{color:#595959;height:60px;background:#FFF;display:flex;column-gap:12px;align-items:center;padding-left:16px;padding-right:16px;position:fixed;width:calc(100% - 32px);z-index:9;box-shadow:2px 4px 10px #00000029}.spacer{height:60px;width:100%}:host(.relative) .c-toolbar{position:relative;margin-bottom:-60px}";

const CToolbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "c-toolbar" }, index.h("slot", null)), index.h("div", { class: "spacer" })));
  }
};
CToolbar.style = cToolbarCss;

exports.c_button = CButton;
exports.c_card = CCard;
exports.c_container = CContainer;
exports.c_csc_logo = CCscLogo;
exports.c_flex = CFlex;
exports.c_icon = CIcon;
exports.c_icon_button = CIconButton;
exports.c_loader = CLoader;
exports.c_main = CMain;
exports.c_navigationbutton = CNavigationbutton;
exports.c_row = CRow;
exports.c_sidenavigation = CSidenavigation;
exports.c_sidenavigationitem = CSidenavigationitem;
exports.c_spacer = CSpacer;
exports.c_subnavigationitem = CSubnavigationitem;
exports.c_title = CTitle;
exports.c_toolbar = CToolbar;

//# sourceMappingURL=c-button_17.cjs.entry.js.map