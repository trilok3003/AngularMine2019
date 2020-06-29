import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularModelRoutingModule } from './angular-model-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AngularModelRoutingModule,
    FormsModule
  ]
})
export class AngularModelModule { }
