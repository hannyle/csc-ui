
/**
 * Examples for c-swiper.
 * Automatically generated at 5/23/2022, 5:59:55 PM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-swiper [(ngModel)]="selectedTab" cControl>
  <c-swiper-tab
    *ngFor="let tab of tabs; let i = index"
    icon="storage"
    [label]="tab.label"
    [value]="tab.value"
  >
    <i class="mdi mdi-server" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span *ngIf="i % 2 === 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </c-swiper-tab>
</c-swiper>
<p class="mt-3">Active tab: {{ selectedTab }}</p>`;
