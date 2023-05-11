import type { Components, JSX } from "../types/components";

interface CButton extends Components.CButton, HTMLElement {}
export const CButton: {
  prototype: CButton;
  new (): CButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
