import type { Components, JSX } from "../types/components";

interface CSubnavigationitem extends Components.CSubnavigationitem, HTMLElement {}
export const CSubnavigationitem: {
  prototype: CSubnavigationitem;
  new (): CSubnavigationitem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
