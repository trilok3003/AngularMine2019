import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Message } from './models/message';
import { tap } from 'rxjs/operators';
import { mapTo, map } from 'rxjs/operators';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public userId = 2;

  public dummyMessages: Array<Message> = [
    { sender: 1, body: 'Hello' },
    { sender: 2, body: 'Oh hello there!' },
    { sender: 1, body: 'How are you today?' },
    { sender: 2, body: 'Great thanks! And you?' },
    { sender: 1, body: 'I am also wonderful.' },
    { sender: 2, body: 'Okay, bye time' },
    { sender: 2, body: 'See you later' }
  ];

  private messages = [];
  private loopCounter = 0;

  public messageGenerator$ = interval( 1500 ).pipe(
    tap( () => {
      const message = this.dummyMessages[this.loopCounter];
      this.messages.push( message );
      this.loopCounter++;
      if( this.loopCounter >= this.dummyMessages.length ) { 
        this.loopCounter = 0; 
        }
    }),
    mapTo( this.messages )
  )
 

  ngOnInit() {
  }

}
