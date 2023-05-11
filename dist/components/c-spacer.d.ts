import type { Components, JSX } from "../types/components";

interface CSpacer extends Components.CSpacer, HTMLElement {}
export const CSpacer: {
  prototype: CSpacer;
  new (): CSpacer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
