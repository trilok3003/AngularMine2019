import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navToggled = new EventEmitter();
  navOpen;

  constructor(private router: Router) { }

  ngOnInit() {
    // If nav is open after routing, close it
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart && this.navOpen)
      )
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

}
