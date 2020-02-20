import { Component, OnInit, ElementRef, QueryList, ViewChildren, NgZone, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scrolling-item-list',
  templateUrl: './scrolling-item-list.component.html',
  styleUrls: ['./scrolling-item-list.component.css']
})
export class ScrollingItemListComponent implements OnInit {
  users;
  @ViewChildren("user", { read: ElementRef }) renderedUsers: QueryList<
    ElementRef
  >;
  timeoutId;
  indexToScrollTo = 7;
  constructor(
    private http: HttpClient,
    private ngZone: NgZone,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }
  getData() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users/")
      .subscribe(users => {
        console.log(users)
        this.users = users;
        this.timeoutId = setTimeout(() => {
          const userToScrollOn = this.renderedUsers.toArray();
          userToScrollOn[this.indexToScrollTo].nativeElement.scrollIntoView({behavior: 'smooth'});
        }, 1000);
      });
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
  // modeNewEntry = false;
  // @ViewChild('textCreate', { static: false }) textCreateComponent: ElementRef;

  // showComponent() {
  //   this.modeNewEntry = true;
  //   this.textCreateComponent.nativeElement.scrollIntoView();
  // }
}


// Object.keys(data).forEach(key => {
//   console.log('key', key);     
//   console.log('value', data[key]);     
// });
// If you want to loop over an object, you can simply use for...in too:

// for (var key in data) {
//   if (data.hasOwnProperty(key)) {
//       console.log('key', key);
//       console.log('value', data[key]);
//   }
// }

// public findInvalidControls() {
//   const invalid = [];
//   const controls = this.AddCustomerForm.controls;
//   for (const name in controls) {
//       if (controls[name].invalid) {
//           invalid.push(name);
//       }
//   }
//   return invalid;
// }

// transform(fullName: any, args?: any): any {
//   return fullName.split('|')[1];
// }

// data = [
//   {
//     CREATE_TS: "2018-08-15 17:17:30.0",
//     Key1: "Val1",
//     Key2: "Val2",
//   },
//   {
//     CREATE_TS: "2018-08-15 17:25:30.0",
//     Key1: "Val1",
//     Key2: "Val2",
//   },
//   {
//     CREATE_TS: "2018-08-15 17:28:30.0",
//     Key1: "Val1",
//     Key2: "Val2",
//   }
// ]

// get sortData() {
//   return this.data.sort((a, b) => {
//     return <any>new Date(b.CREATE_TS) - <any>new Date(a.CREATE_TS);
//   });
// }