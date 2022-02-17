import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-progressbar',
  templateUrl: './c-progressbar.component.html',
  styleUrls: ['./c-progressbar.component.scss'],
})
export class CProgressbarComponent implements OnInit, OnDestroy {
  progress = 0;
  interval = null;
  examples = [
    `
<c-progressbar value="50"></c-progressbar>
<c-progressbar [value]="progress"></c-progressbar>
  `,
  ];

  scripts = [
    `
progress = 0;
interval = null;

ngOnInit() {
  this.interval = setInterval(() => {
    this.progress = Math.ceil(Math.random() * 100);
  }, 2000);
}

ngOnDestroy() {
  clearInterval(this.interval);
}
  `,
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.progress = Math.ceil(Math.random() * 100);
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
