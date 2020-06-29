import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-subject-examples',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExamplesComponent implements OnInit {
  constructor(private messageService: MessageService) { }

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }
  ngOnInit() {

  }
}
