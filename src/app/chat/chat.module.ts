import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MessageListComponent,
    ChatComponent
  ],
  declarations: [
    MessageBubbleComponent,
    MessageListComponent,
    ChatComponent
  ]
})
export class ChatModule { }