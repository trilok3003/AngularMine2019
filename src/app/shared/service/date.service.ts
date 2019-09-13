import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  // get over by now date with previous date ex: 19/01/2019 > 13/03/2018
  getOverByDate(date) {
    const now = new Date();
    const pre = new Date(date);
    if (now > pre) {
      return true;
    }
  }
  // get month name, year ex: March, 2019
  getMonthNameWithYear(date) {
    const  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    if(date) {
      const d = new Date(date);
      return  monthNames[d.getMonth()] + ',' + d.getFullYear();
    }
    else {
      const now = new Date();
      return monthNames[now.getMonth()] + ',' + now.getFullYear();
    }
  }
  //  get day name, year ex: Sunday
  getDayName(date) {
    const  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
      'Saturday'];
    const d = new Date(date);
    return  dayNames[d.getDay()];
  }
  // get date in ex: 2019-04-12 10:30:44
  getDateAndTimeFormat(date) {
    const now = new Date(date);
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = this.checkTime(h);
    m = this.checkTime(m);
    s = this.checkTime(s);

    if (now.getDate() <= 10) {
      return now.getFullYear() + '-' + '0' + (1 + now.getMonth()) + '-' + '0' + now.getDate() + ' ' + h + ':' + m + ':' + s;
    }
    else  {
      return now.getFullYear() + '-' + '0' + (1 + now.getMonth()) + '-' + now.getDate() + ' ' + h + ':' + m + ':' + s;
    }
  }
  checkTime(time) {
    if(time < 10) {
      time = '0' + time;
    }
    return time
  }
  //
  getTimeFormat(time: any) {
    let hour = (time.split(':'))[0];
    let min = (time.split(':'))[1];
    const part = hour > 12 ? 'pm' : 'am';
    // tslint:disable-next-line:triple-equals
    min = (min + '').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    // tslint:disable-next-line:triple-equals
    hour = (hour + '').length == 1 ? `0${hour}` : hour;
    return `${hour}:${min} ${part}`
  }
  // time left in minutes
  getTimeLeft(time) {
    const now = new Date();
    const pre = new Date(time);
    return (pre.getHours() - now.getHours()) * 60;
  }
}
