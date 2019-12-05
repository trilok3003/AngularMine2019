import { Injectable } from '@angular/core';
import { users } from './mock';
import { of } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  getUser() {
    return of(new User().deserialize(users[0]))
  }
  getUsers() {
    let x = [];
    users.forEach(ele => {
      x.push(new User().deserialize(ele))
    })
    return of(x)
  }
}
