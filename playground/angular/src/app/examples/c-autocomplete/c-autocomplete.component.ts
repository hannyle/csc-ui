import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-autocomplete',
  templateUrl: './c-autocomplete.component.html',
  styleUrls: ['./c-autocomplete.component.scss'],
})
export class CAutocompleteComponent implements OnInit {
  examples = [
    `<c-autocomplete
  label="Basic autocomplete"
  cControl
  [items]="filteredItems"
  [query]="query"
  (changeQuery)="changeQuery($event)"
  [(ngModel)]="value"
></c-autocomplete>`,
  ];

  scripts = [
    `query: any;
value = null;
items = [
  {
    value: 'first',
    name: 'First',
  },
  {
    value: 'second',
    name: 'Second',
  },
  {
    value: 'third',
    name: 'Third',
  },
];

get filteredItems() {
  if (!this.query) return this.items;
  return this.items
    .filter((i) => i.name?.toLowerCase()
    .includes(this.query?.toLowerCase()));
}

changeQuery(event) {
  this.query = event.detail;
}`,
  ];
  query: any;
  value = null;
  items = [
    {
      value: 'first',
      name: 'First',
    },
    {
      value: 'second',
      name: 'Second',
    },
    {
      value: 'third',
      name: 'Third',
    },
  ];

  get filteredItems() {
    if (!this.query) return this.items;
    return this.items.filter((i) => i.name?.toLowerCase().includes(this.query?.toLowerCase()));
  }

  changeQuery(event) {
    this.query = event.detail;
  }

  constructor() {}

  ngOnInit(): void {}
}
