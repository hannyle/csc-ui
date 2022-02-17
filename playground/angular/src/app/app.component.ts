import { Component, OnInit } from '@angular/core';
import { ComponentData } from 'src/interfaces/documentation';
import { ComponentDataService } from './services/component-data.service';
import { parseComponents } from './utils/utils';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import docs from '../../../../docs.json';
import { map, Observable } from 'rxjs';

interface ComponentGroup {
  name: string;
  components: ComponentData[];
  visible: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedComponent = {};
  components = [];
  groups = [];
  groupedComponents: ComponentGroup[] = [];
  activeComponent: ComponentData;

  constructor(
    public componentDataService: ComponentDataService,
    private _breakpointObserver: BreakpointObserver,
  ) {
    this.components = parseComponents(docs);
    this.groupedComponents = this.getGroupedComponents();
    this.componentDataService.activeComponent$.subscribe((activeComponent) => {
      this.activeComponent = activeComponent;
      this._openGroupOfActiveComponent();
    });
  }

  ngOnInit() {}

  isMobile$: Observable<boolean> = this._breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
    .pipe(map((obs) => obs.matches));

  filterComponents(event: Event) {
    const query = (event.target as HTMLInputElement).value;

    this.groupedComponents = this.getGroupedComponents(query, true);
  }

  getGroupedComponents(query = null, visible = false): ComponentGroup[] {
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
          groups.push({ name: groupName, components: [component], visible: visible && !!query });

          return groups;
        }

        group.components.push(component);

        return groups;
      }, [] as ComponentGroup[])
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private _openGroupOfActiveComponent() {
    const activeGroup = this.groupedComponents.find((group) =>
      group.components.some((component) => component.tag === this.activeComponent?.tag),
    );
    if (activeGroup) {
      activeGroup.visible = true;
    }
  }
}
