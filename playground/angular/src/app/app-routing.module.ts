import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ViewerResolverService } from './viewer/viewer-resolver.service';
import { ViewerComponent } from './viewer/viewer.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':tag',
        component: ViewerComponent,
        resolve: [ViewerResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
