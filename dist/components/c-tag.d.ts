import type { Components, JSX } from "../types/components";

interface CTag extends Components.CTag, HTMLElement {}
export const CTag: {
  prototype: CTag;
  new (): CTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
