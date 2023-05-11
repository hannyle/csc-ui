import type { Components, JSX } from "../types/components";

interface CToolbar extends Components.CToolbar, HTMLElement {}
export const CToolbar: {
  prototype: CToolbar;
  new (): CToolbar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
