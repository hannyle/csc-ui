import type { Components, JSX } from "../types/components";

interface CLink extends Components.CLink, HTMLElement {}
export const CLink: {
  prototype: CLink;
  new (): CLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
