import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { of, Observable, throwError, timer, interval, from, fromEvent } from 'rxjs';
import { scan, mapTo, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'rxjs-operator',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorComponent implements OnInit, AfterContentInit {
  source$: Observable<string>
  defaultValue = 'hello';
  time = 0;
  @ViewChild('app', {static: true}) app;
  constructor() {
    this.checkEven(1);
    timer(4000, 2000).subscribe(res => console.log(res));
    interval(1000).subscribe((res) => this.time += 1);


    const searchBox = document.getElementById('search-box');

const typeahead = fromEvent(searchBox, 'input').pipe(
  map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
  filter(text => text.length > 2),
  debounceTime(10),
  distinctUntilChanged(),
  switchMap(() => ajax('/api/endpoint'))
);

typeahead.subscribe(data => {
  console.log(data)
 // Handle the data from the API
});
   }

  ngOnInit() {
    const source = of(1, 2, 3);

    const example = source.pipe(scan((acc, curr, index) => acc + curr, 0));
    
    const subscribe = example.subscribe(val => console.log(val)); 
    const example$ = of(this.defaultValue)
    this.source$ = example$.pipe(mapTo("world"));
    const array = from([1, 2, 3, 4, 5]);
array.subscribe(res => {console.log(res)});
const str = from('trilok');
str.subscribe(res => {console.log(res)});
  }

  checkEven(value: number) {
    this.isEven(value).subscribe((res) => console.log(res));
}

isEven(value: number): Observable<any> {
  if (value % 2 === 0) {
    return of('even');
  } else {
    return throwError("error");
  }
}
ngAfterContentInit() {

  const click$ = fromEvent(this.app.nativeElement, 'click');
  
  const mouseOver$ = fromEvent(this.app.nativeElement, 'mouseover');
  
  const mouseOut$ = fromEvent(this.app.nativeElement, 'mouseout');
  
  
  click$.subscribe(val => console.log('click'));
  
  mouseOver$.subscribe(val => console.log('mouse over'));
  
  mouseOut$.subscribe(val => console.log('mouse out'));
  
  }
}
