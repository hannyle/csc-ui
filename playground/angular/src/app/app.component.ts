import { Component } from '@angular/core';
import docs from '../../../../docs.json';
import { parseComponents } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedComponent = {};
  components = [];

  constructor() {
    this.components = parseComponents(docs);
    this.selectedComponent = this.components[0];
  }

  showElement(tag) {
    const element = document.getElementById(tag);
    if (element) {
      element.scrollIntoView();
    }
  }
}
