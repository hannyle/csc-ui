import type { Components, JSX } from "../types/components";

interface CLoginCardContent extends Components.CLoginCardContent, HTMLElement {}
export const CLoginCardContent: {
  prototype: CLoginCardContent;
  new (): CLoginCardContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
