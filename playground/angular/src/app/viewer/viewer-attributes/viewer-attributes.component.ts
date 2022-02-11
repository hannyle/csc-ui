import { Component, Input, OnInit } from '@angular/core';
import { ComponentData } from 'src/interfaces/documentation';

@Component({
  selector: 'app-viewer-attributes',
  templateUrl: './viewer-attributes.component.html',
  styleUrls: ['./viewer-attributes.component.scss'],
})
export class ViewerAttributesComponent implements OnInit {
  @Input() data: ComponentData;

  constructor() {}

  ngOnInit(): void {}
}
