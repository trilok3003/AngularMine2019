import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userId: number;
  public user: User;
  // public user;
  public users: User[];
  // public users;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }
  public getUser() {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  public getAllUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
