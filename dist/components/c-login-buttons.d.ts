import type { Components, JSX } from "../types/components";

interface CLoginButtons extends Components.CLoginButtons, HTMLElement {}
export const CLoginButtons: {
  prototype: CLoginButtons;
  new (): CLoginButtons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
