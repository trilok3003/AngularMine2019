import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-paginations-exampless',
  templateUrl: './paginations-exampless.component.html',
  styleUrls: ['./paginations-exampless.component.css']
})
export class PaginationsExamplessComponent implements OnInit {

  constructor(private http: HttpClient, private pagerService: PagerService) { }

  // array of all items to be paged
  private allItems;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
      // get dummy data
      this.http.get('assets/dummy-data.json').subscribe(data => {
              // set items to json response
              this.allItems = data;

              // initialize to page 1
              this.setPage(1);
          });
  }

  setPage(page: number) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
