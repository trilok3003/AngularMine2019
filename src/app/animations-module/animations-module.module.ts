import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsModuleRoutingModule } from './animations-module-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [HomeComponent, AboutComponent, ListComponent, InsertRemoveComponent, OpenCloseComponent, StatusSliderComponent, ToggleComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    AnimationsModuleRoutingModule
  ]
})
export class AnimationsModuleModule { }
