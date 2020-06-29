import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_service/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[];

  currentUser: User;
  userFromApi: User;
  constructor(private userService: UserService,
    private authenticationService: AuthenticationService
    ) { 
      this.currentUser = this.authenticationService.currentUserValue;

    }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll1().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });

      this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
    });
  }
}
