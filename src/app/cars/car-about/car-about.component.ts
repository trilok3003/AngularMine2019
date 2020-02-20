import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-about',
  templateUrl: './car-about.component.html',
  styleUrls: ['./car-about.component.css']
})
export class CarAboutComponent implements OnInit {
  message: number;

  constructor(private carService: CarService) {
    this.message = this.carService.value;
  }

  ngOnInit() {
  }

}
