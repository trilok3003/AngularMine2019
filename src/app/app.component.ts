import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { MomentService } from './moment.service';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { routeAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation]
  // animations: [
  //   trigger('myAnimation', [
  //     transition('* => *', [
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 })],
  //         { optional: true }
  //       ),
  //       query(
  //         ':leave',
  //          [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
  //         { optional: true }
  //       ),
  //       query(
  //         ':enter',
  //         [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
  //         { optional: true }
  //       )
  //     ])
  //   ])
  //     ] 
})
export class AppComponent {
  title = 'AngularMine2019';
  time = '';
  getMarkServiceReopenPopup = '';
  navbarShow: boolean = true;
  sidebarShow;
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
