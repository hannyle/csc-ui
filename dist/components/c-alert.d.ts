import type { Components, JSX } from "../types/components";

interface CAlert extends Components.CAlert, HTMLElement {}
export const CAlert: {
  prototype: CAlert;
  new (): CAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
