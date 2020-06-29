import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './subject-example/message.service';

@Component({
  selector: 'app-x-set2',
  templateUrl: './x-set2.component.html',
  styleUrls: ['./x-set2.component.css']
})
export class XSet2Component implements OnInit {
  imageUrl: string = "";
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });
}
ngOnInit() {

}
ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
