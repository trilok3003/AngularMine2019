import { Component, OnInit } from '@angular/core';
import { SearchPromiseService , SearchItem} from '../service/search-promise.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css']
})
export class HttpWithObservablesComponent implements OnInit {
  loading: boolean = false;
   results: Observable<SearchItem[]>;
   searchField: FormControl;
  constructor(private itunes: SearchPromiseService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.searchWithObserble(term)),
      tap(_ => (this.loading = false))
    );
  }

  doSearch(term: string) {
    this.itunes.searchWithObserble(term);
  }

}
