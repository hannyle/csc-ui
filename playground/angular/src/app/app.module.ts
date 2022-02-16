import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CControl } from './app.accessor';

import { AppComponent } from './app.component';
import { CButtonComponent } from './examples/c-button/c-button.component';
import { CCardComponent } from './examples/c-card/c-card.component';
import { CContentSwitcherComponent } from './examples/c-content-switcher/c-content-switcher.component';
import { CIconButtonComponent } from './examples/c-icon-button/c-icon-button.component';
import { CSwitchComponent } from './examples/c-switch/c-switch.component';
import { CTabComponent } from './examples/c-tab/c-tab.component';
import { CTabsComponent } from './examples/c-tabs/c-tabs.component';
import { CTagComponent } from './examples/c-tag/c-tag.component';
import { CTextFieldComponent } from './examples/c-text-field/c-text-field.component';
import { CTitleComponent } from './examples/c-title/c-title.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { ExampleComponent } from './examples/example/example.component';
import { ViewerAttributesComponent } from './viewer/viewer-attributes/viewer-attributes.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ViewerEventsComponent } from './viewer/viewer-events/viewer-events.component';
import { ViewerSlotsComponent } from './viewer/viewer-slots/viewer-slots.component';
import { CAutocompleteComponent } from './examples/c-autocomplete/c-autocomplete.component';
import { CCheckboxComponent } from './examples/c-checkbox/c-checkbox.component';
import { CTabButtonsComponent } from './examples/c-tab-buttons/c-tab-buttons.component';
import { CPaginationComponent } from './examples/c-pagination/c-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CButtonComponent,
    CCardComponent,
    CContentSwitcherComponent,
    CControl,
    CIconButtonComponent,
    CSwitchComponent,
    CTabComponent,
    CTabsComponent,
    CTagComponent,
    CTextFieldComponent,
    CTitleComponent,
    DynamicComponentDirective,
    ExampleComponent,
    ViewerAttributesComponent,
    ViewerComponent,
    ViewerEventsComponent,
    ViewerSlotsComponent,
    CCheckboxComponent,
    CAutocompleteComponent,
    CTabButtonsComponent,
    CPaginationComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
