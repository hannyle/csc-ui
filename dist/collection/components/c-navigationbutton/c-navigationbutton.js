import { Host, h } from '@stencil/core';
export class CNavigationbutton {
  constructor() {
    this._svg = (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "15.33", viewBox: "0 0 20 15.33" }, h("line", { id: "Line_300", "data-name": "Line 300", x2: "18", transform: "translate(1 1)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), h("line", { id: "Line_301", "data-name": "Line 301", x2: "18", transform: "translate(1 7.67)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" }), h("line", { id: "Line_302", "data-name": "Line 302", x2: "18", transform: "translate(1 14.33)", fill: "none", stroke: "#666", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2" })));
  }
  render() {
    return h(Host, { tabindex: 0 }, this._svg);
  }
  static get is() { return "c-navigationbutton"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-navigationbutton.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-navigationbutton.css"]
    };
  }
}
//# sourceMappingURL=c-navigationbutton.js.map
