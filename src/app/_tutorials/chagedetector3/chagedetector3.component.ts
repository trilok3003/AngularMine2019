import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
export class DataProvider {
  data = 1;
  constructor() {
    setInterval(() => { this.data++; }, 500);
  }
}
@Component({
  selector: 'app-chagedetector3',
  templateUrl: './chagedetector3.component.html',
  styleUrls: ['./chagedetector3.component.css'],
  inputs: ['live'],
  providers: [DataProvider]
})
export class Chagedetector3Component implements OnInit {
 
  constructor(private ref: ChangeDetectorRef, public dataProvider: DataProvider ) { }
  @Input()
  set live(value: boolean) {
    if (value) {
      this.ref.reattach();
    } else {
      this.ref.detach();
    }
  }
  ngOnInit() {
  }

}
