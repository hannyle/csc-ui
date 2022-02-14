import { Component, OnInit } from '@angular/core';
import { Example } from '../example/Example';
import * as template from './c-button.component.html';

@Component({
  selector: 'app-c-button',
  templateUrl: './c-button.component.html',
  styleUrls: ['./c-button.component.scss'],
  providers: [{ provide: Example, useExisting: CButtonComponent }],
})
export class CButtonComponent implements OnInit, Example {
  templateText = template.default;

  constructor() {}

  ngOnInit(): void {}
}
