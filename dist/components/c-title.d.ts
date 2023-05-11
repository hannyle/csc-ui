import type { Components, JSX } from "../types/components";

interface CTitle extends Components.CTitle, HTMLElement {}
export const CTitle: {
  prototype: CTitle;
  new (): CTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
