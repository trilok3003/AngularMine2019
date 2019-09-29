import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, endWith } from 'rxjs/operators';
 
export interface State {
  name: string,
  key: string
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
    {
    "key": "AN",
    "name": "Andaman and Nicobar Islands"
    },
    {
    "key": "AP",
    "name": "Andhra Pradesh"
    },
    {
    "key": "AR",
    "name": "Arunachal Pradesh"
    },
    {
    "key": "AS",
    "name": "Assam"
    },
    {
    "key": "BR",
    "name": "Bihar"
    },
    {
    "key": "CG",
    "name": "Chandigarh"
    },
    {
    "key": "CH",
    "name": "Chhattisgarh"
    },
    {
    "key": "DH",
    "name": "Dadra and Nagar Haveli"
    },
    {
    "key": "DD",
    "name": "Daman and Diu"
    },
    {
    "key": "DL",
    "name": "Delhi"
    },
    {
    "key": "GA",
    "name": "Goa"
    },
    {
    "key": "GJ",
    "name": "Gujarat"
    },
    {
    "key": "HR",
    "name": "Haryana"
    },
    {
    "key": "HP",
    "name": "Himachal Pradesh"
    },
    {
    "key": "JK",
    "name": "Jammu and Kashmir"
    },
    {
    "key": "JH",
    "name": "Jharkhand"
    },
    {
    "key": "KA",
    "name": "Karnataka"
    },
    {
    "key": "KL",
    "name": "Kerala"
    },
    {
    "key": "LD",
    "name": "Lakshadweep"
    },
    {
    "key": "MP",
    "name": "Madhya Pradesh"
    },
    {
    "key": "MH",
    "name": "Maharashtra"
    },
    {
    "key": "MN",
    "name": "Manipur"
    },
    {
    "key": "ML",
    "name": "Meghalaya"
    },
    {
    "key": "MZ",
    "name": "Mizoram"
    },
    {
    "key": "NL",
    "name": "Nagaland"
    },
    {
    "key": "OR",
    "name": "Odisha"
    },
    {
    "key": "PY",
    "name": "Puducherry"
    },
    {
    "key": "PB",
    "name": "Punjab"
    },
    {
    "key": "RJ",
    "name": "Rajasthan"
    },
    {
    "key": "SK",
    "name": "Sikkim"
    },
    {
    "key": "TN",
    "name": "Tamil Nadu"
    },
    {
    "key": "TS",
    "name": "Telangana"
    },
    {
    "key": "TR",
    "name": "Tripura"
    },
    {
    "key": "UK",
    "name": "Uttar Pradesh"
    },
    {
    "key": "UP",
    "name": "Uttarakhand"
    },
    {
    "key": "WB",
    "name": "West Bengal"
    }
    ]
  constructor() { 
    this.filterStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
    //  map(state => state ? this._filterStates(state) : this.states.slice())
       map(state => state ? this._filterStates(state) : [])
    )
  }

  ngOnInit() {
  }
  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue)===0);
  }
}
