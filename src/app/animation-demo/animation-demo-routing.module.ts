import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {path:'', component: StartComponent, children: [
    { path: '', redirectTo: 'example1', pathMatch: 'full' }, 
    {path: 'example1', component: Example1Component},
    {path: 'example2', component: Example2Component},
    {path: 'showhide', component: ShowHideComponent},
    {path: 'demo', component: DemoComponent}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationDemoRoutingModule { }
