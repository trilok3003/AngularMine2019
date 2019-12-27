import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-async-pipe',
  templateUrl: './angular-async-pipe.component.html',
  styleUrls: ['./angular-async-pipe.component.css']
})
export class AngularAsyncPipeComponent implements OnInit, OnDestroy {
   cities$: Observable<any> 
   subcription: Subscription;
   hello = 'hello message'
  constructor() { }

  ngOnInit() {
    this.cities$ = of([
      {name: 'India'},
      {name: 'Srilanka'},
      {name: 'Aus'},
      {name: 'Pak'}
    ])
  }
  ngOnDestroy() {

  }

}
