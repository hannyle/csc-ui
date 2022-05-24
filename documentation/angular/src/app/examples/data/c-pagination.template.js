
/**
 * Examples for c-pagination.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<div class="pb-4">
  <c-tag *ngFor="let country of countries | slice: options.startFrom:options.endTo + 1">
    {{ country }}
  </c-tag>
</div>

<c-pagination cControl [(ngModel)]="options"></c-pagination>`;

export const simple = `<div class="pb-4">
  <c-tag
    *ngFor="let country of countries | slice: optionsSimple.startFrom:optionsSimple.endTo + 1"
  >
    {{ country }}
  </c-tag>
</div>

<c-pagination cControl [(ngModel)]="optionsSimple" hide-details simple></c-pagination>`;

export const programmatical = `<c-card>
  <c-card-title>Example</c-card-title>

  <c-card-content>
    <div>
      <c-tag *ngFor="let country of countries | slice: options2.startFrom:options2.endTo + 1">
        {{ country }}
      </c-tag>
    </div>
  </c-card-content>

  <c-card-actions justify="stretch">
    <c-pagination cControl [(ngModel)]="options2" (changeValue)="updateView()"></c-pagination>
  </c-card-actions>
</c-card>

<div class="pt-3">
  <p>Programmatically change pagination values:</p>

  <c-row gap="8">
    <c-button (click)="setPageToTwo()">Page 2</c-button>
    <c-button (click)="showFiftyItemsPerPage()">50 items per page</c-button>
  </c-row>
</div>`;
