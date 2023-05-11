import type { Components, JSX } from "../types/components";

interface CSteps extends Components.CSteps, HTMLElement {}
export const CSteps: {
  prototype: CSteps;
  new (): CSteps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
