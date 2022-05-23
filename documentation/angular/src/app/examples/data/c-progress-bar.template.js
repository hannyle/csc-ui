
/**
 * Examples for c-progress-bar.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-progress-bar value="50"></c-progress-bar>
<c-progress-bar [value]="progress"></c-progress-bar>`;

export const customColors = `<c-progress-bar
  value="75"
  color="var(--csc-error)"
  aria-label="Remaining resources"
></c-progress-bar>
<c-progress-bar value="37" color="#16c1dd"></c-progress-bar>`;

export const indeterminate = `<c-progress-bar indeterminate></c-progress-bar>
<c-progress-bar indeterminate color="#16c1dd"></c-progress-bar>`;
