import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchPromiseService } from '../service/search-promise.service';

@Component({
  selector: 'app-http-with-promises',
  templateUrl: './http-with-promises.component.html',
  styleUrls: ['./http-with-promises.component.css']
})
export class HttpWithPromisesComponent implements OnInit {

  private loading: boolean = false;

  constructor(private itunes: SearchPromiseService) {}

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }

  ngOnInit() {
  }

}
