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
import { User } from './_models/user';
import { AuthenticationService } from './_service/authentication.service';
import { Router } from '@angular/router';
import { Role } from './_models/role';
import { fadeAnimation } from './_animation/fade.animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation, fadeAnimation]
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
  currentUser: User;
  constructor(public globalService: GlobalService, public momentService: MomentService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) {
    this.globalService.getMarkServiceReopenPopup$.subscribe((value) => {
      this.getMarkServiceReopenPopup = value;
    });
   this.time =this.momentService.getDateAndTimeFormat();
   this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  callMarkServiceReopen() {
    this.globalService.setMarkServiceReopenPopup(true);
  }
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
