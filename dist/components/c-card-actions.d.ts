import type { Components, JSX } from "../types/components";

interface CCardActions extends Components.CCardActions, HTMLElement {}
export const CCardActions: {
  prototype: CCardActions;
  new (): CCardActions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
