import type { Components, JSX } from "../types/components";

interface CToasts extends Components.CToasts, HTMLElement {}
export const CToasts: {
  prototype: CToasts;
  new (): CToasts;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
