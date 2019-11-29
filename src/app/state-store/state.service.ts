import { Injectable } from '@angular/core';
import { State } from './state';
import { Store } from './store.class';

@Injectable({
    providedIn: 'root'
  })
export class StateService extends Store<State[]> {
    constructor() { 
        super([{code: '#232', name: "Uk"}]);
      }
    
      addState(code: string, name: string) {
        const newState = [...this.getValue(), {code, name}];
        this.setState(newState);
      }
} 