import { Component, OnInit } from '@angular/core';
import { flipState } from 'src/app/animations';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  animations: [flipState]
})
export class DemoComponent implements OnInit {
  flip = 'inactive';

  constructor() { }

  ngOnInit() {
  }
  toggleFlip() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }

}
