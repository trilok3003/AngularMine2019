import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observable-tuts',
  templateUrl: './observable-tuts.component.html',
  styleUrls: ['./observable-tuts.component.css']
})
export class ObservableTutsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // create
    const observable1 = new Observable(subscriber =>{
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.error(setTimeout(()=>{
        return 'error'
      }, 3000));
      // once we call complete the below code can't execute
      subscriber.complete();

      subscriber.next(5); // this line is unreachable
    })
    // invoke
    observable1.subscribe({
      next: (val)=> console.log(val),
      error: (err)=> console.log(err),
      complete: ()=> console.log('task is completed')
    });
    // built in observables
    const observable = interval(1000);

    observable.subscribe({
      next: (val) => console.log(val)
    });
    // unsubscribe
    const observable2 = interval(1000);

    const subscription = observable2.subscribe({
      next: (val) => console.log(val)
    });

    // by calling this method we are cancelling our subscription
    subscription.unsubscribe();
  }

}
