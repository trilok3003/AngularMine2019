import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss']
})
export class MessageBubbleComponent implements OnInit {

  @Input() public color: string;
  @Input() public message: Message;
  @Input() public rateable: boolean;

  public constructor() { }

  public ngOnInit() { }

}