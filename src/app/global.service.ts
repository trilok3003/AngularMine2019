import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public getMarkServiceReopenPopup: BehaviorSubject<any> = new BehaviorSubject(undefined);
  getMarkServiceReopenPopup$ = this.getMarkServiceReopenPopup.asObservable();

  constructor() { }
  public setMarkServiceReopenPopup(value) {
    this.getMarkServiceReopenPopup.next(value);
  }
}
