import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDataComponent } from './compoents/group-data/group-data.component';
import { DyanamicFormComponent } from './compoents/dyanamic-form/dyanamic-form.component';


const routes: Routes = [
  {path:'group',component:GroupDataComponent},
  {path:'dynamic_form',component:DyanamicFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
