import type { Components, JSX } from "../types/components";

interface CModal extends Components.CModal, HTMLElement {}
export const CModal: {
  prototype: CModal;
  new (): CModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
