import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-add-remove',
  templateUrl: './dynamic-add-remove.component.html',
  styleUrls: ['./dynamic-add-remove.component.css']
})
export class DynamicAddRemoveComponent implements OnInit {

  _ref:any;
  lang: string;
  exp: number;
  constructor() { }
  ngOnInit() {
  }
 

  removeObject(){
    this._ref.destroy();
  }
  
  save(){
    if(this.lang && this.exp)
      alert(`Language: ${this.lang} & Experience: ${this.exp}`);
    else
      alert('Please enter value to save');
  }
}
