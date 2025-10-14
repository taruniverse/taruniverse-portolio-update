import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home-page/home-page';
import { ExpPage } from '../exp-page/exp-page';
import { Post } from '../post/post';
import { Main } from './main';

const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'experience',
        component: ExpPage,
      },
      {
        path: 'post',
        component: Post,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
