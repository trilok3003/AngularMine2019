import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-data',
  templateUrl: './group-data.component.html',
  styleUrls: ['./group-data.component.css']
})
export class GroupDataComponent implements OnInit {
  data = [
    { state: 'MN', county: '1', item: 0.297 },
    { state: 'MN', county: '1', item: 0.04 },
      { state: 'CA', county: '2', item: 0.019 },
    { state: 'MN', county: '1', item: 0.0374 }, 
    { state: 'CA', county: '2', item: 0.037 }
]
  constructor() { }

  ngOnInit() {
  }

}
