import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}