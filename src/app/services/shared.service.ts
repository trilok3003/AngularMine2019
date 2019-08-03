import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

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

}
