import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.css']
})
export class TableDynamicComponent implements OnInit {
  headers = ["ID", "Name", "Age", "Gender", "Country"];
  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia"
    },
    {
      "ID" : "4",
      "Name" : "Riya",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Age" : "23",
      "Gender" : "Male",
      "Country" : "USA"
    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Age" : "27",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Age" : "39",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Age" : "21",
      "Gender" : "Female",
      "Country" : "India"
    }
  ]
  search = '';
  limit: number = 3;
  activePage:number = 0;
  constructor() { }

  ngOnInit() {
  }
  getLimit(page) {
    if(page === 0) {
     this.limit = 3;
     this.activePage=0;
    }

    if(page === 1) {
     this.limit = 6;
     this.activePage=1;
    }

    if(page === 2) {
      this.limit = 9   ;
     this.activePage=2;
    }
  }

}
