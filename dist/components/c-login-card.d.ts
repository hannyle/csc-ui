import type { Components, JSX } from "../types/components";

interface CLoginCard extends Components.CLoginCard, HTMLElement {}
export const CLoginCard: {
  prototype: CLoginCard;
  new (): CLoginCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
