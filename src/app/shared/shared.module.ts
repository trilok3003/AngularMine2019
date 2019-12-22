import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
import { TextareaDirective } from './directives/textarea.directive';
import { RandomColorDirective } from './directives/random-color.directive';
import { EditableDirective } from './directives/editable.directive';


@NgModule({
  declarations: [LoaderComponent, TextareaDirective, RandomColorDirective, EditableDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    LoaderComponent,
    TextareaDirective,
    RandomColorDirective,
    EditableDirective
  ]
})
export class SharedModule { }
