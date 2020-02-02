import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-month-picker',
  templateUrl: './custom-month-picker.component.html',
  styleUrls: ['./custom-month-picker.component.css']
})
export class CustomMonthPickerComponent implements OnInit {

  @Input() enabledMonths: Array<number> = [];
  @Input() disabledMonths: Array<number> = [];
  @Input() enabledYears: Array<number> = [];
  @Input() disabledYears: Array<number> = [];
  @Input() year: number;
  @Input() month: number;
  @Output() change = new EventEmitter<{ monthIndex: number, year: number }>();
  model: MonthPickerModel;
  isShowYears: boolean;
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
    this.onChange(this.model.selectedMonthIndex, this.model.selectedMonthYear);
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
   this.onChange(this.model.selectedMonthIndex, this.model.selectedMonthYear);

  }
  years: Array<number> = [];
toggleShowYears() {
  this.isShowYears = !this.isShowYears;
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
onChange(monthIndex: number, year: number) {
  this.change.emit({ monthIndex: monthIndex, year: year });
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