import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  date: string;
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];
listofstudent = [
  {id:"1", name:"icha",age:"20"},
  {id:"2", name:"denok",age:"23"},
  {id:"3", name:"sri utami",age:"10"},
  {id:"4", name:"mbok darmi",age:"40"},
  {id:"5", name:"jeniffer",age:"30"},
  {id:"6", name:"limbuk",age:"22"}];
  queryString;
  constructor() { }

  ngOnInit() {
  }
  onDateUpdate(date: string): void {
    this.date = date;
  }

}
