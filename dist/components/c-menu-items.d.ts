import type { Components, JSX } from "../types/components";

interface CMenuItems extends Components.CMenuItems, HTMLElement {}
export const CMenuItems: {
  prototype: CMenuItems;
  new (): CMenuItems;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
