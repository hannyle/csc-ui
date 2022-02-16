import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-tab-buttons',
  templateUrl: './c-tab-buttons.component.html',
  styleUrls: ['./c-tab-buttons.component.scss'],
})
export class CTabButtonsComponent implements OnInit {
  value: 1;

  tabs = [
    {
      label: 'uksi',
      value: '1',
    },
    {
      label: 'kaksi',
      value: '2',
    },
    {
      label: 'kolme',
      value: '3',
    },
    {
      label: 'nelä',
      value: '4',
    },
    {
      label: 'visi',
      value: '5',
    },
    {
      label: 'kusi',
      value: '6',
    },
  ];

  currentTab = '1';

  constructor() {}

  ngOnInit(): void {}
}
