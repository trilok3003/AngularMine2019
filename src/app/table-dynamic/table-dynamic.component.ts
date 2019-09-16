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
    },
    {
      "ID" : "9",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "10",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "11",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia"
    },
    {
      "ID" : "12",
      "Name" : "Riya",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "13",
      "Name" : "John",
      "Age" : "23",
      "Gender" : "Male",
      "Country" : "USA"
    },
    {
      "ID" : "14",
      "Name" : "Raman",
      "Age" : "27",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "15",
      "Name" : "Mohan",
      "Age" : "39",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "16",
      "Name" : "Shreya",
      "Age" : "21",
      "Gender" : "Female",
      "Country" : "India"
    }
  ]
  search = '';
  minLimit: number = 0;
  maxLimit: number = 4;
  activePage:number = 0;
  totalPage: number;
  noData: boolean = false;
  sort = [];
  querySearch = '';
  constructor() { 
    this.totalPage = (this.rows.length)/4;
    this.headers.forEach((ele,i) => {
      this.sort[i]=false;
    })
  }

  ngOnInit() {
  }
  getLimit(page) {
    if(page < this.totalPage) {
      this.minLimit = (this.totalPage * page);
      this.maxLimit = (this.totalPage * page) + 4;
      this.activePage=page;
      this.noData = false;
    }
    else {
      this.minLimit = 0;
      this.maxLimit = 0;
      this.activePage=this.totalPage;
      this.noData = true;
    }
   
  }
  getPages(length) {
    return new Array(length);
  }

}
