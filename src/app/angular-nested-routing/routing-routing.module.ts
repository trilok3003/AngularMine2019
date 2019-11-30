import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { Page404Component } from './page404/page404.component';
import { AngularNestedRoutingComponent } from './angular-nested-routing.component';


const routes: Routes = [
    {path: '', component: AngularNestedRoutingComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'leaves', loadChildren: () => import(`./leaves/leaves.module`).then(m => m.LeavesModule) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: Page404Component },
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
