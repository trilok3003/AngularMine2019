import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingRoutingModule } from './routing-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404Component } from './page404/page404.component';
import { AngularNestedRoutingComponent } from './angular-nested-routing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AttendanceComponent,
    Page404Component,
    AngularNestedRoutingComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class AngularNestedRoutingModule { }
