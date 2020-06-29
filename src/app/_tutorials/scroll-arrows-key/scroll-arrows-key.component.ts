import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-arrows-key',
  templateUrl: './scroll-arrows-key.component.html',
  styleUrls: ['./scroll-arrows-key.component.css']
})
export class ScrollArrowsKeyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(event) {
    console.log(event)
  }
}
