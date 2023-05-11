import type { Components, JSX } from "../types/components";

interface CRow extends Components.CRow, HTMLElement {}
export const CRow: {
  prototype: CRow;
  new (): CRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
