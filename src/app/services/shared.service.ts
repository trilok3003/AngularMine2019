import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   private bSubject = new BehaviorSubject<any>("hello");
   data = this.bSubject.asObservable();
   private bSubject1 = new Subject<any>();
   data1 = this.bSubject1.asObservable();
  constructor() { }
   add(data) {
     this.bSubject.next(data);
   }
   add1(data) {
    this.bSubject1.next(data);
  }
  getVehicles(){
   // return Observable.interval(2200).map(i=> [{name: 'car 1'},{name: 'car 2'}])
    return of([{name: 'car 1'},{name: 'car 2'}])
}

}
