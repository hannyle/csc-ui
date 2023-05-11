import type { Components, JSX } from "../types/components";

interface CIcon extends Components.CIcon, HTMLElement {}
export const CIcon: {
  prototype: CIcon;
  new (): CIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
