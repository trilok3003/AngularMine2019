import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';
import { routeAnimation } from '../route-animation';
import { fadeAnimation } from '../_animation/fade.animation';
import { User } from '../_models/user';
import { Role } from '../_models/role';
import { AppSidebarConfig } from '../app-sidebar-config';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css'],
  animations: [routeAnimation, fadeAnimation]

})
export class AppDashboardComponent implements OnInit {

  topics;
  currentUser: User;

  constructor(public router: Router, private authenticationService: AuthenticationService) { 
   this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
    this.topics = AppSidebarConfig
  }
  toNavigate(path) {
   this.router.navigate([path]);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
get isAdmin() {
  return this.currentUser && this.currentUser.role === Role.Admin;
}
get isUser() {
  return this.currentUser && this.currentUser.role === Role.User;
}
}
