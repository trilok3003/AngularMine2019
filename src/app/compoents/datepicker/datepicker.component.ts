import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { range } from 'ramda';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  date: Date = new Date();
  date1;
  month: number; year: number;
  days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  showCalendar: boolean = false;
  result: string;
  pick;
  time;
  day;
  @Input()  label:  string = 'Date';
  @Input()  value:  string;
  @Output() update: EventEmitter<string> = new EventEmitter<string>();
   constructor() {}
  ngOnInit() {
    if (this.value) this.date = new Date(this.value);
    this.month = this.date.getMonth();
    this.year  = this.date.getFullYear();
    this.date1 = this.date.getDate();
    this.day = this.date.getDay();
    this.time = this.date.getTime();
  }
  onPick() {
    this.update.emit(this.pick)
  }
  getDate(row,num) {
   // return row + '' +num + '' +date;
   if(row===0 && this.day === num) {
   return this.date1
   }
   if(row !==0) {
   return this.date1 + num +1
   }
  }
}
