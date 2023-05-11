import type { Components, JSX } from "../types/components";

interface CAccordion extends Components.CAccordion, HTMLElement {}
export const CAccordion: {
  prototype: CAccordion;
  new (): CAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
