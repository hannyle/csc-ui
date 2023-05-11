import type { Components, JSX } from "../types/components";

interface CCardContent extends Components.CCardContent, HTMLElement {}
export const CCardContent: {
  prototype: CCardContent;
  new (): CCardContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
