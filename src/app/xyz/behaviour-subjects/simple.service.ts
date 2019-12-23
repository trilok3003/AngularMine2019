import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export class StateModel {
  constructor(public name: string,
    public color: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  private static readonly initialState = new StateModel('Dog', '#3498db');
  private readonly store$ = new BehaviorSubject<StateModel>(SimpleService.initialState);

  public stateSelector(): Observable<StateModel> {
    return this.store$.asObservable();
  }

  public dispatchColor(color: string) {
    this.store$.next({ ...this.store$.value, color: color });
  }

  public dispatchName(name: string) {
    this.store$.next({ ...this.store$.value, name: name });
  }
}
