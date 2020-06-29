import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent1 implements OnInit {
  clicked: boolean;
  constructor() { }

  ngOnInit() {
  }
  onclick() {
   this.clicked = !this.clicked;
  }
}
