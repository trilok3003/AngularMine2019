import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
class DataListProvider {
  // in a real application the returned data will be different every time
  get data() { return [1, 2, 3, 4, 5]; }
}
@Component({
  selector: 'app-chagedetector2',
  templateUrl: './chagedetector2.component.html',
  styleUrls: ['./chagedetector2.component.css'],
  providers: [DataListProvider],
})
export class Chagedetector2Component implements OnInit {

  constructor(private ref: ChangeDetectorRef, public dataProvider: DataListProvider) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
   }

  ngOnInit() {
  }

}

