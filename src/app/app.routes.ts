import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':coffeeType',
    loadComponent: () => import('./list-beers/coffee-list.component').then(m => m.CoffeeListComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hot',
  }
];
