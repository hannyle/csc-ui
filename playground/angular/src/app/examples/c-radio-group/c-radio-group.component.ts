import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-radio-group',
  templateUrl: './c-radio-group.component.html',
  styleUrls: ['./c-radio-group.component.scss'],
})
export class CRadioGroupComponent implements OnInit {
  items = [
    { label: 'Radio 1', value: 'one' },
    { label: 'Radio 2', value: 'two' },
    { label: 'Radio 3', value: 'three' },
  ];

  selectedItem = this.items[1];

  raw = {
    default: `<c-radio-group
      cControl
      label="Example radio buttons"
      [items]="items"
      [(ngModel)]="selectedItem"
    ></c-radio-group>

    <p style="margin-top: 16px">Selected item: {{ selectedItem.label }}</p>`,

    disabled: `<c-radio-group
      cControl
      label="Disabled radio buttons"
      [items]="items"
      [(ngModel)]="selectedItem"
      disabled
    ></c-radio-group>

    <p style="margin-top: 16px">Selected item: {{ selectedItem.label }}</p>`,
  };

  script = `items = [
    { label: 'Radio 1', value: 'one' },
    { label: 'Radio 2', value: 'two' },
    { label: 'Radio 3', value: 'three' },
  ];

  selectedItem = this.items[1];`;

  constructor() {}

  ngOnInit(): void {}
}
