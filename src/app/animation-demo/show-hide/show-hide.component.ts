import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css'],
  animations: [
    trigger('selected', [
      // selected animation
      state('selected',
        style({
          backgroundColor: 'whitesmoke',
          transform: 'scale(1.2)',
        })
      ),
      transition('selected <=> *', [
        animate('300ms ease-in')
      ]),
  ]),
  trigger('selected1', [
    // selected animation
    state('selected1',
      style({
        backgroundColor: 'whitesmoke',
        transform: 'scale(1.2)',
      })
    ),
    transition('selected1 => *', [       
      group([
        // Apply pink color to the item and
        animate('1s ease',
          style({
            backgroundColor: '#ff4081'
          })
        ),
        // after a second, fade it to the background 
        animate('2s 1.5s ease',
          style({
            opacity: 0.2,
            transform: 'scale(0.5)'
          })
        ),
      ])
    ])
]),
  trigger('enterLeave', [
    // Enter animation
    transition('void => *', [
      style({
        opacity: 0.2,
        transform: 'translateX(-100vw)'
      }),
      animate('1000ms ease-in',
        style({
          opacity: 1,
          transform: 'scale(1.2)'
        })
      )
    ]),
    // LEAVE TRANSITION
    transition('* => void', [
      animate('1000ms ease-in-out',
        style({
          opacity: 0.2,
          transform: 'translateX(100%)'
        })
      )
    ]),
  ]),
  trigger('enterLeave1', [
    // Enter animation
    transition('void => *', [
      style({
        opacity: 0.2,
        transform: 'translateX(-100vw)'
      }),
      animate('1000ms ease-in',
        style({
          opacity: 1,
          transform: 'scale(1.2)'
        })
      )
    ]),
    // GROUPED ANIMATIONS
       transition('* => void', [
        group([
          animate('1s ease',
            style({
              backgroundColor: '#ffc107'
            })
          ),
          animate('2s 1.5s ease',
            style({
              opacity: 0.2,
              transform: 'translateX(100%)'
            })
          ),
        ])
      ])
  ]),
  trigger('slideUpDown', [
    // Enter animation
    transition('void => *', [
      style({
        opacity: 0.2,
        transform: 'translateY(-100vh)'
      }),
      animate('1000ms ease-in',
        style({
          opacity: 1,
          transform: 'scale(1.2)'
        })
      )
    ]),
    // LEAVE TRANSITION
    transition('* => void', [
      animate('1000ms ease-in-out',
        style({
          opacity: 0.2,
          transform: 'translateY(100%)'
        })
      )
    ]),
  ]),
  ]
})
export class ShowHideComponent implements OnInit {
  cars: ICar[];
  show = true;
  show1 = true;
  constructor() { }

  ngOnInit() {
    this.cars = [
      { name: 'Eon', price: 400, year: 1978, selected: 'notSelected' },
      { name: 'BMW', price: 15000, year: 2008, selected: 'notSelected' },
      { name: 'Ferrari', price: 50000, year: 2012, selected: 'notSelected' },
      { name: 'Enova', price: 4000, year: 2007, selected: 'notSelected' },
    ];
  }
  logIt(event) {
    console.log('Animation done, $event: ', event);
  }

}

interface ICar {
  name: string;
  price: number;
  year: number;
  selected: string;
}
