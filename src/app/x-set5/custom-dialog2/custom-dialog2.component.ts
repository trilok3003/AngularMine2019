import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DialogConfig } from '../dialog.config';

@Component({
  selector: 'app-custom-dialog2',
  templateUrl: './custom-dialog2.component.html',
  styleUrls: ['./custom-dialog2.component.css']
})
export class CustomDialog2Component implements DialogConfig {
  @Input() data: any;
  @Output() deleteEvent = new EventEmitter();
  constructor() { }

  onClickDelete() {
    this.deleteEvent.emit()
  }
}
