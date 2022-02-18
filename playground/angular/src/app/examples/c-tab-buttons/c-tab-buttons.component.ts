import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-tab-buttons',
  templateUrl: './c-tab-buttons.component.html',
  styleUrls: ['./c-tab-buttons.component.scss'],
})
export class CTabButtonsComponent implements OnInit {
  example = `<c-tab-buttons cControl [(ngModel)]="selectedTab">
  <c-tab-button
    *ngFor="let tab of tabs; let i = index"
    icon="storage"
    [label]="tab.label"
    [value]="tab.value"
  >
    <i class="mdi mdi-server" slot="icon"></i>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span *ngIf="i % 2 === 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </c-tab-button>
</c-tab-buttons>

<p>Active tab: {{ selectedTab }}</p>
  `;

  script = `selectedTab: '1';

tabs = [
  {
    label: 'One',
    value: '1',
  },
  {
    label: 'Two',
    value: '2',
  },
  {
    label: 'Three',
    value: '3',
  },
  {
    label: 'Four',
    value: '4',
  },
  {
    label: 'Five',
    value: '5',
  },
  {
    label: 'Six',
    value: '6',
  },
];
  `;

  selectedTab = '1';

  tabs = [
    {
      label: 'One',
      value: '1',
    },
    {
      label: 'Two',
      value: '2',
    },
    {
      label: 'Three',
      value: '3',
    },
    {
      label: 'Four',
      value: '4',
    },
    {
      label: 'Five',
      value: '5',
    },
    {
      label: 'Six',
      value: '6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
