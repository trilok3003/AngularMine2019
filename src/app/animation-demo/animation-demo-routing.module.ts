import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { ShowHideComponent } from './show-hide/show-hide.component';


const routes: Routes = [
  {path:'', component: StartComponent, children: [
    { path: '', redirectTo: 'start', pathMatch: 'full' }, 
    {path: 'start', component: StartComponent},
    {path: 'example1', component: Example1Component},
    {path: 'example2', component: Example2Component},
    {path: 'showhide', component: ShowHideComponent}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationDemoRoutingModule { }
