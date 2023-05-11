import type { Components, JSX } from "../types/components";

interface CSidenavigationitem extends Components.CSidenavigationitem, HTMLElement {}
export const CSidenavigationitem: {
  prototype: CSidenavigationitem;
  new (): CSidenavigationitem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
