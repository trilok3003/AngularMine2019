import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from '../crud.component';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { StudentCreateComponent } from '../student-create/student-create.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CrudComponent, StudentListComponent, StudentEditComponent, StudentCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
