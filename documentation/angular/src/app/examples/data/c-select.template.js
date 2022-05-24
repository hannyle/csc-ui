
/**
 * Examples for c-select.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-select
  cControl
  label="Your favorite fruit"
  return-value
  [items]="items"
  [(ngModel)]="value"
  placeholder="Select a fruit"
></c-select>

<p class="mt-3">Selected fruit: {{ value || 'None' }}</p>`;

export const shadow = `<c-select
  shadow
  cControl
  [items]="items"
  [(ngModel)]="selection"
  placeholder="Select a fruit"
></c-select>

<p class="mt-3">Selected fruit: {{ (selection | json) || 'None' }}</p>`;

export const scrollable = `<c-select
  required
  cControl
  [itemsPerPage]="4"
  [items]="items"
  [(ngModel)]="selection"
  [valid]="!!selection?.value"
  placeholder="Select a fruit"
></c-select>

<p class="mt-3">Selected fruit: {{ (selection | json) || 'None' }}</p>`;
