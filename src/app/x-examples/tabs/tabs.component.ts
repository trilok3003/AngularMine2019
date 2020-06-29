import { Component, OnInit } from '@angular/core';
 export interface Tab {
  tabTitle: string;
  active: boolean;
 }
@Component({
  selector: 'tabs1',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class Tabs1Component implements OnInit {
  tabs: Tab[] = [];

  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
  constructor() { }

  ngOnInit() {
  }

}
