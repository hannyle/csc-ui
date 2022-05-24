
/**
 * Examples for c-data-table.
 * Automatically generated at 5/24/2022, 8:51:23 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */

export const basic = `<c-data-table id="basic" [data]="basicData" [headers]="basicHeaders"></c-data-table>`;

export const complex = `<c-data-table
  id="complex"
  [data]="data"
  [headers]="headers"
  [footerOptions]="footerOptions"
  [pagination]="paginationOptions"
  [sortBy]="sortBy"
  [sortDirection]="direction"
  selection-property="id"
  selectable
  single-expansion
  (selection)="onSelection($event)"
></c-data-table>

<div class="mt-4">
  <span class="text-primary">Currently selected ids:</span>
  {{ selections.join(', ') || 'none' }}
</div>`;

export const paginated = `<c-data-table
  id="external-data"
  [data]="pagedData"
  [headers]="externalHeaders"
  [loading]="loading"
  [pagination]="externalOptions"
  [sortBy]="externalSortBy"
  [sortDirection]="externalDirection"
  no-data-text="There seems to be an error while fetching the data. Please try again later."
  external-data
  (paginate)="onPagination($event)"
  (sort)="onSort($event)"
></c-data-table>`;
