
/**
 * Examples for c-tag.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-tag [active]="active[0]" (click)="toggleActive(0)">One</c-tag>
<c-tag [active]="active[1]" (click)="toggleActive(1)">Two</c-tag>
<c-tag [active]="active[2]" (click)="toggleActive(2)">Three</c-tag>`;

export const flat = `<c-tag flat>One</c-tag>
<c-tag flat>Two</c-tag>
<c-tag flat>Three</c-tag>`;

export const closeable = `<c-tag closeable>One</c-tag>
<c-tag closeable active>Two</c-tag>
<c-tag closeable>Three</c-tag>`;

export const badges = `<c-tag badge="0">Orange</c-tag>
<c-tag badge="4" active>Pineapple</c-tag>
<c-tag badge="2" closeable active>Banana</c-tag>
<c-tag badge="1" closeable active>Apple</c-tag>
<c-tag badge="12" closeable>Strawberry</c-tag>`;

export const fit = `<c-tag fit>One</c-tag>
<c-tag fit active>Two</c-tag>
<c-tag fit>Three</c-tag>`;
