import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state, keyframes
  } from '@angular/animations';
  export const balloonEffect = trigger('balloonEffect', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ])
  export const fontBold = trigger('fontBold', [
    state('initial', style({
      transform: 'scale(1)'
    })),
    state('final', style({
      // backgroundColor : 'red',
      transform: 'scale(1.5)'
    })),
    transition('final=>initial', animate('1000ms', style({backgroundColor: 'green'}))),
    transition('initial=>final', animate('1500ms', style({fontWeight: 'bold'})))
  ])
  export const flipState = trigger('flipState', [
    state(
      'active',
      style({
        transform: 'rotateY(180deg)',
      })
    ),
    state(
      'inactive',
      style({
        transform: 'rotateY(0)',
      })
    ),
    transition('active => inactive', animate('400ms ease-out')),
    transition('inactive => active', animate('400ms ease-in')),
  ])
  export const fadeInOut = trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])
  export const textScaleAnimationRed = trigger('textScaleAnimationRed', [
    transition('void => *', animate('1.5s', keyframes([
      style({transform: 'scale(1)', offset: 0}),
      style({transform: 'scale(1.5)',  color: 'red', fontWeight: 'bold',  offset: 0.4}),
      style({transform: 'scale(1)',     offset: 1.0})
    ]))),
  ])
  export const textScaleAnimationWhite = trigger('textScaleAnimationWhite', [
    transition('void => *', animate('1.5s', keyframes([
      style({transform: 'scale(1)', offset: 0}),
      style({transform: 'scale(1.5)',  color: 'white', fontWeight: 'bold',  offset: 0.4}),
      style({transform: 'scale(1)',     offset: 1.0})
    ]))),
  ])
  export const  slideUpDown =  trigger('slideUpDown', [
    transition('void => *', [
      style({
        opacity: 0.2,
        transform: 'translateY(-10vh)'
      }),
      animate('1000ms ease-in',
        style({
          opacity: 1,
          transform: 'scale(1.2)'
        })
      )
    ]),
    transition('* => void', [
      animate('1000ms ease-in-out',
        style({
          opacity: 0.2,
          transform: 'translateY(100%)'
        })
      )
    ]),
  ])
  export const  slideInOut =  trigger('slideInOut', [
    transition('void => *', [
      style({
        opacity: 0.2,
        transform: 'scale(0)'
      }),
      animate('1000ms ease-in',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      )
    ]),
  ])
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [style({ opacity: 0 })],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);
  export const horizontalBarGrow =
    trigger('horizontalBarGrow', [
      transition(':enter', [
        style({ width: '5px' }),
        animate('500ms ease-out', style({ width: '{{widthValue}}' })),
      ], { params: { widthValue: '50%' } }),
    ])
  export const horizontalBarGrow1 =   trigger('horizontalBarGrow1', [
    state('true', style({ width: '50px' })),
    state('false', style({ width: '0px' })),
    transition('false <=> true', animate(500))
  ])
  export const verticalBarGrow =   trigger('verticalBarGrow', [
    state('true', style({ height: '100px' })),
    state('false', style({ height: '0px' })),
    transition('false <=> true', animate(500))
  ])
  
  
  