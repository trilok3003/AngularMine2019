import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        // transition('small => large', animate('100ms ease-in')),
        // transition('small <=> large', animate('300ms ease-in', style({
        //   transform: 'translateY(40px)'
        // }))),
        transition('small <=> large', animate('300ms ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
        ]))),
    ]),
  ]
})
export class Example1Component implements OnInit {
  state: string = 'small';
  constructor() { }

  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}

}
