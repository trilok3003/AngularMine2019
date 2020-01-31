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
    {path: 'time_picker', name: 'Time Picker'},
    {path: 'date_time_picker_2', name: 'Date Time Picker 2'},
    {path: 'custom', name: 'Custom Date Pipe'},
    {path: 'rxjsUses', name: 'Rxjs Uses'},
    {path: 'custom', name: 'Validation errors'},
    {path: 'filteringWithRxjs', name: 'Filtering using rxjs'},
    {path: 'stateStore', name: 'State store examples'},
    {path: 'customDashboard', name: 'Lazy loading feature modules'},
    {path: 'nestedLevelModule', name: 'nested level routing module'},
    {path: 'checkboxSelect', name: 'Parent Child Checkbox List Structure with Expand Collapse'},
    {path: 'animationModule', name: 'Animation Examples'},
    {path: 'angularModelModule', name: 'Angular model example'},
    {path: 'timeline', name: 'Time Line example'},
    {path: 'stepper', name: 'Stepper example'},
    {path: 'css3FlexBox', name: 'Css3 flexbox guide'},
    {path: 'animations', name: 'Animation Module Example'},
    {path: 'searches', name: 'Real Time Search using rxjs Examples'},
    {path: 'checkUncheckList', name: 'Check Uncheck Examples'},
    {path: 'selectUnselect', name: 'Select and unselect examples'},
    {path: 'paginations', name: 'Paginations Examples'},
    {path: 'showMoreShowLess', name: 'Show More Show Less Examples'},
    {path: 'crud', name: 'Crud Examples api'},
    {path: 'progressbar', name: 'progressbar file uploads'},
    {path: 'testing', name: 'Display a loader on every HTTP request using Interceptor'},
    {path: 'inheritance', name: 'Component Inheritance'},
    {path: 'scrollingMenu/:section1', name: 'Scrolling example'},
    {path: 'scrolling_list', name: 'Scrolling List'},
    {path: 'scrolling_list2', name: 'Scrolling2 List'},
    {path: 'otherExample', name: 'Other Examples implements very useful'},
    {path: 'set1', name: 'Set 1 examples implements'},
    {path: 'set2', name: 'Set 2 examples implements'},
    {path: 'module1', name: 'Fackbackend module examples'},
    {path: 'httpPendingRequest', name: 'angular-http-pending-request-pattern'},
    {path: 'xset3', name: 'Set 3 examples'},
    {path: 'xset4', name: 'Set 4 examples'},
  ]
  constructor(public router: Router) { }

  ngOnInit() {
  }
  toNavigate(path) {
   this.router.navigate([path]);
  }

}
