
/**
 * Examples for c-autocomplete.
 * Automatically generated at 5/24/2022, 8:09:04 AM.
 *
 * ⚠️ DO NOT EDIT THESE MANUALLY AS THEY WILL BE OVERWRITTEN IN THE NEXT BUILD!
 */
export const angular = `query: any;

selection = null;

items: CAutocompleteItem[] = Object.keys(countries)
  .map((key) => ({
    value: key,
    name: countries[key],
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

addedTags: CAutocompleteItem[] = [];

get filteredItems() {
  if (!this.query) return this.items;
  return this.items.filter((i) => i.name?.toLowerCase().includes(this.query?.toLowerCase()));
}

changeQuery(event) {
  this.query = event.detail;
}

addTag() {
  if (!!this.selection) this.addedTags.push(this.selection);

  this.selection = null;
  this.query = null;
}

removeTag(index) {
  this.addedTags.splice(index, 1);
}
`;

export const returnValue = `searchString: any;

tags: string[] = [];

value: string = '';

get countries() {
  if (!this.searchString) return this.items;
  return this.items.filter((i) =>
    i.name?.toLowerCase().includes(this.searchString?.toLowerCase()),
  );
}

onAddTag() {
  if (!!this.value) this.tags.push(this.value);

  this.value = null;
  this.searchString = null;
}

onQueryChange(event) {
  this.searchString = event.detail;
}
`;

