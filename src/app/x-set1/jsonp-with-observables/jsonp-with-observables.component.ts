import { Component, OnInit } from '@angular/core';
import { SearchPromiseService, SearchItem } from '../service/search-promise.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-jsonp-with-observables',
  templateUrl: './jsonp-with-observables.component.html',
  styleUrls: ['./jsonp-with-observables.component.css']
})
export class JsonpWithObservablesComponent implements OnInit {

   loading: boolean = false;
   results: Observable<SearchItem[]>;
   searchField: FormControl;

  constructor(public itunes: SearchPromiseService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.searchWithJsonpWithObservables(term)),
      tap(_ => (this.loading = false))
    );
  }

}
