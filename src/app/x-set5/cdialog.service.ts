import { Injectable, Type } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdialogService {

  private readonly _component$ = new Subject<any>()
  _component: Observable<any> = this._component$.asObservable()
  constructor() { }
   public open( component: Type<any>,  data: any) {
    this._component$.next({component, data})
   }
   public close() {
    this._component$.next(false)
   }
}
