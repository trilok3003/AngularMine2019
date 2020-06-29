import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-list',
  templateUrl: './scrolling-list.component.html',
  styleUrls: ['./scrolling-list.component.css']
})
export class ScrollingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loop(number) {
    return Array(number).fill(0).map((x, index) => (x + 1) * index);
  }
}
