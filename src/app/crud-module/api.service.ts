import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}
  getUsers() {
    return this.httpClient.get(`https://reqres.in/api/users`).
        pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
    createUsers(user: Users[]) {
      return this.httpClient.post(`https://reqres.in/api/users`,user).
          pipe(
             map((data: any) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }
}
