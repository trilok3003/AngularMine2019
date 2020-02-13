import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'angular-httpclient-demo';

  checkboxes = [
    {
      id:1,
      name:"Item 1"
    },{
      id:2,
      name:"Item 2"
    },{
      id:3,
      name:"Item 3"
    },{
      id:4,
      name:"Item 4"
    }
  ]
}
