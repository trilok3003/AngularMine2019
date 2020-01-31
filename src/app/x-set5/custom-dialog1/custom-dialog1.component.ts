import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DialogConfig } from '../dialog.config';

@Component({
  selector: 'app-custom-dialog1',
  templateUrl: './custom-dialog1.component.html',
  styleUrls: ['./custom-dialog1.component.css']
})
export class CustomDialog1Component implements DialogConfig {
  @Input() data: any;
  @Output() deleteEvent = new EventEmitter();
  constructor() { }

  onClickDelete() {
    this.deleteEvent.emit()
  }

}
