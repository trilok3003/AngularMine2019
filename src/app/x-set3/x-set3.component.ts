import { Component, OnInit } from '@angular/core';
import { DialogService } from '../_dialog/dialog.service';
import { DialogExampleTestComponent } from './dialog-example-test/dialog-example-test.component';
import { PaginationsExamplessComponent } from '../x-set2/paginations-exampless/paginations-exampless.component';

@Component({
  selector: 'app-x-set3',
  templateUrl: './x-set3.component.html',
  styleUrls: ['./x-set3.component.css']
})
export class XSet3Component implements OnInit {
  data1 = "content here"
  constructor(public dialog: DialogService) { 
  
  }

  ngOnInit() {
  }
  openDialog() {
    const ref = this.dialog.open(DialogExampleTestComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' },
    })

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result)
    })
  }
}
