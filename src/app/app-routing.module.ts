import { Tab1Component } from './pages/tab1/tab1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Component } from './pages/tab2/tab2.component';

const routes: Routes = [
  {
    path: 'tab1',
    component: Tab1Component,
  },
  {
    path: 'tab2',
    component: Tab2Component,
  },
  {
    path: '',
    redirectTo: 'tab1',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
