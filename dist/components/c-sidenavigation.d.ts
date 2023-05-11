import type { Components, JSX } from "../types/components";

interface CSidenavigation extends Components.CSidenavigation, HTMLElement {}
export const CSidenavigation: {
  prototype: CSidenavigation;
  new (): CSidenavigation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
