import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Home';
  navOpen: boolean;
  minHeight: string;
  private _initWinHeight = 0;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(200)
      )
      .subscribe((event) => this._resizeFn(event));

    this._initWinHeight = window.innerHeight;
    this._resizeFn(null);
  }
  navToggledHandler(e: boolean) {
    this.navOpen = e;
  }

  private _resizeFn(e) {
    const winHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `${winHeight}px`;
  }

}
