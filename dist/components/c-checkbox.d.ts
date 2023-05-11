import type { Components, JSX } from "../types/components";

interface CCheckbox extends Components.CCheckbox, HTMLElement {}
export const CCheckbox: {
  prototype: CCheckbox;
  new (): CCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
