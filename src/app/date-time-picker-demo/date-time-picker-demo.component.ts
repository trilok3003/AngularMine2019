import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-picker-demo',
  templateUrl: './date-time-picker-demo.component.html',
  styleUrls: ['./date-time-picker-demo.component.css']
})
export class DateTimePickerDemoComponent implements OnInit {
  public startAt = new Date(2018, 3, 10, 10, 30, 30);
   // Min moment: February 12 2018, 10:30
   public min = new Date(2018, 1, 12, 10, 30);

   // Max moment: April 21 2018, 20:30
   public max = new Date(2018, 3, 21, 20, 30);
   public myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
}
selectedMoment;
  constructor() { }

  ngOnInit() {
  }

}
