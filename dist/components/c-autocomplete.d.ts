import type { Components, JSX } from "../types/components";

interface CAutocomplete extends Components.CAutocomplete, HTMLElement {}
export const CAutocomplete: {
  prototype: CAutocomplete;
  new (): CAutocomplete;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
