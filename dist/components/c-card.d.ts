import type { Components, JSX } from "../types/components";

interface CCard extends Components.CCard, HTMLElement {}
export const CCard: {
  prototype: CCard;
  new (): CCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
