import type { Components, JSX } from "../types/components";

interface CMain extends Components.CMain, HTMLElement {}
export const CMain: {
  prototype: CMain;
  new (): CMain;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
