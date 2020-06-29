import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { Country } from '../compoents/rxjs-operators/country';

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
getNumbers(): Observable<number> {
  return of(1, 2, 3, 4, 5, 6, 7);  // Synchronously data will be emitted.
}
getStdNames(): Observable<string> {
  return of("Mahesh, Krishna, Ram");
}	
getCountry(): Observable<Country> {
  return of(new Country());
}
// subject example
private subject = new Subject();
sendMessage(msg: string) {
  this.subject.next({text:msg});
}
clearMessage() {
  this.subject.next();
}
getMessage(): Observable<any> {
  return this.subject.asObservable();
}

}
