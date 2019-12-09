import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnInit {

  curPage : number;
  pageSize : number;
  list;
  title: string;
  
  constructor(){
    this.title = "simple pagination";
    this.list = [
      {name:'Pramod',age:'25'},
      {name:'John',age:'35'},
      {name:'Anil',age:'40'},
      {name:'Sam',age:'40'},
      {name:'Sumit',age:'40'},
      {name:'Johny',age:'40'},
      {name:'Anu',age:'20'}
    ]
    this.curPage = 1;
    this.pageSize = 3; // any page size you want 
   
  }
  numberOfPages(){
    return Math.ceil(this.list.length / this.pageSize);
  };

  ngOnInit() {
  }

}
