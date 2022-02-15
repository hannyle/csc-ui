import { Component } from '@angular/core';
import { ConnectableObservable, Subscription } from 'rxjs';
import { ComponentData } from 'src/interfaces/documentation';
import docs from '../../../../docs.json';
import { ComponentDataService } from './services/component-data.service';
import { parseComponents } from './utils/utils';

interface ComponentGroup {
  name: string;
  components: ComponentData[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _routeSubscription: Subscription;
  selectedComponent = {};
  components = [];
  groups = [];
  groupedComponents: ComponentGroup[] = [];

  constructor(public componentDataService: ComponentDataService) {
    this.components = parseComponents(docs);
    this.groupedComponents = this.getGroupedComponents();
  }

  getGroupedComponents(): ComponentGroup[] {
    return this.components
      .reduce((groups: ComponentGroup[], component) => {
        const groupName = (
          component.docsTags.find((docsTag) => docsTag.name === 'group')?.text || 'ungrouped'
        ).toLowerCase();
        const group = groups.find((group) => group.name === groupName);

        if (!group) {
          groups.push({ name: groupName, components: [component] });

          return groups;
        }

        group.components.push(component);

        return groups;
      }, [] as ComponentGroup[])
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  showElement(tag) {
    const element = document.getElementById(tag);
    if (element) {
      element.scrollIntoView();
    }
  }
}
