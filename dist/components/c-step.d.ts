import type { Components, JSX } from "../types/components";

interface CStep extends Components.CStep, HTMLElement {}
export const CStep: {
  prototype: CStep;
  new (): CStep;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
