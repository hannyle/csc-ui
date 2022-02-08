import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  csValue = 2;
  csValue2 = 1;
  tfValue = '';
  swValue = false;
  cbValue = { name: 'Joo', value: '1' };
  test = '';

  log(e: Event) {
    console.log('🤡', e.type, (e.target as HTMLInputElement).value);
  }

  setCsValue(e: Event) {
    this.csValue = +(e.target as HTMLInputElement).value;
  }

  setCsValue2(e: Event) {
    this.csValue2 = +(e.target as HTMLInputElement).value;
  }

  onChange(e: Event) {
    console.log(e);
  }
}
