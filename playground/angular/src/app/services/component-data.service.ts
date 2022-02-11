import { Injectable } from '@angular/core';
import { ComponentData } from 'src/interfaces/documentation';

@Injectable({
  providedIn: 'root',
})
export class ComponentDataService {
  activeComponent: ComponentData;

  constructor() {}
}
