import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-by-pipe-example',
  templateUrl: './group-by-pipe-example.component.html',
  styleUrls: ['./group-by-pipe-example.component.css']
})
export class GroupByPipeExampleComponent implements OnInit {
  myArray = [
    {
        name: "Apple",
        color: "Green"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Grape",
        color: "Green"
    },
    {
        name: "Melon",
        color: "Yellow"
    },
    {
        name: "Orange",
        color: "Orange"
    }
];
  constructor() { }

  ngOnInit() {
  }

}
