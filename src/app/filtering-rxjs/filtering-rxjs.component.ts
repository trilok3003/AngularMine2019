import { Component, OnInit } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {combineLatest, Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import { State, states} from './state';

@Component({
  selector: 'app-filtering-rxjs',
  templateUrl: './filtering-rxjs.component.html',
  styleUrls: ['./filtering-rxjs.component.css']
})
export class FilteringRxjsComponent implements OnInit {

  states$: Observable<State[]>;
  filteredStates$: Observable<State[]>;
  filter: FormControl;
  filter$: Observable<string>;

  constructor() {
    this.states$ = of(states);
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredStates$ = combineLatest(this.states$, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.name.indexOf(filterString) !== -1))
    );
  }
  ngOnInit() {
  }

}
