import type { Components, JSX } from "../types/components";

interface CNavigationbutton extends Components.CNavigationbutton, HTMLElement {}
export const CNavigationbutton: {
  prototype: CNavigationbutton;
  new (): CNavigationbutton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
