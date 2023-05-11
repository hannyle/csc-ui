import type { Components, JSX } from "../types/components";

interface CFlex extends Components.CFlex, HTMLElement {}
export const CFlex: {
  prototype: CFlex;
  new (): CFlex;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
