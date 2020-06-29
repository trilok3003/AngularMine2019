import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-unselect',
  templateUrl: './select-unselect.component.html',
  styleUrls: ['./select-unselect.component.css']
})
export class SelectUnselectComponent implements OnInit {
  title: String;
  names: any;
  selectedAll: any;
  constructor() {
    this.title = "Select all/Deselect all checkbox - Angular 2";
    this.names = [
      { name: 'Anil', selected: false },
      { name: 'sonu', selected: false },
      { name: 'Anil', selected: false },
      { name: 'Sam', selected: false },
      { name: 'naru', selected: false },
      { name: 'aarry', selected: false },
      { name: 'Ziay', selected: false },
      { name: 'zamy', selected: false },
    ]

  }

  ngOnInit() {
  }
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
  }

}
