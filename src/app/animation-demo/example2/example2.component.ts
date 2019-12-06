import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
  animations: [
    trigger('slideToggle', [
        state('inactive', style({height: 0})),
        state('active', style({height: '*'})),
        transition('inactive <=> active', [
            animate(300)
        ])
    ])
]
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  animationState = 'inactive';
    toggleAnimState(): void {
        this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
    }

}
