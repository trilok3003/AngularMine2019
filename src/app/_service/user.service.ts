import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    getAll1() {
        return this.http.get<User[]>(`/users`);
    }
    getAll() {
      return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
      return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
