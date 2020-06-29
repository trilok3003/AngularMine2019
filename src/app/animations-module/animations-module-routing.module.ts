import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    {path: 'list', component: ListComponent, data: {animation: 'FilterPage'}},
    {path: 'enter-leave', component: InsertRemoveComponent},
    {path: 'open-close', component: OpenCloseComponent},
    {path: 'status-slider', component: StatusSliderComponent},
    {path: 'toggle', component: ToggleComponent},
    {path: 'about', component: AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsModuleRoutingModule { }
