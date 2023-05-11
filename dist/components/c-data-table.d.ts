import type { Components, JSX } from "../types/components";

interface CDataTable extends Components.CDataTable, HTMLElement {}
export const CDataTable: {
  prototype: CDataTable;
  new (): CDataTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
