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
  number = 1000000000000.87;
  numbers = [23,45,43,12,65];
  numbers1 = [
    {amount: 20},
    {amount: 30},
    {amount: 40},
    {amount: 60},
    {amount: 50},
    {amount: 150},
];
numbers2 = [
  {amount: 20, type: 'credit'},
  {amount: 30, type: 'debit'},
  {amount: 40,  type: 'debit'},
  {amount: 60, type: 'credit'},
  {amount: 50, type: 'credit'},
  {amount: 150, type: 'debit'},
];
 movies = [
  {title: 'The Godfather', rating: 8.2, release: '24 March 1972'},
  {title: 'The Godfather: Part II', rating: 9.0, release: '20 December 1972'},
  {title: 'The Shawshank Redemption', rating: 8.3, release: '14 October 1994'},
];
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
  // month picker

  onChange(event: { monthIndex: number, year: number }) {
   console.log(event);
  }

}
