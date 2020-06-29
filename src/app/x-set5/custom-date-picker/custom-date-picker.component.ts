import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css']
})
export class CustomDatePickerComponent implements OnInit {
  @Input() enabledMonths: Array<number> = [];
  @Input() disabledMonths: Array<number> = [];
  @Input() enabledYears: Array<number> = [];
  @Input() disabledYears: Array<number> = [];
  @Input() year: number;
  @Input() month: number;
  @Output() change = new EventEmitter<{ monthIndex: number, year: number, date: number }>();
  @Input() enabledDates: Array<number> = [];
  @Input() disabledDates: Array<number> = [];
  model: MonthPickerModel;
  isShowYears: boolean;
  isShowDays: boolean;
  constructor() { }

  ngOnInit() {
    this.model = new MonthPickerModel();
    if (this.year) {
      this.model.selectedYear = this.year;
      this.model.updateYearText();
    }

    if (this.month) {
      this.model.selectedMonthIndex = this.month;
      this.model.selectedMonth = this.month;
      if (this.year) this.model.selectedMonthYear = this.year;
    }
    this.onChange(this.model.selectedMonthIndex, this.model.selectedMonthYear, this.model.selectedDate);
  }
  decrement() {
        this.model.decrementYear();
        if (this.isShowYears) {
          this.renderYears();
        }
  }
  increment() {
    this.model.incrementYear();
    if (this.isShowYears) {
      this.renderYears();
    }
  }
  isSelectedMonth(monthIndex: number) {
    return this.model.selectedMonthIndex == monthIndex && this.model.selectedMonthYear == this.model.selectedYearText;
  }
  isDisabled(index: number) {
    let disabled = false;
    if (this.enabledMonths && this.enabledMonths.length > 0) {
      disabled = this.enabledMonths.indexOf(index) < 0;
    }
    if (this.disabledMonths && this.disabledMonths.length > 0) {
      disabled = this.disabledMonths.indexOf(index) >= 0;
    }
    return disabled;
  }
  selectMonth(monthIndex: number) {
   this.model.selectMonth(monthIndex);
   this.isShowDays = true;
  }
  years: Array<number> = [];
toggleShowYears() {
  this.isShowYears = !this.isShowYears;
  this.isShowDays = false;
  this.renderYears();
}

renderYears() {
  this.years = [];
  for (let i = 5; i > 0; i--) {
    this.years.push(this.model.selectedYear - i);
  }
  for (let i = 0; i <= 6; i++) {
    this.years.push(this.model.selectedYear + i);
  }
}

selectYear(year: number) {
  this.isShowYears = false;
  this.model.selectedYear = year;
  this.model.updateYearText();
}
isSelectedYear(year: number) {
  return this.model.selectedYear === year;
}
isDisabledYear(year: number) {
  let disabled = false;
  if (this.enabledYears && this.enabledYears.length > 0) {
    disabled = this.enabledYears.findIndex(y => y === year) < 0;
  }
  if (this.disabledYears && this.disabledYears.length > 0) {
    disabled = this.disabledYears.findIndex(y => y === year) >= 0;
  }
  return disabled;
}
onChange(monthIndex: number, year: number, date: number) {
  this.change.emit({ monthIndex: monthIndex, year: year, date: date });
}

 get loop() {
 let number = this.model.dates[this.model.selectedMonthIndex]
    return Array(number).fill(0).map((x, index) => (x + 1) * index + 1);
  }
  isDisabledDate(date: number) {
    let disabled = false;
    if (this.enabledDates && this.enabledDates.length > 0) {
      disabled = this.enabledDates.findIndex(y => y === date) < 0;
    }
    if (this.disabledDates && this.disabledDates.length > 0) {
      disabled = this.disabledDates.findIndex(y => y === date) >= 0;
    }
    return disabled;
  }
  selectDate(date: number) {
   this.model.selectDate(date);
   this.onChange(this.model.selectedMonthIndex, this.model.selectedMonthYear, this.model.selectedMonth);
  }
  isSelectedDate(date: number) {
    return this.model.selectedDate == date  && this.model.selectedMonthYear == this.model.selectedYearText;

  }
  toggleShowMonths(){
    this.isShowYears = false;
    this.isShowDays = false;
    this.model.selectedDate = -1;
  }
}
export class MonthPickerModel {
  selectedYearText: number;
  selectedYear = new Date().getFullYear();
  months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  selectedMonthIndex: number;
  selectedMonth = new Date().getMonth();
  selectedMonthYear: number;
  dates = [31,28,31,30,31,30,31,31,30,31,30,31];
  selectedDate= new Date().getDate();
  constructor() {
  this.selectedYearText = this.selectedYear;
  this.updateYearText();
  this.selectedMonthYear = this.selectedYear;
  this.selectedMonthIndex = this.selectedMonth;
 }

 incrementYear() {
  this.selectedYear = this.selectedYear + 1;
    this.selectedMonthYear = this.selectedYear;
  this.updateYearText();
}
decrementYear() {
  this.selectedYear = this.selectedYear - 1;
  this.selectedMonthYear = this.selectedYear;
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
selectDate(date){
  this.selectedDate = date;
}
}