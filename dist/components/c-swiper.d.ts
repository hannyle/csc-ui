import type { Components, JSX } from "../types/components";

interface CSwiper extends Components.CSwiper, HTMLElement {}
export const CSwiper: {
  prototype: CSwiper;
  new (): CSwiper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
