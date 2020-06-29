import { Component, OnInit, Input } from '@angular/core';
import { Tabs1Component } from '../tabs/tabs.component';

@Component({
  selector: 'tab1',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class Tab1Component implements OnInit {
  @Input() tabTitle: string;
  active: boolean;
  constructor() {
    // tabs.addTab(this);
  }

  ngOnInit() {
  }

}
