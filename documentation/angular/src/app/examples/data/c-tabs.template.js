
/**
 * Examples for c-tabs.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-tabs value="tab1">
  <c-tab value="tab1">One</c-tab>
  <c-tab value="tab2">Two</c-tab>
  <c-tab value="tab3" disabled>Three</c-tab>
</c-tabs>`;

export const borderless = `<c-tabs value="tab1" borderless>
  <c-tab value="tab1">One</c-tab>
  <c-tab value="tab2">Two</c-tab>
  <c-tab value="tab3">Three</c-tab>
</c-tabs>`;

export const angular = `<c-tabs [(ngModel)]="tab" cControl>
  <c-tab value="tab1">One</c-tab>
  <c-tab value="tab2">Two</c-tab>
  <c-tab value="tab3">Three</c-tab>
</c-tabs>

<p class="mt-3" *ngIf="tab === 'tab1'">This is tab one</p>
<p class="mt-3" *ngIf="tab === 'tab2'">And this is tab two</p>
<p class="mt-3" *ngIf="tab === 'tab3'">Here is tab three</p>

<c-row><c-button (click)="onTabChange()">Select tab two</c-button></c-row>`;
