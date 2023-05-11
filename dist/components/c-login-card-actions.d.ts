import type { Components, JSX } from "../types/components";

interface CLoginCardActions extends Components.CLoginCardActions, HTMLElement {}
export const CLoginCardActions: {
  prototype: CLoginCardActions;
  new (): CLoginCardActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
