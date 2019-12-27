import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-keys-event',
  templateUrl: './angular-keys-event.component.html',
  styleUrls: ['./angular-keys-event.component.css']
})
export class AngularKeysEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onKeydown(e) {
    console.log(e);
  }

}
