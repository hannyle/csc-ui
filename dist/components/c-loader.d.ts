import type { Components, JSX } from "../types/components";

interface CLoader extends Components.CLoader, HTMLElement {}
export const CLoader: {
  prototype: CLoader;
  new (): CLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
