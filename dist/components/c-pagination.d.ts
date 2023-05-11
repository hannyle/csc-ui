import type { Components, JSX } from "../types/components";

interface CPagination extends Components.CPagination, HTMLElement {}
export const CPagination: {
  prototype: CPagination;
  new (): CPagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
