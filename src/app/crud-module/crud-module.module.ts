import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudModuleRoutingModule } from './crud-module-routing.module';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CrudModuleRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CrudModuleModule { }
