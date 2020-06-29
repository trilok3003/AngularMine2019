import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showmore-showless',
  templateUrl: './showmore-showless.component.html',
  styleUrls: ['./showmore-showless.component.css']
})
export class ShowmoreShowlessComponent implements OnInit {

  title: string;
  list:any;
  startPage : number;
  paginationLimit: number; 
  constructor(){
    this.title = "Angular: Show more/show less pagination";
    this.list = [
      {name:'Prashobh',age:'25'},
      {name:'Abraham',age:'35'},
      {name:'Anil',age:'40'},
      {name:'Sam',age:'40'},
      {name:'Philip',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'},
      {name:'Sam',age:'25'},
      {name:'Rocky',age:'35'},
      {name:'Major',age:'40'},
      {name:'Kian',age:'40'},
      {name:'Karan',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'},
      {name:'Prashobh',age:'25'},
      {name:'Abraham',age:'35'},
      {name:'Anil',age:'40'},
      {name:'Sam',age:'40'},
      {name:'Philip',age:'40'},
      {name:'Bal',age:'40'},
      {name:'Anu',age:'20'}
    ]
    this.startPage = 0;
    this.paginationLimit = 3;
   }
   showMoreItems()
   {
      this.paginationLimit = Number(this.paginationLimit) + 3;        
   }
   showLessItems()
   {
     this.paginationLimit = Number(this.paginationLimit) - 3;
   }
  ngOnInit() {
  }

}
