import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  Router,
  NavigationEnd,
} from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { routeState } from './global/state';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'info',
    loadChildren: './pages/info/info.module#InfoModule',
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      urlUpdateStrategy: 'eager',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        routeState.next(event.urlAfterRedirects);
      }
    });
  }
}
