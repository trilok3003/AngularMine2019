import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-xset4alert',
  templateUrl: './xset4alert.component.html',
  styleUrls: ['./xset4alert.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Xset4alertComponent implements OnInit {
  @Input() type: string = "success";
  @Output() output = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
