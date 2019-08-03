import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  date: string;
  constructor() { }

  ngOnInit() {
  }
  onDateUpdate(date: string): void {
    this.date = date;
  }

}
