import type { Components, JSX } from "../types/components";

interface CProgressBar extends Components.CProgressBar, HTMLElement {}
export const CProgressBar: {
  prototype: CProgressBar;
  new (): CProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
