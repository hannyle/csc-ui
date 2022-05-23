
/**
 * Examples for c-radio-group.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-radio-group
  [items]="items"
  [(ngModel)]="selectedItem"
  label="Example radio buttons"
  cControl
></c-radio-group>

<p class="text-primary mt-4">Selected item: {{ selectedItem.label }}</p>`;

export const slot = `<c-radio-group [items]="items" [(ngModel)]="selectedValue" return-value cControl>
  Choose one of the following
  <c-link href="https://csc.fi" underline>options</c-link>
</c-radio-group>

<p class="text-primary mt-4">Selected value: {{ selectedValue }}</p>`;

export const disabled = `<c-radio-group
  [items]="disabled"
  [(ngModel)]="selectedDisabledItem"
  label="Disabled radio buttons"
  disabled
  cControl
></c-radio-group>

<p class="text-primary mt-4">Selected item: {{ selectedDisabledItem.label }}</p>`;
