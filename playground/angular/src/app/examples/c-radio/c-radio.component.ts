import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-radio',
  templateUrl: './c-radio.component.html',
  styleUrls: ['./c-radio.component.scss'],
})
export class CRadioComponent implements OnInit {
  items = [
    { label: 'Radio 1', value: 'one' },
    { label: 'Radio 2', value: 'two' },
    { label: 'Radio 3', value: 'three' },
  ];

  selectedItem = this.items[1];

  constructor() {}

  ngOnInit(): void {}
}
