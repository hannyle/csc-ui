
/**
 * Examples for c-sidenavigation.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-sidenavigation>
  <c-sidenavigationitem
    *ngFor="let item of items"
    [active]="currentItem === item"
    (click)="currentItem = item"
  >
    <div slot="main">
      <span class="mdi {{ item.icon }}"></span>
      {{ item.title }}
    </div>

    <div *ngIf="item.subs?.length" slot="subnavitem">
      <c-subnavigationitem *ngFor="let sub of item.subs" href="https://www.csc.fi">
        {{ sub.title }}
      </c-subnavigationitem>
    </div>
  </c-sidenavigationitem>
</c-sidenavigation>`;
