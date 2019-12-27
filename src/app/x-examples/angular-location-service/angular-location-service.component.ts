import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-location-service',
  templateUrl: './angular-location-service.component.html',
  styleUrls: ['./angular-location-service.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AngularLocationServiceComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (this.location.path() !== '') {
      } else {
      }
    });
  }
  goBack() {
    this.location.back();
  }
  
  goForward() {
    this.location.forward();
  }
  getPath() {
    console.log(this.location.path());  
  }

}
