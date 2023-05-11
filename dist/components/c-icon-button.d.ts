import type { Components, JSX } from "../types/components";

interface CIconButton extends Components.CIconButton, HTMLElement {}
export const CIconButton: {
  prototype: CIconButton;
  new (): CIconButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
