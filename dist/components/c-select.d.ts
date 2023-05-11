import type { Components, JSX } from "../types/components";

interface CSelect extends Components.CSelect, HTMLElement {}
export const CSelect: {
  prototype: CSelect;
  new (): CSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
