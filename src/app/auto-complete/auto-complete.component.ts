import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, endWith } from 'rxjs/operators';
 
export interface State {
  name: string,
  population: string
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  stateCtrl = new FormControl();
  filterStates: Observable<State[]>;
  states: State[] = [
    {name: 'Up', population: '2 crore'},
    {name: 'Delhi', population: '3 crore'},
    {name: 'Mp', population: '12 crore'},
    {name: 'Bihar', population: '9 crore'},
    {name: 'Hariyana', population: '4 crore'},
    {name: 'Punjab', population: '8 crore'},
    {name: 'Rajstan', population: '5 crore'},
    {name: 'Odisa', population: '1 crore'}
  ]
  constructor() { 
    this.filterStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    )
  }

  ngOnInit() {
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue)===0);
  }
}
