import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  constructor() { }
// get date time in 2019-09-010 16:47:04 format
  getDateAndTimeFormat() {
    const now = new Date();
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
}
