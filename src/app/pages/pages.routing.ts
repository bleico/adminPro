import { PerfilComponent } from './perfil/perfil.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../guard/auth.guard';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta'} },
      { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica #1' } },
      { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario'}},
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs'}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
