import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { MomentService } from './moment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMine2019';
  time = '';
  getMarkServiceReopenPopup = '';
  constructor(public globalService: GlobalService, public momentService: MomentService) {
    this.globalService.getMarkServiceReopenPopup$.subscribe((value) => {
      this.getMarkServiceReopenPopup = value;
    });
   this.time =this.momentService.getDateAndTimeFormat();
  }
  callMarkServiceReopen() {
    this.globalService.setMarkServiceReopenPopup(true);
  }
  
}
