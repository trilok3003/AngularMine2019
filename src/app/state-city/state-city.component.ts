import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

 export interface StateGroup {
   state: string,
   districts: string[]
 }
 export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-state-city',
  templateUrl: './state-city.component.html',
  styleUrls: ['./state-city.component.css']
})
export class StateCityComponent implements OnInit {
 
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });
  stateGroupOptions: Observable<StateGroup[]>;
  stateGroups: StateGroup[] =[];
  constructor(public fb: FormBuilder, public htttp: HttpClient) { 
    this.htttp.get('../../assets/states_district.json').subscribe(res =>{
      this.stateGroups = res['states'];
    });
  }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({state: group.state, districts: _filter(group.districts, value)}))
        .filter(group => group.districts.length > 0);
    }

    return this.stateGroups;
  }

}
