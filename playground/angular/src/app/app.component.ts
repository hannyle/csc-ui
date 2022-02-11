import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import docs from '../../../../docs.json';
import { ComponentDataService } from './services/component-data.service';
import { parseComponents } from './utils/utils';

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
  groupedComponents = [];

  constructor(public componentDataService: ComponentDataService) {
    this.components = parseComponents(docs);

    const groups = this.getGroups();
    this.groupedComponents = groups.map((group) => ({
      name: group,
      components: [
        ...this.components.filter((component) => {
          if (group === '') {
            return !component.docsTags.some((tag) => tag.name === 'group');
          }
          return component.docsTags.some((tag) => tag.name === 'group' && tag.text === group);
        }),
      ],
    }));
  }

  getGroups() {
    const groups = this.components.reduce((items, component) => {
      const group = component.docsTags.find((docsTag) => docsTag.name === 'group')?.text;
      if (group) {
        items.push(group);
      }

      return items;
    }, []);
    groups.push('');

    return [...new Set(groups)];
  }

  showElement(tag) {
    const element = document.getElementById(tag);
    if (element) {
      element.scrollIntoView();
    }
  }
}
