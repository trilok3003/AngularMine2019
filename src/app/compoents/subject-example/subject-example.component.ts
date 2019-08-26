import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit {
  message: any;
  subscription: Subscription;
  constructor(public _shared:SharedService) { 
    this.subscription = this._shared.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this._shared.sendMessage('Message Hello!');
}

clearMessage(): void {
    // clear message
    this._shared.clearMessage();
}

ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
  this.subscription.unsubscribe();
}

}
