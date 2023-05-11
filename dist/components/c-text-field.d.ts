import type { Components, JSX } from "../types/components";

interface CTextField extends Components.CTextField, HTMLElement {}
export const CTextField: {
  prototype: CTextField;
  new (): CTextField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
