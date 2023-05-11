import type { Components, JSX } from "../types/components";

interface CAccordionItem extends Components.CAccordionItem, HTMLElement {}
export const CAccordionItem: {
  prototype: CAccordionItem;
  new (): CAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
