import type { Components, JSX } from "../types/components";

interface CMenu extends Components.CMenu, HTMLElement {}
export const CMenu: {
  prototype: CMenu;
  new (): CMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
