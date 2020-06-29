import { Component, OnInit } from '@angular/core';
import { of, pipe, Observable, from, interval, fromEvent } from 'rxjs';
import { filter, map, scan, catchError, retry, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {
  numbers = [1,2,3,4,5];
  ofNumbers;
  students = ["Mahesh", "Krishna", "Ram"];
  stdNames$: Observable<string[]>; 
  names;
  result;
  countryName$: Observable<string>;
  countryStates: string[];
   cities = ["Varanasi", "Mathura", "Ayodhya"];
   updateCities;
  constructor(private _shared: SharedService) { }

  ngOnInit() {
    of(this.numbers).subscribe(res => this.ofNumbers = res);
    this.getStdNames1();
    this.calcData();
    this.getCountryName();
    this.getCountryStates();
    this.getFrom();
    //this.getsInterval();
   // this.getFromEvent();
    this.getsAjax();
    this.getsMap();
    this.getsPipe();
    this.getCatchError();
    this.getsObservable();
  //  this.getsTyepeHead();
    of(this.cities).pipe(map(ele => ele)).subscribe(res=> this.updateCities= res);
  }
  getStudentNames(){
    return of(this.students);
 } 
 getStdNames(): Observable<string> {
  return of("Mahesh, Krishna, Ram");
}
//Using map 
getStdNames1() { 
  this.stdNames$ = this._shared.getStdNames().pipe(
     map(res => res.split(","))
  ); 
  // or
  this.getStdNames().pipe(
    map(res => res.split(","))
 ).subscribe(res => this.names = res); 
 }
 getNumbers(): Observable<number> {
  return of(1, 2, 3, 4, 5, 6, 7); // Synchronously data will be emitted.
} 

 //Using filter, map and scan
 calcData() {
  this._shared.getNumbers().pipe(
     filter(n => n % 2 === 1),
     map(n => n + 10),
     scan((sum, n) => sum + n)
  )
  .subscribe(result =>this.result = result);
} 
 //Using map and catchError
 getCountryName() {
  this.countryName$ = this._shared.getCountry().pipe(
    map(country => country.getCountryName()),
    catchError(err => {
      console.error(err);
      return of("");
    })
  );
 }
  //Using retry, map and catchError
  getCountryStates() {
    this._shared.getCountry().pipe(
      retry(2),
      map(country => country.getStatesName()),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    )
    .subscribe(res => this.countryStates = res); 
   }
   // Using from
    getFrom() {
      const data = from(fetch('api'));
    data.subscribe({next(res) {console.log(res)},error(err) {console.log("Eror:" + err)},complete() {console.log("completed")}});
    }
     // Using interval
     getsInterval() {
      const couter = interval(1000);
      couter.subscribe(n => console.log(n));
    }
    // fromEvent
    getFromEvent(){
      const el = document.getElementById('my-element');
      const mouseMoves = fromEvent(el,'mousemove');
      const subscription = mouseMoves.subscribe((e: MouseEvent)=> {
        console.log(`Coords: ${e.clientX} X ${e.clientY}`);
        if (e.clientX < 40 && e.clientY < 40) {
          subscription.unsubscribe();
        }
      })
     
    }
    // using ajax
    getsAjax() {
       const api = ajax('/api/');
       api.subscribe(res => console.log(res.status, res.response))
    }
  // using map operator
  getsMap() {
    const nums =of(1,2,3);
    // craete function 
    const squareValues = map((ele: number) => ele * ele); 
    // create observable
    const square = squareValues(nums);
    // subscribe to run 
    square.subscribe(x => console.log(x));
  }
  getsPipe() {
    const nums =of(1,2,3);
    // craete function 
    const squareValues = pipe(
      filter((n: number)=> n % 2 ===0),
      map(n => n * n)
    )
    // create observable
    const square = squareValues(nums);
    // subscribe to run 
    square.subscribe(x => console.log(x));
  }
  // catch error
  getCatchError() {
    const api = ajax('/api').pipe(
      retry(3),
      map(res =>{
        if(!res.response) {
          throw new Error('Value expected');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );
    api.subscribe({
      next(x) { console.log("data:",+x) },
    error(err){console.log("err:", +err)}
  })
  }
  // observable that emits three values
  getsObservable() {
    const numbers = of(1,2,3);
    numbers.subscribe({
        next(x) {console.log("success:",+x)},
        error(err) {console.log(err)},
        complete() {console.log("completed")}
    })
    // or
    numbers.subscribe({
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
  })
  // or
  numbers.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
  );
  }
  // typehead
  // getsTyepeHead() {
  //   const searchBox = document.getElementById('search-box');

  //   const typeahead = fromEvent(searchBox, 'input').pipe(
  //     map((e: KeyboardEvent) => e.target.value),
  //     filter(text => text.length > 2),
  //     debounceTime(10),
  //     distinctUntilChanged(),
  //     switchMap(() => ajax('/api/endpoint'))
  //   );

  //   typeahead.subscribe(data => {
  //    console.log(data);
  //   });
  // }
}
