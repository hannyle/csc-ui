import type { Components, JSX } from "../types/components";

interface CContainer extends Components.CContainer, HTMLElement {}
export const CContainer: {
  prototype: CContainer;
  new (): CContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
