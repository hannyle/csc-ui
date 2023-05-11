import { r as registerInstance, h, H as Host } from './index-aa797944.js';

const cProgressBarCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--bar-color:var(--csc-primary);--bg-color:var(--csc-light-grey);--border-size:4px;--height:16px;--value:0%;align-items:center;display:flex;flex-wrap:wrap}.c-progress{position:relative;background-color:var(--bg-color);border-radius:var(--height);box-shadow:0 0 0 var(--border-size) var(--bg-color);flex-basis:100%;height:calc(var(--height) - var(--border-size) * 2);margin:var(--border-size);opacity:0.75;overflow:hidden;transform:translateZ(0);width:calc(100% - var(--border-size) * 2);}.c-progress.adjacent-details{flex:1}.c-progress__percentage{flex-basis:100%;font-size:14px;margin-top:2px;text-align:end;white-space:nowrap;padding-left:16px}.c-progress__percentage--negative{color:var(--csc-error)}.c-progress__percentage.adjacent-details{flex:0}.c-progress progress{background-color:var(--bar-color);border-radius:var(--height);width:100%;background-color:transparent;overflow:hidden;height:calc(var(--height) - var(--border-size) * 2);position:absolute;border:none}@supports selector(:focus-within){.c-progress progress:focus{outline:none}}.c-progress:focus-within{outline:2px var(--csc-primary) solid;outline-offset:6px}.c-progress ::-webkit-progress-bar{background-color:transparent}.c-progress ::-webkit-progress-value{transition:width 0.3s ease-in-out;background-color:var(--bar-color);border-radius:var(--height)}.c-progress ::-moz-progress-bar{transition:padding-bottom 1s;padding-left:60px;padding-bottom:var(--value);background-color:var(--bar-color);height:0;transform-origin:0 0;transform:rotate(-90deg) translateX(-60px)}.c-progress :indeterminate::-moz-progress-bar{width:0}.c-progress--indeterminate::before{content:\"\";position:absolute;background-color:var(--bar-color);border-radius:var(--height);left:-100%;height:100%;transform:translateX(var(--value, 0%));transition:transform 0.3s ease-in-out;animation:indeterminateAnimation 2s infinite linear;width:50%;transform-origin:0% 50%}@keyframes indeterminateAnimation{0%{transform:translateX(100%) scaleX(1)}30%{transform:translateX(170%) scaleX(1.75)}70%{transform:translateX(500%) scaleX(0.1)}100%{transform:translateX(500%) scaleX(0.1)}}";

const CProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.hideDetails = false;
    this.singleLine = false;
    this.label = '';
    this.color = undefined;
    this.indeterminate = false;
  }
  _getSafeValue() {
    if (this.value >= 0 && this.value <= 100)
      return this.value;
    if (this.value < 0)
      return 0;
    return 100;
  }
  render() {
    const value = this._getSafeValue();
    const style = {
      '--value': `${value}%`,
      '--bar-color': this.color ? this.color : null,
    };
    const classes = {
      'c-progress': true,
      'c-progress--indeterminate': this.indeterminate,
      'adjacent-details': this.singleLine,
    };
    const detailsClasses = {
      'c-progress__percentage': true,
      'c-progress__percentage--negative': this.value < 0,
      'adjacent-details': this.singleLine,
    };
    const a11y = {
      'aria-busy': (!this.indeterminate).toString(),
      title: `${value} %`,
    };
    const params = {
      role: 'progressbar',
      max: '100',
    };
    if (!this.indeterminate) {
      params.value = value.toString();
      params['aria-valuenow'] = value.toString();
    }
    return (h(Host, Object.assign({}, a11y), h("label", { class: classes, style: style }, h("progress", Object.assign({}, params), !this.indeterminate && `${value}%`)), !this.indeterminate && !this.hideDetails && (h("div", { class: detailsClasses }, this.value, " % ", this.label))));
  }
};
CProgressBar.style = cProgressBarCss;

export { CProgressBar as c_progress_bar };

//# sourceMappingURL=c-progress-bar.entry.js.map