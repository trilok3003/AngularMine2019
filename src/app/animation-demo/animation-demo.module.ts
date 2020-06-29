import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationDemoRoutingModule } from './animation-demo-routing.module';
import { StartComponent } from './start.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [StartComponent, Example1Component, Example2Component, ShowHideComponent, DemoComponent],
  imports: [
    CommonModule,
    AnimationDemoRoutingModule
  ]
})
export class AnimationDemoModule { }
