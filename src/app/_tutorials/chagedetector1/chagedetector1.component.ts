import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chagedetector1',
  templateUrl: './chagedetector1.component.html',
  styleUrls: ['./chagedetector1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Chagedetector1Component implements OnInit {
  numberOfTicks = 0;
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
     this.numberOfTicks++;
     // require view to be updated
     this.ref.markForCheck();
    }, 1000)
   }

  ngOnInit() {
  }

}
