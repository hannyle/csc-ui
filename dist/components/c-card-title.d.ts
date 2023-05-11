import type { Components, JSX } from "../types/components";

interface CCardTitle extends Components.CCardTitle, HTMLElement {}
export const CCardTitle: {
  prototype: CCardTitle;
  new (): CCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
