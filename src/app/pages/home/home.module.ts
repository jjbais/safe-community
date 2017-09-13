import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { SmsComponent } from './sms/sms.component';
import { DatalogsComponent } from './datalogs/datalogs.component';
import { AuthGuard } from 'app/guards/auth.guard';

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          { path: '', component: DashboardComponent },
          { path: 'users', component: UsersComponent },
          { path: 'devices', component: DevicesComponent },
          { path: 'sms', component: SmsComponent },
          { path: 'logs', component: DatalogsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule
  ],
  declarations: []
})
export class HomeModule { }
