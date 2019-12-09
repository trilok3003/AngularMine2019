import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  animations: [fadeAnimation]
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
