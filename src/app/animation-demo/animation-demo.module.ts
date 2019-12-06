import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationDemoRoutingModule } from './animation-demo-routing.module';
import { StartComponent } from './start.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { ShowHideComponent } from './show-hide/show-hide.component';


@NgModule({
  declarations: [StartComponent, Example1Component, Example2Component, ShowHideComponent],
  imports: [
    CommonModule,
    AnimationDemoRoutingModule
  ]
})
export class AnimationDemoModule { }
