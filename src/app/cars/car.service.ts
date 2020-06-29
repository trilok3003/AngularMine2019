import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Car {
  color: string;
  motors: number;
  battery: number; 
  total: number;
}

const initialCar: Car = {
  color: '#000000',
  motors: 1,
  battery: 220,
  total: 35000
};
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly _carChanges = new BehaviorSubject<Car>(initialCar);
  readonly car = this._carChanges.asObservable();
  value = Math.random();
  constructor() { }
  updateColor(color: string) {
    const car = { ...this._carChanges.value, color };
    this.calculateTotal(car);
    this._carChanges.next(car);
  }

  updateMotors(motors: number) {
    const car = { ...this._carChanges.value, motors };
    this.calculateTotal(car);
    this._carChanges.next(car);
  }

  updateBattery(battery: number) {
    const car = { ...this._carChanges.value, battery };
    this.calculateTotal(car);
    this._carChanges.next(car);
  }

  private calculateTotal(car: Car) {
    car.total = 35000;

    if (car.motors === 2) {
      car.total = car.total + 7000;
    }

    if (car.color !== '#000000') {
      car.total = car.total + 1500;
    }

    if (+car.battery === 265) {
      car.total = car.total + 4000;
    }

    if (+car.battery === 310) {
      car.total = car.total + 6000;
    }

    return car.total;
  }
}
