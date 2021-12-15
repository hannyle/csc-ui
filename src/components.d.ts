/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CAccordionItem {
        "heading": string;
        "icon": string;
        "value": boolean;
    }
    interface CAutocomplete {
        "dense": boolean;
        "items": any[];
        "label": string;
        "name": string;
        "query": any;
        "required": boolean;
        "value": any;
    }
    interface CButton {
        "dense": boolean;
        "disabled": boolean;
        "fit": boolean;
        "fixed": boolean;
        "icon": string;
        "loading": boolean;
        "noRadius": boolean;
        "outlined": boolean;
        "secondary": boolean;
    }
    interface CCard {
        "background": string;
        "color": string;
        "dark": boolean;
        "elevation": number;
        "ma": number;
        "mx": number;
        "my": number;
        "noRadius": boolean;
        "pa": number;
        "px": number;
        "py": number;
    }
    interface CCheckbox {
        "checked": boolean;
        "color": string;
        "label": string;
    }
    interface CCol {
    }
    interface CConsent {
    }
    interface CContainer {
        "width": number;
    }
    interface CCscLogo {
    }
    interface CFlex {
    }
    interface CH1 {
    }
    interface CIconButton {
        "badge": string;
        "icon": string;
    }
    interface CLink {
        "href": string;
        "target": string;
        "underline": boolean;
    }
    interface CLoader {
    }
    interface CMain {
    }
    interface CMenu {
        "items": any[];
        "nohover": boolean;
        "simple": boolean;
        "small": boolean;
    }
    interface CMenuItem {
        "active": boolean;
        "small": boolean;
    }
    interface CModal {
        "value": boolean;
    }
    interface CNavigationbutton {
    }
    interface CNotification {
        "notification": any;
        "position": string;
    }
    interface COption {
        "dense": boolean;
        "label": string;
        "value": string;
    }
    interface CPaginationrow {
        "items": any[];
        "itemsPerPage": number;
        "itemsTotal": number;
        "pageNumber": number;
    }
    interface CProgressbar {
        "color": string;
        "value": number;
    }
    interface CRadio {
        "color": string;
        "items": any[];
        "label": string;
        "selected": object;
    }
    interface CRow {
    }
    interface CSelect {
        "dense": boolean;
        "items": any[];
        "itemsPerPage": number;
        "label": string;
        "labelRight": boolean;
        "name": string;
        "placeholder": string;
        "required": boolean;
        "shadow": boolean;
        "showNone": boolean;
        "validate": boolean;
        "validateOnBlur": boolean;
        "value": any;
    }
    interface CSidenavigation {
        "menuVisible": boolean;
        "mobile": boolean;
    }
    interface CSidenavigationitem {
        "active": boolean;
        "href": string;
        "subItems": boolean;
    }
    interface CSpacer {
    }
    interface CSubnavigationitem {
        "active": boolean;
        "href": string;
    }
    interface CTab {
        "active": boolean;
    }
    interface CTabButton {
        "active": boolean;
        "color": string;
        "disabled": boolean;
        "icon": string;
        "label": string;
        "noRadius": boolean;
    }
    interface CTag {
        "active": boolean;
        "closeable": boolean;
        "fit": boolean;
    }
    interface CTextField {
        "autofocus": boolean;
        "disabled": boolean;
        "form": boolean;
        "label": string;
        "max": number;
        "min": number;
        "name": string;
        "number": boolean;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "rows": number;
        "shadow": boolean;
        "step": number;
        "type": string;
        "valid": boolean;
        "validate": boolean;
        "validateOnBlur": boolean;
        "validation": string;
        "value": string;
    }
    interface CTitle {
    }
    interface CToggle {
        "active": boolean;
        "color": string;
        "description": string;
        "fit": boolean;
        "fixed": boolean;
        "subtitle": string;
    }
    interface CToolbar {
    }
}
declare global {
    interface HTMLCAccordionItemElement extends Components.CAccordionItem, HTMLStencilElement {
    }
    var HTMLCAccordionItemElement: {
        prototype: HTMLCAccordionItemElement;
        new (): HTMLCAccordionItemElement;
    };
    interface HTMLCAutocompleteElement extends Components.CAutocomplete, HTMLStencilElement {
    }
    var HTMLCAutocompleteElement: {
        prototype: HTMLCAutocompleteElement;
        new (): HTMLCAutocompleteElement;
    };
    interface HTMLCButtonElement extends Components.CButton, HTMLStencilElement {
    }
    var HTMLCButtonElement: {
        prototype: HTMLCButtonElement;
        new (): HTMLCButtonElement;
    };
    interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {
    }
    var HTMLCCardElement: {
        prototype: HTMLCCardElement;
        new (): HTMLCCardElement;
    };
    interface HTMLCCheckboxElement extends Components.CCheckbox, HTMLStencilElement {
    }
    var HTMLCCheckboxElement: {
        prototype: HTMLCCheckboxElement;
        new (): HTMLCCheckboxElement;
    };
    interface HTMLCColElement extends Components.CCol, HTMLStencilElement {
    }
    var HTMLCColElement: {
        prototype: HTMLCColElement;
        new (): HTMLCColElement;
    };
    interface HTMLCConsentElement extends Components.CConsent, HTMLStencilElement {
    }
    var HTMLCConsentElement: {
        prototype: HTMLCConsentElement;
        new (): HTMLCConsentElement;
    };
    interface HTMLCContainerElement extends Components.CContainer, HTMLStencilElement {
    }
    var HTMLCContainerElement: {
        prototype: HTMLCContainerElement;
        new (): HTMLCContainerElement;
    };
    interface HTMLCCscLogoElement extends Components.CCscLogo, HTMLStencilElement {
    }
    var HTMLCCscLogoElement: {
        prototype: HTMLCCscLogoElement;
        new (): HTMLCCscLogoElement;
    };
    interface HTMLCFlexElement extends Components.CFlex, HTMLStencilElement {
    }
    var HTMLCFlexElement: {
        prototype: HTMLCFlexElement;
        new (): HTMLCFlexElement;
    };
    interface HTMLCH1Element extends Components.CH1, HTMLStencilElement {
    }
    var HTMLCH1Element: {
        prototype: HTMLCH1Element;
        new (): HTMLCH1Element;
    };
    interface HTMLCIconButtonElement extends Components.CIconButton, HTMLStencilElement {
    }
    var HTMLCIconButtonElement: {
        prototype: HTMLCIconButtonElement;
        new (): HTMLCIconButtonElement;
    };
    interface HTMLCLinkElement extends Components.CLink, HTMLStencilElement {
    }
    var HTMLCLinkElement: {
        prototype: HTMLCLinkElement;
        new (): HTMLCLinkElement;
    };
    interface HTMLCLoaderElement extends Components.CLoader, HTMLStencilElement {
    }
    var HTMLCLoaderElement: {
        prototype: HTMLCLoaderElement;
        new (): HTMLCLoaderElement;
    };
    interface HTMLCMainElement extends Components.CMain, HTMLStencilElement {
    }
    var HTMLCMainElement: {
        prototype: HTMLCMainElement;
        new (): HTMLCMainElement;
    };
    interface HTMLCMenuElement extends Components.CMenu, HTMLStencilElement {
    }
    var HTMLCMenuElement: {
        prototype: HTMLCMenuElement;
        new (): HTMLCMenuElement;
    };
    interface HTMLCMenuItemElement extends Components.CMenuItem, HTMLStencilElement {
    }
    var HTMLCMenuItemElement: {
        prototype: HTMLCMenuItemElement;
        new (): HTMLCMenuItemElement;
    };
    interface HTMLCModalElement extends Components.CModal, HTMLStencilElement {
    }
    var HTMLCModalElement: {
        prototype: HTMLCModalElement;
        new (): HTMLCModalElement;
    };
    interface HTMLCNavigationbuttonElement extends Components.CNavigationbutton, HTMLStencilElement {
    }
    var HTMLCNavigationbuttonElement: {
        prototype: HTMLCNavigationbuttonElement;
        new (): HTMLCNavigationbuttonElement;
    };
    interface HTMLCNotificationElement extends Components.CNotification, HTMLStencilElement {
    }
    var HTMLCNotificationElement: {
        prototype: HTMLCNotificationElement;
        new (): HTMLCNotificationElement;
    };
    interface HTMLCOptionElement extends Components.COption, HTMLStencilElement {
    }
    var HTMLCOptionElement: {
        prototype: HTMLCOptionElement;
        new (): HTMLCOptionElement;
    };
    interface HTMLCPaginationrowElement extends Components.CPaginationrow, HTMLStencilElement {
    }
    var HTMLCPaginationrowElement: {
        prototype: HTMLCPaginationrowElement;
        new (): HTMLCPaginationrowElement;
    };
    interface HTMLCProgressbarElement extends Components.CProgressbar, HTMLStencilElement {
    }
    var HTMLCProgressbarElement: {
        prototype: HTMLCProgressbarElement;
        new (): HTMLCProgressbarElement;
    };
    interface HTMLCRadioElement extends Components.CRadio, HTMLStencilElement {
    }
    var HTMLCRadioElement: {
        prototype: HTMLCRadioElement;
        new (): HTMLCRadioElement;
    };
    interface HTMLCRowElement extends Components.CRow, HTMLStencilElement {
    }
    var HTMLCRowElement: {
        prototype: HTMLCRowElement;
        new (): HTMLCRowElement;
    };
    interface HTMLCSelectElement extends Components.CSelect, HTMLStencilElement {
    }
    var HTMLCSelectElement: {
        prototype: HTMLCSelectElement;
        new (): HTMLCSelectElement;
    };
    interface HTMLCSidenavigationElement extends Components.CSidenavigation, HTMLStencilElement {
    }
    var HTMLCSidenavigationElement: {
        prototype: HTMLCSidenavigationElement;
        new (): HTMLCSidenavigationElement;
    };
    interface HTMLCSidenavigationitemElement extends Components.CSidenavigationitem, HTMLStencilElement {
    }
    var HTMLCSidenavigationitemElement: {
        prototype: HTMLCSidenavigationitemElement;
        new (): HTMLCSidenavigationitemElement;
    };
    interface HTMLCSpacerElement extends Components.CSpacer, HTMLStencilElement {
    }
    var HTMLCSpacerElement: {
        prototype: HTMLCSpacerElement;
        new (): HTMLCSpacerElement;
    };
    interface HTMLCSubnavigationitemElement extends Components.CSubnavigationitem, HTMLStencilElement {
    }
    var HTMLCSubnavigationitemElement: {
        prototype: HTMLCSubnavigationitemElement;
        new (): HTMLCSubnavigationitemElement;
    };
    interface HTMLCTabElement extends Components.CTab, HTMLStencilElement {
    }
    var HTMLCTabElement: {
        prototype: HTMLCTabElement;
        new (): HTMLCTabElement;
    };
    interface HTMLCTabButtonElement extends Components.CTabButton, HTMLStencilElement {
    }
    var HTMLCTabButtonElement: {
        prototype: HTMLCTabButtonElement;
        new (): HTMLCTabButtonElement;
    };
    interface HTMLCTagElement extends Components.CTag, HTMLStencilElement {
    }
    var HTMLCTagElement: {
        prototype: HTMLCTagElement;
        new (): HTMLCTagElement;
    };
    interface HTMLCTextFieldElement extends Components.CTextField, HTMLStencilElement {
    }
    var HTMLCTextFieldElement: {
        prototype: HTMLCTextFieldElement;
        new (): HTMLCTextFieldElement;
    };
    interface HTMLCTitleElement extends Components.CTitle, HTMLStencilElement {
    }
    var HTMLCTitleElement: {
        prototype: HTMLCTitleElement;
        new (): HTMLCTitleElement;
    };
    interface HTMLCToggleElement extends Components.CToggle, HTMLStencilElement {
    }
    var HTMLCToggleElement: {
        prototype: HTMLCToggleElement;
        new (): HTMLCToggleElement;
    };
    interface HTMLCToolbarElement extends Components.CToolbar, HTMLStencilElement {
    }
    var HTMLCToolbarElement: {
        prototype: HTMLCToolbarElement;
        new (): HTMLCToolbarElement;
    };
    interface HTMLElementTagNameMap {
        "c-accordion-item": HTMLCAccordionItemElement;
        "c-autocomplete": HTMLCAutocompleteElement;
        "c-button": HTMLCButtonElement;
        "c-card": HTMLCCardElement;
        "c-checkbox": HTMLCCheckboxElement;
        "c-col": HTMLCColElement;
        "c-consent": HTMLCConsentElement;
        "c-container": HTMLCContainerElement;
        "c-csc-logo": HTMLCCscLogoElement;
        "c-flex": HTMLCFlexElement;
        "c-h1": HTMLCH1Element;
        "c-icon-button": HTMLCIconButtonElement;
        "c-link": HTMLCLinkElement;
        "c-loader": HTMLCLoaderElement;
        "c-main": HTMLCMainElement;
        "c-menu": HTMLCMenuElement;
        "c-menu-item": HTMLCMenuItemElement;
        "c-modal": HTMLCModalElement;
        "c-navigationbutton": HTMLCNavigationbuttonElement;
        "c-notification": HTMLCNotificationElement;
        "c-option": HTMLCOptionElement;
        "c-paginationrow": HTMLCPaginationrowElement;
        "c-progressbar": HTMLCProgressbarElement;
        "c-radio": HTMLCRadioElement;
        "c-row": HTMLCRowElement;
        "c-select": HTMLCSelectElement;
        "c-sidenavigation": HTMLCSidenavigationElement;
        "c-sidenavigationitem": HTMLCSidenavigationitemElement;
        "c-spacer": HTMLCSpacerElement;
        "c-subnavigationitem": HTMLCSubnavigationitemElement;
        "c-tab": HTMLCTabElement;
        "c-tab-button": HTMLCTabButtonElement;
        "c-tag": HTMLCTagElement;
        "c-text-field": HTMLCTextFieldElement;
        "c-title": HTMLCTitleElement;
        "c-toggle": HTMLCToggleElement;
        "c-toolbar": HTMLCToolbarElement;
    }
}
declare namespace LocalJSX {
    interface CAccordionItem {
        "heading"?: string;
        "icon"?: string;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
        "value"?: boolean;
    }
    interface CAutocomplete {
        "dense"?: boolean;
        "items"?: any[];
        "label"?: string;
        "name"?: string;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
        "query"?: any;
        "required"?: boolean;
        "value"?: any;
    }
    interface CButton {
        "dense"?: boolean;
        "disabled"?: boolean;
        "fit"?: boolean;
        "fixed"?: boolean;
        "icon"?: string;
        "loading"?: boolean;
        "noRadius"?: boolean;
        "outlined"?: boolean;
        "secondary"?: boolean;
    }
    interface CCard {
        "background"?: string;
        "color"?: string;
        "dark"?: boolean;
        "elevation"?: number;
        "ma"?: number;
        "mx"?: number;
        "my"?: number;
        "noRadius"?: boolean;
        "pa"?: number;
        "px"?: number;
        "py"?: number;
    }
    interface CCheckbox {
        "checked"?: boolean;
        "color"?: string;
        "label"?: string;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
    }
    interface CCol {
    }
    interface CConsent {
    }
    interface CContainer {
        "width"?: number;
    }
    interface CCscLogo {
    }
    interface CFlex {
    }
    interface CH1 {
    }
    interface CIconButton {
        "badge"?: string;
        "icon"?: string;
    }
    interface CLink {
        "href"?: string;
        "target"?: string;
        "underline"?: boolean;
    }
    interface CLoader {
    }
    interface CMain {
    }
    interface CMenu {
        "items"?: any[];
        "nohover"?: boolean;
        "simple"?: boolean;
        "small"?: boolean;
    }
    interface CMenuItem {
        "active"?: boolean;
        "small"?: boolean;
    }
    interface CModal {
        "value"?: boolean;
    }
    interface CNavigationbutton {
    }
    interface CNotification {
        "notification"?: any;
        "position"?: string;
    }
    interface COption {
        "dense"?: boolean;
        "label"?: string;
        "value"?: string;
    }
    interface CPaginationrow {
        "items"?: any[];
        "itemsPerPage"?: number;
        "itemsTotal"?: number;
        "pageNumber"?: number;
    }
    interface CProgressbar {
        "color"?: string;
        "value"?: number;
    }
    interface CRadio {
        "color"?: string;
        "items"?: any[];
        "label"?: string;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
        "selected"?: object;
    }
    interface CRow {
    }
    interface CSelect {
        "dense"?: boolean;
        "items"?: any[];
        "itemsPerPage"?: number;
        "label"?: string;
        "labelRight"?: boolean;
        "name"?: string;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "required"?: boolean;
        "shadow"?: boolean;
        "showNone"?: boolean;
        "validate"?: boolean;
        "validateOnBlur"?: boolean;
        "value"?: any;
    }
    interface CSidenavigation {
        "menuVisible"?: boolean;
        "mobile"?: boolean;
    }
    interface CSidenavigationitem {
        "active"?: boolean;
        "href"?: string;
        "subItems"?: boolean;
    }
    interface CSpacer {
    }
    interface CSubnavigationitem {
        "active"?: boolean;
        "href"?: string;
    }
    interface CTab {
        "active"?: boolean;
    }
    interface CTabButton {
        "active"?: boolean;
        "color"?: string;
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "noRadius"?: boolean;
    }
    interface CTag {
        "active"?: boolean;
        "closeable"?: boolean;
        "fit"?: boolean;
    }
    interface CTextField {
        "autofocus"?: boolean;
        "disabled"?: boolean;
        "form"?: boolean;
        "label"?: string;
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "number"?: boolean;
        "onChangeValue"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "rows"?: number;
        "shadow"?: boolean;
        "step"?: number;
        "type"?: string;
        "valid"?: boolean;
        "validate"?: boolean;
        "validateOnBlur"?: boolean;
        "validation"?: string;
        "value"?: string;
    }
    interface CTitle {
    }
    interface CToggle {
        "active"?: boolean;
        "color"?: string;
        "description"?: string;
        "fit"?: boolean;
        "fixed"?: boolean;
        "subtitle"?: string;
    }
    interface CToolbar {
    }
    interface IntrinsicElements {
        "c-accordion-item": CAccordionItem;
        "c-autocomplete": CAutocomplete;
        "c-button": CButton;
        "c-card": CCard;
        "c-checkbox": CCheckbox;
        "c-col": CCol;
        "c-consent": CConsent;
        "c-container": CContainer;
        "c-csc-logo": CCscLogo;
        "c-flex": CFlex;
        "c-h1": CH1;
        "c-icon-button": CIconButton;
        "c-link": CLink;
        "c-loader": CLoader;
        "c-main": CMain;
        "c-menu": CMenu;
        "c-menu-item": CMenuItem;
        "c-modal": CModal;
        "c-navigationbutton": CNavigationbutton;
        "c-notification": CNotification;
        "c-option": COption;
        "c-paginationrow": CPaginationrow;
        "c-progressbar": CProgressbar;
        "c-radio": CRadio;
        "c-row": CRow;
        "c-select": CSelect;
        "c-sidenavigation": CSidenavigation;
        "c-sidenavigationitem": CSidenavigationitem;
        "c-spacer": CSpacer;
        "c-subnavigationitem": CSubnavigationitem;
        "c-tab": CTab;
        "c-tab-button": CTabButton;
        "c-tag": CTag;
        "c-text-field": CTextField;
        "c-title": CTitle;
        "c-toggle": CToggle;
        "c-toolbar": CToolbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "c-accordion-item": LocalJSX.CAccordionItem & JSXBase.HTMLAttributes<HTMLCAccordionItemElement>;
            "c-autocomplete": LocalJSX.CAutocomplete & JSXBase.HTMLAttributes<HTMLCAutocompleteElement>;
            "c-button": LocalJSX.CButton & JSXBase.HTMLAttributes<HTMLCButtonElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-checkbox": LocalJSX.CCheckbox & JSXBase.HTMLAttributes<HTMLCCheckboxElement>;
            "c-col": LocalJSX.CCol & JSXBase.HTMLAttributes<HTMLCColElement>;
            "c-consent": LocalJSX.CConsent & JSXBase.HTMLAttributes<HTMLCConsentElement>;
            "c-container": LocalJSX.CContainer & JSXBase.HTMLAttributes<HTMLCContainerElement>;
            "c-csc-logo": LocalJSX.CCscLogo & JSXBase.HTMLAttributes<HTMLCCscLogoElement>;
            "c-flex": LocalJSX.CFlex & JSXBase.HTMLAttributes<HTMLCFlexElement>;
            "c-h1": LocalJSX.CH1 & JSXBase.HTMLAttributes<HTMLCH1Element>;
            "c-icon-button": LocalJSX.CIconButton & JSXBase.HTMLAttributes<HTMLCIconButtonElement>;
            "c-link": LocalJSX.CLink & JSXBase.HTMLAttributes<HTMLCLinkElement>;
            "c-loader": LocalJSX.CLoader & JSXBase.HTMLAttributes<HTMLCLoaderElement>;
            "c-main": LocalJSX.CMain & JSXBase.HTMLAttributes<HTMLCMainElement>;
            "c-menu": LocalJSX.CMenu & JSXBase.HTMLAttributes<HTMLCMenuElement>;
            "c-menu-item": LocalJSX.CMenuItem & JSXBase.HTMLAttributes<HTMLCMenuItemElement>;
            "c-modal": LocalJSX.CModal & JSXBase.HTMLAttributes<HTMLCModalElement>;
            "c-navigationbutton": LocalJSX.CNavigationbutton & JSXBase.HTMLAttributes<HTMLCNavigationbuttonElement>;
            "c-notification": LocalJSX.CNotification & JSXBase.HTMLAttributes<HTMLCNotificationElement>;
            "c-option": LocalJSX.COption & JSXBase.HTMLAttributes<HTMLCOptionElement>;
            "c-paginationrow": LocalJSX.CPaginationrow & JSXBase.HTMLAttributes<HTMLCPaginationrowElement>;
            "c-progressbar": LocalJSX.CProgressbar & JSXBase.HTMLAttributes<HTMLCProgressbarElement>;
            "c-radio": LocalJSX.CRadio & JSXBase.HTMLAttributes<HTMLCRadioElement>;
            "c-row": LocalJSX.CRow & JSXBase.HTMLAttributes<HTMLCRowElement>;
            "c-select": LocalJSX.CSelect & JSXBase.HTMLAttributes<HTMLCSelectElement>;
            "c-sidenavigation": LocalJSX.CSidenavigation & JSXBase.HTMLAttributes<HTMLCSidenavigationElement>;
            "c-sidenavigationitem": LocalJSX.CSidenavigationitem & JSXBase.HTMLAttributes<HTMLCSidenavigationitemElement>;
            "c-spacer": LocalJSX.CSpacer & JSXBase.HTMLAttributes<HTMLCSpacerElement>;
            "c-subnavigationitem": LocalJSX.CSubnavigationitem & JSXBase.HTMLAttributes<HTMLCSubnavigationitemElement>;
            "c-tab": LocalJSX.CTab & JSXBase.HTMLAttributes<HTMLCTabElement>;
            "c-tab-button": LocalJSX.CTabButton & JSXBase.HTMLAttributes<HTMLCTabButtonElement>;
            "c-tag": LocalJSX.CTag & JSXBase.HTMLAttributes<HTMLCTagElement>;
            "c-text-field": LocalJSX.CTextField & JSXBase.HTMLAttributes<HTMLCTextFieldElement>;
            "c-title": LocalJSX.CTitle & JSXBase.HTMLAttributes<HTMLCTitleElement>;
            "c-toggle": LocalJSX.CToggle & JSXBase.HTMLAttributes<HTMLCToggleElement>;
            "c-toolbar": LocalJSX.CToolbar & JSXBase.HTMLAttributes<HTMLCToolbarElement>;
        }
    }
}
