import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showSidebar: boolean = true;
  menus = [
    {path:'group',name: 'group'},
    {path:'dynamic_form',name: 'dynamic form'},
    {path: 'group_by_pipe',name: 'group by pipe'},
    {path:'behaviour',name: 'behaviour'},
    {path:'custom',name: 'custom'},
    {path:'search',name: 'search'},
    {path:'todo',name:'todo'},
    {path:'test', name: 'test'},
    {path:'operators', name: 'operators'},
    {path: 'rxjs', name: 'rxjs'},
    {path:'subject', name: 'subject'},
    {path: 'async', name: 'async'},
    {path: 'sidebar', name: 'sidebar'},
    {path:'collapse', name:'collapse'},
    {path: 'dropdown', name: 'dropdown'}
  ]
  constructor() { }

  ngOnInit() {
  }
  getShowHide() {
    return this.showSidebar = !this.showSidebar
  }

}
