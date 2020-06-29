import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-uncheck-list',
  templateUrl: './check-uncheck-list.component.html',
  styleUrls: ['./check-uncheck-list.component.css']
})
export class CheckUncheckListComponent implements OnInit {

  title = 'CheckBox Select/ Unselect All';
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
 
  constructor(){
      this.masterSelected = false;
      this.checklist = [
        {id:1,value:'india',isSelected:false},
        {id:2,value:'Australia',isSelected:true},
        {id:3,value:'Us',isSelected:true},
        {id:4,value:'England',isSelected:false},
        {id:5,value:'Srilanka',isSelected:false},
        {id:6,value:'Pakistan',isSelected:false},
        {id:7,value:'China',isSelected:false},
        {id:8,value:'Germany',isSelected:false}
      ];
  }

  ngOnInit() {
  }
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

}
