import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  orders = [{}];
  value: number;

  constructor(private carService: CarService) {
    this.value = this.carService.value;
  }

  addOrder() {
    this.orders.push({});
  }
  ngOnInit() {
  }

}
