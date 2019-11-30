import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
  {path: 'list', component: ListComponent},
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {path: 'view', component: ViewComponent}  
]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomRoutingModule { }
