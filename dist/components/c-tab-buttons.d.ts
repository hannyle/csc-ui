import type { Components, JSX } from "../types/components";

interface CTabButtons extends Components.CTabButtons, HTMLElement {}
export const CTabButtons: {
  prototype: CTabButtons;
  new (): CTabButtons;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
