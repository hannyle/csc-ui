import type { Components, JSX } from "../types/components";

interface CCscLogo extends Components.CCscLogo, HTMLElement {}
export const CCscLogo: {
  prototype: CCscLogo;
  new (): CCscLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
