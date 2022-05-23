
/**
 * Examples for c-row.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
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
