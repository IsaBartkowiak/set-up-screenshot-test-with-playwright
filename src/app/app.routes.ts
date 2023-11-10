import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./coffee-list/coffee-list.component').then(m => m.CoffeeListComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./coffee-details/coffee-details.component').then(m => m.CoffeeDetailsComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
