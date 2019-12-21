import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { TextareaDirective } from './directives/textarea.directive';


@NgModule({
  declarations: [LoaderComponent, TextareaDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    LoaderComponent,
    TextareaDirective
  ]
})
export class SharedModule { }
