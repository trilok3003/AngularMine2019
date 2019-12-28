import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-ng-container',
  templateUrl: './angular-ng-container.component.html',
  styleUrls: ['./angular-ng-container.component.css']
})
export class AngularNgContainerComponent implements OnInit {
  todos = [
    {content: 'math'},
    {content: 'art'},
    {content: 'english'},
    {content: 'hindi'},
    {content: 'physics'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
