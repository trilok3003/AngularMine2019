import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogDirective } from './dialog.directive';



@NgModule({
  declarations: [DialogComponent, DialogDirective],
  imports: [
    CommonModule
  ],
  exports: [DialogComponent]
})
export class CustomDialogModule { }
