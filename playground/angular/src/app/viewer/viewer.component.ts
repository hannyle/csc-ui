import { Component, ComponentRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComponentData } from 'src/interfaces/documentation';
import { DynamicComponentDirective } from '../directives/dynamic-component.directive';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicComponentDirective, { static: true })
  dynamicComponent!: DynamicComponentDirective;

  private _subscriptions: Subscription[] = [];
  componentTag: string = '';
  componentData: ComponentData;
  _dynamicInstance: ComponentRef<any>;
  tabs = [];
  activeTab = 'Examples';

  constructor(private _activatedRoute: ActivatedRoute, private _sanitizer: DomSanitizer) {}

  get usage() {
    return Object.values(this.componentData.usage).map((item) =>
      this._sanitizer.bypassSecurityTrustHtml(item),
    );
  }

  componentClassName(tag) {
    return `${tag.replace(/(^\w|-\w)/g, this.clearAndUpper)}Component`;
  }

  clearAndUpper(text) {
    return text.replace(/-/, '').toUpperCase();
  }

  private async loadDynamicComponent(tag) {
    this._dynamicInstance?.destroy();
    try {
      const component = await import(`../examples/${tag}/${tag}.component`);
      this._dynamicInstance = this.dynamicComponent.viewContainerRef.createComponent(
        component[this.componentClassName(tag)],
      );
      const element: HTMLElement = this._dynamicInstance.location.nativeElement;
      element.classList.add('example');
    } catch (error) {}
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this._activatedRoute.data.subscribe((data) => {
        this.componentData = data[0];
        this.loadDynamicComponent(this.componentData.tag);
        this.tabs = [
          {
            label: 'Examples',
            enabled: true,
            query: {},
          },
          {
            label: 'Attributes',
            enabled:
              !!this.componentData?.props?.length ||
              !!this.componentData?.children?.some((child) => child.props?.length),
            query: {
              tab: 'attrs',
            },
          },
          {
            label: 'Slots',
            enabled:
              !!this.componentData?.slots?.length ||
              !!this.componentData?.children?.some((child) => child.slots?.length),
            query: {
              tab: 'slots',
            },
          },
        ];
      }),
    );

    this._subscriptions.push(
      this._activatedRoute.queryParams.subscribe((params) => {
        this.activeTab =
          this.tabs.find((tab) => tab.query?.tab == params['tab'])?.label || this.tabs[0].label;
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
