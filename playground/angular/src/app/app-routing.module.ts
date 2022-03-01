import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BasicTemplateComponent } from './basic-template/basic-template.component';
import { GettingStartedAngularComponent } from './getting-started-angular/getting-started-angular.component';
import { ViewerResolverService } from './viewer/viewer-resolver.service';
import { ViewerComponent } from './viewer/viewer.component';

const appRoutes: Routes = [
  {
    path: '',
    resolve: [ViewerResolverService],
    children: [
      {
        path: 'getting-started/angular',
        component: GettingStartedAngularComponent,
      },
      {
        path: 'templates/basic-template',
        component: BasicTemplateComponent,
      },
      {
        path: ':tag',
        component: ViewerComponent,
        resolve: [ViewerResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
