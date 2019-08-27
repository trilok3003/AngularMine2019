import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription,interval, pipe, of } from 'rxjs';
import { take, map,filter, takeWhile, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  arrived: boolean = false;
  greeting: Promise<string>|null = null;
  private resolve: Function|null = null;
  constructor() {
    this.reset();
   }

  ngOnInit() {
    this.getHappy();
  }
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve})
  }
  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
  // observable async example 1
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()),1000);
  });
  // observable async example 2
  observableData = interval(1000).pipe(take(10),map((n:any) => n *n));
  // Observable async  example 3:
  countCompleted = false;
  countDown = 5;
  count$: Observable<number>;
  message = 'Happy Birthday!';
  getHappy() {
    this.count$ = interval(1000).pipe(
      map(i => this.countDown - i),
      takeWhile(i => i > 0),
      finalize(() => (this.countCompleted = true))
    );
  }
}
