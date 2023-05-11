import type { Components, JSX } from "../types/components";

interface CStatus extends Components.CStatus, HTMLElement {}
export const CStatus: {
  prototype: CStatus;
  new (): CStatus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
