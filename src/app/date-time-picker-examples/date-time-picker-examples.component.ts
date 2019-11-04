import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-picker-examples',
  templateUrl: './date-time-picker-examples.component.html',
  styleUrls: ['./date-time-picker-examples.component.css']
})
export class DateTimePickerExamplesComponent implements OnInit {

  date: Date = new Date();
  settings = {
      bigBanner: true,
      timePicker: true,
      format: 'shortTime',
      defaultOpen: false,
      closeOnSelect: false,
      rangepicker: false
  }
  constructor(){}
  ngOnInit(){
     
  }
  onDateSelect(e) {
    console.log(e)
  }
}
