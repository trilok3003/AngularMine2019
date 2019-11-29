import { Component, OnInit } from '@angular/core';
import { State } from './state';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-state-store',
  templateUrl: './state-store.component.html',
  styleUrls: ['./state-store.component.css']
})
export class StateStoreComponent implements OnInit {

  states$: Observable<State[]>

  constructor(private service: StateService) {
    this.states$ = service.getState();
   }

  ngOnInit() {
  }
}
