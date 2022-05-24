
/**
 * Examples for c-row.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-row gap="8">
  <c-button>Button</c-button>
  <c-button>Button</c-button>
</c-row>`;

export const justify = `<c-radio-group cControl [items]="justifyItems" [(ngModel)]="selectedJustify"></c-radio-group>

<c-row gap="8" [justify]="selectedJustify.value">
  <c-button>Button</c-button>
  <c-button>Button</c-button>
</c-row>`;

export const align = `<c-radio-group cControl [items]="alignItems" [(ngModel)]="selectedAlign"></c-radio-group>

<c-row gap="8" [align]="selectedAlign.value">
  <c-button size="small">Button</c-button>
  <c-button>Button</c-button>
  <c-button size="large">Button</c-button>
</c-row>`;
