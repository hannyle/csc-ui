import type { Components, JSX } from "../types/components";

interface CSwiperTab extends Components.CSwiperTab, HTMLElement {}
export const CSwiperTab: {
  prototype: CSwiperTab;
  new (): CSwiperTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
