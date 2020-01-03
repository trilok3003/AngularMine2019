import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-set1',
  templateUrl: './x-set1.component.html',
  styleUrls: ['./x-set1.component.css']
})
export class XSet1Component implements OnInit {
 lists;
  constructor() {
  
   }

  ngOnInit() {
    this.lists = Array(10).fill(1).map((ele, i) => i+1) 
  }

}
