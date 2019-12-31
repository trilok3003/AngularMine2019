import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-detection-example',
  templateUrl: './change-detection-example.component.html',
  styleUrls: ['./change-detection-example.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionExampleComponent implements OnInit {
 @Input() person: Observable<any>;
 @Input() person1

 _data;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.person.subscribe(res => {
      this._data = res;
      this.cd.markForCheck();
    })
  }

}
