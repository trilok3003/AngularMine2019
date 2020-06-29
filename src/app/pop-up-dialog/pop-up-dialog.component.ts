import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pop-up-dialog',
  templateUrl: './pop-up-dialog.component.html',
  styleUrls: ['./pop-up-dialog.component.css']
})
export class PopUpDialogComponent implements OnInit {
  markServiceForm: FormGroup
  constructor(public globalService: GlobalService, public fb: FormBuilder) { 
    this.markServiceForm = fb.group({
      reopenedReason: ['',Validators.required],
      remarks: ['',Validators.required]
    })
  }

  ngOnInit() {
  }
  getTitle() {
    return 'Mark Service Reopen';
  }
  closeModal() {
    this.globalService.setMarkServiceReopenPopup(undefined);
  }
  onSubmit() {}
}
