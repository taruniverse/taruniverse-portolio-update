import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ExpPage } from './exp-page/exp-page';
import { Post } from './post/post';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () => import('./main/main-module').then((m) => m.MainModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFound,
  },
];
