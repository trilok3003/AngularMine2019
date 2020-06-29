// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, query, sequence, group } from '@angular/animations';

export const messageAddAnimation =

  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('messageAddAnimation', [

    transition('* => *', group([

      // query(':enter', [
      //   style({ height: 0 }),
      //   animate( '200ms', style({ height: '*' }))
      // ]),

      // query(':enter app-message-bubble', [
      //   style({ opacity: 0, transform: 'translateY(0%)' }),
      //   animate('0ms 300ms', style({ transform: 'translateY(100%)'})),
      //   animate('300ms ease-out')
      // ])

      query(':enter',
        sequence([
          // immediately make the message invisible and not translated
          style({ opacity: 0, transform: 'translateY(0%)' }),

          animate( '0ms 100ms', style({ height: 0 })),

          animate('200ms', style({height: '*'}) ),
          // delay 300ms then immediately offset vertically by 100%
          animate('0ms 300ms', style({ transform: 'translateY(100%)'})),
          // over 300ms animate to the message bubble's self-defined css values
          animate('300ms ease-out')
        ]),
        // if there are no messages to animate, it's okay.
        { optional: true }
      )

    ]))

  ]);
