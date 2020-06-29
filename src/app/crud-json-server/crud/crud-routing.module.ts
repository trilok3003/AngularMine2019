import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from '../student-create/student-create.component';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { CrudComponent } from '../crud.component';


const routes: Routes = [
  { path: '', component: CrudComponent, children: [{
   path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'create', component: StudentCreateComponent },
    { path: 'edit/:id', component: StudentEditComponent},
    { path: 'list', component: StudentListComponent } 
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
