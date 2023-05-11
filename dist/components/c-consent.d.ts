import type { Components, JSX } from "../types/components";

interface CConsent extends Components.CConsent, HTMLElement {}
export const CConsent: {
  prototype: CConsent;
  new (): CConsent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
