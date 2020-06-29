import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  cards = [1,2,3,4,5]
  opened =[];
  constructor() {
    this.cards.forEach(ele => {
      this.opened.push(true);
    })
   }

  ngOnInit() {
  }

}
