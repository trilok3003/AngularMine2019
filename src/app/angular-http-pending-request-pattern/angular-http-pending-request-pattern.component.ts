import { Component, OnInit } from '@angular/core';
import { Pending, ApiService, User, Status } from './api.service';

@Component({
  selector: 'app-angular-http-pending-request-pattern',
  templateUrl: './angular-http-pending-request-pattern.component.html',
  styleUrls: ['./angular-http-pending-request-pattern.component.css']
})
export class AngularHttpPendingRequestPatternComponent implements OnInit {

  readonly Status = Status;
  readonly user: Pending<User>;

  constructor(private userService: ApiService) {
    this.user = this.userService.load(1);
  }

  ngOnInit() {
  }

}
