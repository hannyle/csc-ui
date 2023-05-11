import type { Components, JSX } from "../types/components";

interface CTab extends Components.CTab, HTMLElement {}
export const CTab: {
  prototype: CTab;
  new (): CTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
