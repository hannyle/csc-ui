import type { Components, JSX } from "../types/components";

interface CInput extends Components.CInput, HTMLElement {}
export const CInput: {
  prototype: CInput;
  new (): CInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
