import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  overlay: boolean
  constructor(private http: HttpClient) { }
  // loader inter ceptor example
  callApi() {
    this.http.get('https://reqres.in/api/users?page=2')
      .subscribe(data => {
        console.log(data);
      })
  }
  ngOnInit() {
  }

}
