import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService, Car } from '../car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-order',
  templateUrl: './car-order.component.html',
  styleUrls: ['./car-order.component.css']
})
export class CarOrderComponent implements OnInit {

  car: Observable<Car>;
  total: number = 10;
  form: FormGroup;

  constructor(
    private carOrderService: CarService, private formBuilder: FormBuilder) {
    this.car = this.carOrderService.car;
  
    this.form = this.formBuilder.group({
      color: ['#000000'],
      motors: [1],
      battery: [220]
    });

    this.form.valueChanges.subscribe(value => {
      this.carOrderService.updateBattery(value.battery);
      this.carOrderService.updateMotors(value.motors);
      this.carOrderService.updateColor(value.color);
    });
  }

  log() {
    console.log(this.form.value);
  }
  ngOnInit() {
  }

}
