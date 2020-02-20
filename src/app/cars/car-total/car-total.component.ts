import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-total',
  templateUrl: './car-total.component.html',
  styleUrls: ['./car-total.component.css']
})
export class CarTotalComponent implements OnInit {
  car: Observable<Car>;

  constructor(private carOrderService: CarService) {
    this.car = this.carOrderService.car;
  }

  ngOnInit() {
  }

}
