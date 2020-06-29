import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarOrderComponent } from './car-order/car-order.component';
import { CarTotalComponent } from './car-total/car-total.component';
import { CarAboutComponent } from './car-about/car-about.component';
import { CarComponent } from './car.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarOrderComponent, CarTotalComponent, CarAboutComponent, CarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
