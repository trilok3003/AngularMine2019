import { Component, OnInit } from '@angular/core';
import { DialogItem } from './dialog.item';
import { CustomDialog1Component } from './custom-dialog1/custom-dialog1.component';
import { CustomDialog2Component } from './custom-dialog2/custom-dialog2.component';
import { CdialogService } from './cdialog.service';
import { CustomdialogService } from '../_module/dialog/cdialog.service';

@Component({
  selector: 'app-x-set5',
  templateUrl: './x-set5.component.html',
  styleUrls: ['./x-set5.component.css']
})
export class XSet5Component implements OnInit {
  newsfeeds: DialogItem[];
  item;
  customItem;
  constructor(public cdialogService: CdialogService, public customDialogService: CustomdialogService) { }

  ngOnInit() {
    this.newsfeeds = this.getAds();
     this.cdialogService._component.subscribe(res => {
      this.item = res;
   });
   this.customDialogService._component.subscribe(res => {
    this.customItem = res;
 });
  }
  getAds() {
    return [
      new DialogItem(CustomDialog1Component, {name: 'John Doe', bio: '7+ exprience in PHP and Angular. Look for job. Hire now'}),
      new DialogItem(CustomDialog2Component, {name: 'John Doe', bio: '7+ exprience in PHP and Angular. Look for job. Hire now'}),

    ];
  }
  openDialog() {
    this.cdialogService.open(CustomDialog1Component, {name: 'new', bio: 'bio..'})
  }
  openCustomDialog() {
    this.customDialogService.open(CustomDialog2Component, {name: 'custom dialog ...', bio: 'bio..'})
  }

}
