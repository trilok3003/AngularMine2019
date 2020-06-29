import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
  selector: 'app-reuse-header',
  templateUrl: './reuse-header.component.html',
  styleUrls: ['./reuse-header.component.css']
})
export class ReuseHeaderComponent implements OnInit {

  theme = 'receiving';
  formObject: any;
  activePath;
  @Output() update = new EventEmitter();

  @Input('theme') set setTheme(theme) {
    console.log(this.theme)
    this.theme = theme || 'receiving';
  }


  @Input('formObject') set setFormObject(value) {
    this.formObject = value;
  }

  constructor() {
  }

  // refreshToggleAction(e) {
  //   if (e) {
  //     this.activePath = e.path;
  //   }
  // }

  // itemChanged(e, index) {
  //   this.formObject[index] = JSON.parse(JSON.stringify(e));
  //   this.update.emit(this.formObject);
  //   this.activePath = '';
  // }
  ngOnInit() {

  }
}
