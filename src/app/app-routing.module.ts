import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupDataComponent } from './compoents/group-data/group-data.component';
import { DyanamicFormComponent } from './compoents/dyanamic-form/dyanamic-form.component';
import { GroupByPipeExampleComponent } from './compoents/group-by-pipe-example/group-by-pipe-example.component';
import { BehaviourSubjectExampleComponent } from './compoents/behaviour-subject-example/behaviour-subject-example.component';
import { CustomComponent } from './compoents/custom/custom.component';
import { SearchAutoCompleteComponent } from './compoents/search-auto-complete/search-auto-complete.component';
import { TodoComponent } from './compoents/todo/todo.component';
import { TestComponent } from './compoents/test/test.component';
import { RxjsOperatorsComponent } from './compoents/rxjs-operators/rxjs-operators.component';
import { RxjsOperators2Component } from './compoents/rxjs-operators2/rxjs-operators2.component';
import { SubjectExampleComponent } from './compoents/subject-example/subject-example.component';
import { AsyncPipeComponent } from './examples/async-pipe/async-pipe.component';
import { StickySidebarComponent } from './components/sticky-sidebar/sticky-sidebar.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ModalComponent } from './components/modal/modal.component';
import { TopicsComponent } from './topics/topics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OthersComponent } from './others/others.component';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';
import { SortingComponent } from './sorting/sorting.component';
import { ResoveDuplicasyComponent } from './components/resove-duplicasy/resove-duplicasy.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TemplateFormHandlingComponent } from './components/template-form-handling/template-form-handling.component';
import { DomManupulationComponent } from './dom-manupulation/dom-manupulation.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataToRoutesComponent } from './data-to-routes/data-to-routes.component';
import { ObservableTutsComponent } from './observable-tuts/observable-tuts.component';
import { ReuseHeaderComponent } from './reuse-header/reuse-header.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { StateCityComponent } from './state-city/state-city.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { LoaderComponent } from './loader/loader.component';
import { DecoratorsExamplesComponent } from './decorators-examples/decorators-examples.component';
import { TreeMapComponent } from './logic/tree-map/tree-map.component';
import { MapSetComponent } from './logic/map-set/map-set.component';
import { DateTimePickerExamplesComponent } from './date-time-picker-examples/date-time-picker-examples.component';
import { TimePickerExamplesComponent } from './time-picker-examples/time-picker-examples.component';
import { DateTimePickerDemoComponent } from './date-time-picker-demo/date-time-picker-demo.component';
import { RxjsUsesComponent } from './rxjs-uses/rxjs-uses.component';
import { FilteringRxjsComponent } from './filtering-rxjs/filtering-rxjs.component';
import { StateStoreComponent } from './state-store/state-store.component';
import { TestsComponent } from './test/tests.component';


const routes: Routes = [
  {path:'group',component:GroupDataComponent},
  {path:'dynamic_form',component:DyanamicFormComponent},
  {path: 'group_by_pipe',component: GroupByPipeExampleComponent},
  {path:'behaviour',component:BehaviourSubjectExampleComponent},
  {path:'custom',component:CustomComponent},
  {path:'search',component:SearchAutoCompleteComponent},
  {path:'todo',component:TodoComponent},
  {path:'test', component: TestComponent},
  {path:'operators', component: RxjsOperatorsComponent},
  {path: 'rxjs', component: RxjsOperators2Component},
  {path:'subject', component: SubjectExampleComponent},
  {path: 'async', component: AsyncPipeComponent},
  {path: 'sidebar', component: StickySidebarComponent},
  {path: 'collapse', component: CollapseComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path:'badge', component: BadgeComponent},
  {path:'alert', component: AlertComponent},
  {path:'breadcrumb', component: BreadcrumbComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'home', component: TopicsComponent},
  {path: 'sidebar1', component: SidebarComponent},
  {path: 'others',component: OthersComponent},
  {path: 'table', component: TableDynamicComponent},
  {path: 'sorting', component: SortingComponent},
  {path: 'array_duplicasy', component: ResoveDuplicasyComponent},
  {path: 'notifications', component: NotificationsComponent },
  {path: 'templateForm', component: TemplateFormHandlingComponent},
  {path: 'dom', component: DomManupulationComponent},
  {path: 'ngContent', component: ContentProjectionComponent},
  {path: 'dataToRoutes', component: DataToRoutesComponent, data: {msg: "Welcome Message from routes"}},
  {path: 'observal_tuts', component: ObservableTutsComponent},
  {path: 'reuse_header', component: ReuseHeaderComponent},
  {path: 'auto_complete', component: AutoCompleteComponent},
  {path: 'state_districts', component: StateCityComponent},
  {path: 'recursive', component: RecursiveComponent},
  {path: 'loader', component: LoaderComponent},
  {path: 'decorators', component: DecoratorsExamplesComponent},
  {path: 'treeMap', component: TreeMapComponent},
  {path: 'map-set', component: MapSetComponent},
  {path: 'date_time_picker', component: DateTimePickerExamplesComponent},
  {path: 'time_picker', component: TimePickerExamplesComponent},
  {path: 'date_time_picker_2', component: DateTimePickerDemoComponent},
  {path: 'rxjsUses', component: RxjsUsesComponent},
  {path: 'filteringWithRxjs', component: FilteringRxjsComponent},
  {path: 'stateStore', component: TestsComponent},
  {path: 'customDashboard', loadChildren: () => import('./custom-dashboard/custom-dashboard.module').then(m => m.CustomDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
