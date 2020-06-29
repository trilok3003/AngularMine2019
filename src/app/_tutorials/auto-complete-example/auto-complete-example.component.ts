import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auto-complete-example',
  templateUrl: './auto-complete-example.component.html',
  styleUrls: ['./auto-complete-example.component.css']
})
export class AutoCompleteExampleComponent implements OnInit {
  options = [
    { id: 1, label: 'One' },
    { id: 2, label: 'Two' },
    { id: 3, label: 'Three' },
    { id: 3, label: 'four' },
    { id: 3, label: 'five' },
    { id: 1, label: 'six' },
    { id: 2, label: 'seven' },
    { id: 3, label: 'eight' },
    { id: 3, label: 'nine' },
    { id: 3, label: 'ten' }


  ];
  control = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
