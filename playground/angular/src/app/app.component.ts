import { Component } from '@angular/core';
import { ComponentData } from 'src/interfaces/documentation';
import { ComponentDataService } from './services/component-data.service';
import { parseComponents } from './utils/utils';
import docs from '../../../../docs.json';

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
  selectedComponent = {};
  components = [];
  groups = [];
  groupedComponents: ComponentGroup[] = [];

  constructor(public componentDataService: ComponentDataService) {
    this.components = parseComponents(docs);
    this.groupedComponents = this.getGroupedComponents();
  }

  filterComponents(event: Event) {
    const query = (event.target as HTMLInputElement).value;

    this.groupedComponents = this.getGroupedComponents(query);
  }

  getGroupedComponents(query = null): ComponentGroup[] {
    return this.components
      .filter((component) => {
        if (!query) return component;

        return component.tag.includes(query);
      })
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
