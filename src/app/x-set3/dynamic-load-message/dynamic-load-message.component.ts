import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-load-message',
  templateUrl: './dynamic-load-message.component.html',
  styleUrls: ['./dynamic-load-message.component.css']
})
export class DynamicLoadMessageComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit() {
  }
  @Output()
  deleteEvent = new EventEmitter();


  onClickDelete() {
    this.deleteEvent.emit()
  }
}
