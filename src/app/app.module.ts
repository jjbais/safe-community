import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule
} from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { HomeModule } from './pages/home/home.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/home/dashboard/dashboard.component';
import { UsersComponent } from './pages/home/users/users.component';
import { DevicesComponent } from './pages/home/devices/devices.component';
import { SmsComponent } from './pages/home/sms/sms.component';
import { DatalogsComponent } from './pages/home/datalogs/datalogs.component';

import { DatabaseService } from './services/database.service';
import { MqttService } from './services/mqtt.service';
import { AuthService } from './services/auth.service';
import { DialogService } from './services/dialog.service';

import { AuthGuard } from './guards/auth.guard';

import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { PopUpMessageComponent } from './components/pop-up-message/pop-up-message.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    DevicesComponent,
    SmsComponent,
    AddAdminComponent,
    AddUserComponent,
    PopUpMessageComponent,
    DatalogsComponent
  ],
  entryComponents: [
    AddAdminComponent,
    AddUserComponent,
    PopUpMessageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    HomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeIcYRl-tih-RWxM8AAgN2aYmyq44AspA'
    })
  ],
  providers: [DatabaseService, MqttService, AuthService, DialogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
