import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CControl } from './app.accessor';

import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { CButtonComponent } from './examples/c-button/c-button.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { CCardComponent } from './examples/c-card/c-card.component';
import { ExampleComponent } from './examples/example/example.component';
import { ViewerAttributesComponent } from './viewer/viewer-attributes/viewer-attributes.component';
import { ViewerSlotsComponent } from './viewer/viewer-slots/viewer-slots.component';

@NgModule({
  declarations: [
    AppComponent,
    CControl,
    ViewerComponent,
    CButtonComponent,
    DynamicComponentDirective,
    CCardComponent,
    ExampleComponent,
    ViewerAttributesComponent,
    ViewerSlotsComponent,
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
