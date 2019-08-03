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
  totalDays;
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
    this.totalDays =  new Date(this.year, this.month, 0).getDate(); 
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
  formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = mm+'/'+dd+'/'+yyyy;
    return date
 }
 Last7Days () {
  var result = [];
  for (var i=0; i<7; i++) {
      var d = new Date();
      d.setDate(d.getDate() - i);
      result.push( this.formatDate(d) )
  }

  return(result.join(','));
}
// Last7DaysByOtherMethod () {
//   return '0123456'.split('').map((n) => {
//       var d = new Date();
//       d.setDate(d.getDate() - n);
//       return ((day, month, year) => {
//           return [day<10 ? '0'+day : day, month<10 ? '0'+month : month, year].join('/');
//       })(d.getDate(), d.getMonth(), d.getFullYear());
//   }).join(',');
// }
}
