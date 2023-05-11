import type { Components, JSX } from "../types/components";

interface CTabs extends Components.CTabs, HTMLElement {}
export const CTabs: {
  prototype: CTabs;
  new (): CTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
