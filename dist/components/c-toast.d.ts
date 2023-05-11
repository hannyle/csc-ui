import type { Components, JSX } from "../types/components";

interface CToast extends Components.CToast, HTMLElement {}
export const CToast: {
  prototype: CToast;
  new (): CToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
