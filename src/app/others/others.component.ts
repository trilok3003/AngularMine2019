import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { MomentService } from '../moment.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  time;
  constructor(public globalService: GlobalService, public momentService: MomentService) {
   this.time =this.momentService.getDateAndTimeFormat();

   }

  ngOnInit() {
  }
  callMarkServiceReopen() {
    this.globalService.setMarkServiceReopenPopup(true);
  }
}
