import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-x-examples',
  templateUrl: './x-examples.component.html',
  styleUrls: ['./x-examples.component.css']
})
export class XExamplesComponent implements OnInit {
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } 
  ];
  //.....
  name: any;
  data: any;
  constructor() { }

  ngOnInit() {
    this.name = {
      firstname: 'trilok',
      lastname: 'singh'
    };
    this.data = new BehaviorSubject(this.name);
  }
  changeName() {
    this.name = {
        firstname: 'john',
        lastname: 'verma'
    };
    this.data.next(this.name);
}

}
