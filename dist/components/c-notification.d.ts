import type { Components, JSX } from "../types/components";

interface CNotification extends Components.CNotification, HTMLElement {}
export const CNotification: {
  prototype: CNotification;
  new (): CNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
