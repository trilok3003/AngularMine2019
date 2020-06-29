import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loading: boolean;
  searchTerm = new Subject<string>();
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';
  searchResults: any;
  constructor(private http: HttpClient) {
    this.searchTerm.pipe(
      map((e:any) => e.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter(term => term.length > 0)
    ).subscribe(searchTerm =>{
      this.loading = true;
      this._searchEntries(searchTerm)
    })
   }

  ngOnInit() {
  }
  searchEntries(term): Observable<any> {
    return this.http.get(this.baseUrl + this.queryUrl + term).pipe(
      map(res => {
        this.searchResults = res;
      })
    )
  }
  _searchEntries(term) {
    this.searchEntries(term).subscribe(res => {
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

}
