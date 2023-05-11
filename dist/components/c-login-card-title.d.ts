import type { Components, JSX } from "../types/components";

interface CLoginCardTitle extends Components.CLoginCardTitle, HTMLElement {}
export const CLoginCardTitle: {
  prototype: CLoginCardTitle;
  new (): CLoginCardTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
