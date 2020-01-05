import { Component, OnInit } from '@angular/core';
import {Joke} from './content-projection/content-projection.component'

@Component({
  selector: 'app-x-set1',
  templateUrl: './x-set1.component.html',
  styleUrls: ['./x-set1.component.css']
})
export class XSet1Component implements OnInit {
 lists;
 jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
   }

  ngOnInit() {
    this.lists = Array(10).fill(1).map((ele, i) => i+1) 
  }

}
