
/**
 * Examples for c-pagination.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const basic = `import { CPaginationOptions } from 'csc-ui';

countries = Object.values(countries).sort();

options: CPaginationOptions = {
  itemCount: this.countries.length,
  itemsPerPage: 25,
  currentPage: 1,
  startFrom: 0,
  endTo: 24,
};
`;

export const simple = `import { CPaginationOptions } from 'csc-ui';

countries = Object.values(countries).sort();

optionsSimple: CPaginationOptions = {
  itemCount: this.countries.length,
  itemsPerPage: 25,
  currentPage: 1,
  startFrom: 0,
  endTo: 24,
};
`;

export const programmatical = `import { CPaginationOptions } from 'csc-ui';

countries = Object.values(countries).sort();

options2: CPaginationOptions = {
  itemCount: this.countries.length,
  itemsPerPage: 25,
  currentPage: 1,
  startFrom: 0,
  endTo: 24,
};

constructor(private _changeDetectorRef: ChangeDetectorRef) {}

/**
 * Slice pipe requires manual update after pagination change
 */
updateView() {
  this._changeDetectorRef.detectChanges();
}

setPageToTwo() {
  // Options object needs to be fully replaced in order to trigger pagination change programmatically
  this.options2 = { ...this.options2, currentPage: 2 };
}

showFiftyItemsPerPage() {
  // Options object needs to be fully replaced in order to trigger pagination change programmatically
  this.options2 = {
    ...this.options2,
    itemsPerPage: 50,
  };
}
`;

