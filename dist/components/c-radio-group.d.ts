import type { Components, JSX } from "../types/components";

interface CRadioGroup extends Components.CRadioGroup, HTMLElement {}
export const CRadioGroup: {
  prototype: CRadioGroup;
  new (): CRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
