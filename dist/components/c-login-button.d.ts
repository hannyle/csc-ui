import type { Components, JSX } from "../types/components";

interface CLoginButton extends Components.CLoginButton, HTMLElement {}
export const CLoginButton: {
  prototype: CLoginButton;
  new (): CLoginButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
