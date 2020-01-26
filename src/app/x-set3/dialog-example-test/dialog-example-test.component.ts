import { Component, OnInit } from '@angular/core';
import { DialogConfig } from 'src/app/_dialog/dialog/dialog-config';
import { DialogRef } from 'src/app/_dialog/dialog/dialog-ref';

@Component({
  selector: 'app-dialog-example-test',
  templateUrl: './dialog-example-test.component.html',
  styleUrls: ['./dialog-example-test.component.css']
})
export class DialogExampleTestComponent implements OnInit {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  ngOnInit() {
  }

  onClose() {
    this.dialog.close('some value')
  }
}
