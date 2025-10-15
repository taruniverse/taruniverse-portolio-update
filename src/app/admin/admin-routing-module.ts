import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Experience } from './experience/experience';
import { Setting } from './setting/setting';
import { Post } from './post/post';
import { Certificates } from './certificates/certificates';
import { Admin } from './admin';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Admin,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'experience',
        component: Experience,
      },
      {
        path: 'certificates',
        component: Certificates,
      },
      {
        path: 'post',
        component: Post,
      },
      {
        path: 'setting',
        component: Setting,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
