import { Component, Input, ElementRef, HostBinding, HostListener } from '@angular/core';
import { Message } from '../models/message';
import { messageAddAnimation } from './message-list.animation';
import { takeWhile, map, tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
  animations: [messageAddAnimation]
})
export class MessageListComponent {

  @Input() public messages: Array<Message>;
  @Input() public userId: number;

  @HostBinding('@messageAddAnimation') get animateMessage() {
    return this.messages ? this.messages.length : true;
  }

  @HostListener('@messageAddAnimation.start') public onMessageAdded() {
    this.scrollToBottom( this.messageList, 200);
  }

  public constructor( private messageList: ElementRef ) { }

  public trackMessage( index: number, message: Message ) {
    return index;
  }

  private scrollToBottom( elementRef: ElementRef, durationMs: number ): void {

    const element = elementRef.nativeElement;
    const startValue = element.scrollTop;
    const endValue = element.scrollHeight - element.clientHeight;
    const changeInValue = endValue - startValue;

    if ( element.scrollHeight <= element.clientHeight ) {
      return;
    }

    const start = animationFrame.now();
    
    interval(0, animationFrame).pipe(
      map( frame => animationFrame.now() - start ),
      takeWhile( currentTime => currentTime < durationMs ),
      map( currentTime => MessageListComponent.easeOutQuad(
        currentTime,
        startValue,
        changeInValue,
        durationMs
      ))
    )
    .subscribe( newPosition => element.scrollTop = newPosition );

  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  static easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t*(t-2) + b;
  }

}