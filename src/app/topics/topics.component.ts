import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topics = [
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
    {path: 'dropdown', name: 'dropdown'},
    {path: 'badge', name: 'badge'},
    {path: 'alert', name: 'alert'},
    {path:'breadcrumb', name: 'breadcrumb'},
    {path: 'modal', name: 'modal'},
    {path: 'sidebar1', name:'sidebar'},
    {path: 'others', name: 'other example'},
    {path: 'table', name: 'Dynamic table'},
    {path: 'sorting', name: 'Sorting'},
    {path: 'array_duplicasy', name: 'array Duplicate'},
    {path: 'notifications', name: 'notifications'},
    {path: 'templateForm', name: 'Template form Handling'},
    {path: 'dom', name: 'Dom Manupulation'},
    {path: 'ngContent', name: 'Content Projection'},
    {path: 'dataToRoutes', name: 'Accessing data to routes'},
    {path: 'observal_tuts', name: 'Observal Tutorials'},
    {path: 'custom', name: 'Reusable Header'},
    {path: 'auto_complete', name: 'Auto complete'},
    {path: 'state_districts', name: 'State And Cities'},
    {path: 'custom', name: 'Recursive examples'},
    {path: 'custom', name: 'Loader Examples'},
    {path: 'decorators', name: 'Decorators Examples'},
    {path: 'treeMap', name: 'Tree Map (using Recursive method)'},
    {path: 'map-set', name: 'Map And Set'},
    {path: 'date_time_picker', name: 'Date Time Picker'},
    {path: 'time_picker', name: 'Time Picker'}



  ]
  constructor(public router: Router) { }

  ngOnInit() {
  }
  toNavigate(path) {
   this.router.navigate([path]);
  }

}
