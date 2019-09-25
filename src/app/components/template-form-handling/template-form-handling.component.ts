import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-handling',
  templateUrl: './template-form-handling.component.html',
  styleUrls: ['./template-form-handling.component.css']
})
export class TemplateFormHandlingComponent implements OnInit {
  name: string;
  gender: string;
  subscribe: boolean;
  games = {
    cricket: null,
    football: null,
  };
  feedback: string;
  country = '';
  constructor() { }

  ngOnInit() {
  }

}
