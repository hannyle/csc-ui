import type { Components, JSX } from "../types/components";

interface CSwitch extends Components.CSwitch, HTMLElement {}
export const CSwitch: {
  prototype: CSwitch;
  new (): CSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
