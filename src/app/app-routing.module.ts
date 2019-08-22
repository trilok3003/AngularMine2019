import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDataComponent } from './compoents/group-data/group-data.component';
import { DyanamicFormComponent } from './compoents/dyanamic-form/dyanamic-form.component';
import { GroupByPipeExampleComponent } from './compoents/group-by-pipe-example/group-by-pipe-example.component';
import { BehaviourSubjectExampleComponent } from './compoents/behaviour-subject-example/behaviour-subject-example.component';
import { CustomComponent } from './compoents/custom/custom.component';
import { SearchAutoCompleteComponent } from './compoents/search-auto-complete/search-auto-complete.component';
import { TodoComponent } from './compoents/todo/todo.component';
import { TestComponent } from './compoents/test/test.component';


const routes: Routes = [
  {path:'group',component:GroupDataComponent},
  {path:'dynamic_form',component:DyanamicFormComponent},
  {path: 'group_by_pipe',component: GroupByPipeExampleComponent},
  {path:'behaviour',component:BehaviourSubjectExampleComponent},
  {path:'custom',component:CustomComponent},
  {path:'search',component:SearchAutoCompleteComponent},
  {path:'todo',component:TodoComponent},
  {path:'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
