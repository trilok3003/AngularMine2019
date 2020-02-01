import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-month-picker',
  templateUrl: './custom-month-picker.component.html',
  styleUrls: ['./custom-month-picker.component.css']
})
export class CustomMonthPickerComponent implements OnInit {
  model: MonthPickerModel;
  constructor() { }

  ngOnInit() {
    this.model = new MonthPickerModel();
  }
  decrement() {
        this.model.decrementYear();
  }
  increment() {
    this.model.incrementYear();
  }
  toggleShowYears() {}
  isSelectedMonth(monthIndex: number) {
    return this.model.selectedMonthIndex == monthIndex && this.model.selectedMonthYear == this.model.selectedYearText;
  }
  isDisabled(i) {

  }
  selectMonth(monthIndex: number) {
   this.model.selectMonth(monthIndex);
  }

}
export class MonthPickerModel {
  selectedYearText: number;
  selectedYear = new Date().getFullYear();
  months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  selectedMonthIndex: number;
  selectedMonth = new Date().getMonth();
  selectedMonthYear: number;
  constructor() {
  this.selectedYearText = this.selectedYear;
  this.updateYearText();
  this.selectedMonthYear = this.selectedYear;
  this.selectedMonthIndex = this.selectedMonth;
  console.log(this.selectedMonthIndex);
 }

 incrementYear() {
  this.selectedYear = this.selectedYear + 1;
  this.updateYearText();
}
decrementYear() {
  this.selectedYear = this.selectedYear - 1;
  this.updateYearText();
}
updateYearText() {
  this.selectedYearText = this.selectedYear
}
selectMonth(index: number) {
  this.selectedMonth = index;
  this.selectedMonthIndex = index;
  this.selectedMonthYear = this.selectedYear;
}
}