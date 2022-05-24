
/**
 * Examples for c-radio-group.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const slot = `selectedValue = 'one';

items = [
  { label: 'Radio 1', value: 'one' },
  { label: 'Radio 2', value: 'two' },
  { label: 'Radio 3', value: 'three' },
];
`;

export const basic = `items = [
  { label: 'Radio 1', value: 'one' },
  { label: 'Radio 2', value: 'two' },
  { label: 'Radio 3', value: 'three' },
];

selectedItem = this.items[1];
`;

export const disabled = `disabled = [
  { label: 'Radio 1', value: 'one--disabled' },
  { label: 'Radio 2', value: 'two--disabled' },
  { label: 'Radio 3', value: 'three--disabled' },
];

selectedDisabledItem = this.disabled[2];
`;

