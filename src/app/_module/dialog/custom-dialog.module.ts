import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogDirective } from './dialog.directive';
import { ClickElsewhereDirective } from './click-else-where.directive';



@NgModule({
  declarations: [DialogComponent, DialogDirective, ClickElsewhereDirective],
  imports: [
    CommonModule
  ],
  exports: [DialogComponent, ClickElsewhereDirective]
})
export class CustomDialogModule { }
