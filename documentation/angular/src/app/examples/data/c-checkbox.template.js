
/**
 * Examples for c-checkbox.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-checkbox cControl [(ngModel)]="value" label="Example checkbox"></c-checkbox>
<p class="mt-2 mb-4 text-primary">Checkbox is {{ value ? 'checked' : 'not checked' }}</p>`;

export const slot = `<c-checkbox hint="Please agree to the terms and conditions">
  I agree to the
  <c-link href="https://csc.fi" underline>terms and conditions</c-link>
</c-checkbox>`;

export const disabled = `<c-checkbox cControl [(ngModel)]="value" label="Example checkbox" disabled></c-checkbox>
<p class="mt-2 mb-4 text-primary">Checkbox is {{ value ? 'checked' : 'not checked' }}</p>`;
