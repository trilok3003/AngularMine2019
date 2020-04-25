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
import { ParentChildCheckboxComponent } from './parent-child-checkbox/parent-child-checkbox.component';
import { TimelineFlowComponent } from './timeline-flow/timeline-flow.component';
import { TimelineComponent } from './timeline-flow/timeline/timeline.component';
import { StepperComponent } from './stepper/stepper.component';
import { Css3FlexBoxGuideComponent } from './css3-flex-box-guide/css3-flex-box-guide.component';
import { SearchComponent } from './search/search.component';
import { CheckUncheckListComponent } from './check-uncheck-list/check-uncheck-list.component';
import { SelectUnselectComponent } from './check-uncheck-list/select-unselect/select-unselect.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { ShowmoreShowlessComponent } from './paginations/showmore-showless/showmore-showless.component';
import { ProgressbarComponent } from './common/progressbar/progressbar.component';
import { UploadFileExampleComponent } from './common/upload-file-example/upload-file-example.component';
import { XyzComponent } from './xyz/xyz.component';
import { InheritanceTestComponent } from './inheritance-test/inheritance-test/inheritance-test.component';
import { ScrollingComponent } from './xyz/scrolling/scrolling.component';
import { ScrollingListComponent } from './xyz/scrolling-list/scrolling-list.component';
import { ScrollingList2Component } from './xyz/scrolling-list2/scrolling-list2.component';
import { XExamplesComponent } from './x-examples/x-examples.component';
import { XSet1Component } from './x-set1/x-set1.component';
import { XSet2Component } from './x-set2/x-set2.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { Role } from './_models/role';
import { AuthGuardRoleBased } from './_helpers/auth-role-based.guard';
import { AngularHttpPendingRequestPatternComponent } from './angular-http-pending-request-pattern/angular-http-pending-request-pattern.component';
import { XSet3Component } from './x-set3/x-set3.component';
import { XSet4Component } from './x-set4/x-set4.component';
import { XSet5Component } from './x-set5/x-set5.component';
import { CustomMonthPickerComponent } from './x-set5/custom-month-picker/custom-month-picker.component';
import { CustomDatePickerComponent } from './x-set5/custom-date-picker/custom-date-picker.component';
import { TutorialsComponent } from './_tutorials/tutorials/tutorials.component';
import { JoyComponent } from './_joy/joy/joy.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { WebsiteComponent } from './_bootstrap_website/website/website.component';
import { BarComponent } from './_chart/bar/bar.component';
import { ImageLoadInCanvasComponent } from './_chart/image-load-in-canvas/image-load-in-canvas.component';



const routes: Routes = [
  { path: 'home', component: TopicsComponent, canActivate: [AuthGuardRoleBased] },
  // { path: 'home', component: AppDashboardComponent, canActivate: [AuthGuardRoleBased] },
  { path: 'group', component: GroupDataComponent },
  { path: 'dynamic_form', component: DyanamicFormComponent },
  { path: 'group_by_pipe', component: GroupByPipeExampleComponent },
  { path: 'behaviour', component: BehaviourSubjectExampleComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'search', component: SearchAutoCompleteComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'test', component: TestComponent },
  { path: 'operators', component: RxjsOperatorsComponent },
  { path: 'rxjs', component: RxjsOperators2Component },
  { path: 'subject', component: SubjectExampleComponent },
  { path: 'async', component: AsyncPipeComponent },
  { path: 'sidebar', component: StickySidebarComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'sidebar1', component: SidebarComponent },
  { path: 'others', component: OthersComponent },
  { path: 'table', component: TableDynamicComponent },
  { path: 'sorting', component: SortingComponent },
  { path: 'array_duplicasy', component: ResoveDuplicasyComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'templateForm', component: TemplateFormHandlingComponent },
  { path: 'dom', component: DomManupulationComponent },
  { path: 'ngContent', component: ContentProjectionComponent },
  { path: 'dataToRoutes', component: DataToRoutesComponent, data: { msg: "Welcome Message from routes" } },
  { path: 'observal_tuts', component: ObservableTutsComponent },
  { path: 'reuse_header', component: ReuseHeaderComponent },
  { path: 'auto_complete', component: AutoCompleteComponent },
  { path: 'state_districts', component: StateCityComponent },
  { path: 'recursive', component: RecursiveComponent },
  { path: 'loader', component: LoaderComponent },
  { path: 'decorators', component: DecoratorsExamplesComponent },
  { path: 'treeMap', component: TreeMapComponent },
  { path: 'map-set', component: MapSetComponent },
  { path: 'date_time_picker', component: DateTimePickerExamplesComponent },
  { path: 'time_picker', component: TimePickerExamplesComponent },
  { path: 'date_time_picker_2', component: DateTimePickerDemoComponent },
  { path: 'rxjsUses', component: RxjsUsesComponent },
  { path: 'filteringWithRxjs', component: FilteringRxjsComponent },
  { path: 'stateStore', component: TestsComponent },
  { path: 'customDashboard', loadChildren: () => import('./custom-dashboard/custom-dashboard.module').then(m => m.CustomDashboardModule) },
  { path: 'nestedLevelModule', loadChildren: () => import('./angular-nested-routing/angular-nested-routing.module').then(m => m.AngularNestedRoutingModule) },
  { path: 'checkboxSelect', component: ParentChildCheckboxComponent },
  { path: 'animationModule', loadChildren: () => import('./animations-module/animations-module.module').then(m => m.AnimationsModuleModule) },
  { path: 'angularModelModule', loadChildren: () => import('./angular-model/angular-model.module').then(m => m.AngularModelModule) },
  { path: 'timeline', component: TimelineComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'css3FlexBox', component: Css3FlexBoxGuideComponent },
  { path: 'animations', loadChildren: () => import('./animation-demo/animation-demo.module').then(m => m.AnimationDemoModule) },
  { path: 'searches', component: SearchComponent },
  { path: 'checkUncheckList', component: CheckUncheckListComponent },
  { path: 'selectUnselect', component: SelectUnselectComponent },
  { path: 'paginations', component: PaginationsComponent },
  { path: 'showMoreShowLess', component: ShowmoreShowlessComponent },
  { path: 'crud', loadChildren: () => import('./crud-module/crud-module.module').then(m => m.CrudModuleModule) },
  { path: 'progressbar', component: UploadFileExampleComponent },
  { path: 'testing', component: XyzComponent },
  { path: 'inheritance', component: InheritanceTestComponent },
  { path: 'scrollingMenu/:sectionId', component: ScrollingComponent },
  { path: 'scrolling_list', component: ScrollingListComponent },
  { path: 'scrolling_list2', component: ScrollingList2Component },
  { path: 'otherExample', component: XExamplesComponent },
  { path: 'set1', component: XSet1Component },
  { path: 'set2', component: XSet2Component },
  { path: 'module1', loadChildren: () => import('./xset3-module/xset3-module.module').then(m => m.Xset3ModuleModule) },
  { path: 'login', component: LoginComponent },
  { path: 'httpPendingRequest', component: AngularHttpPendingRequestPatternComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardRoleBased],
    data: { roles: [Role.Admin] }
  },
  { path: 'xset3', component: XSet3Component },
  { path: 'xset4', component: XSet4Component },
    { path: 'xset5', component: XSet5Component },
    {path: 'tutorials', component: TutorialsComponent},
    {path: 'month-picker', component: CustomMonthPickerComponent},
    {path: 'date-picker', component: CustomDatePickerComponent},
    {path: 'joy', component: JoyComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuardRoleBased] },
  { path: 'crud_json', loadChildren: () => import('./crud-json-server/crud/crud.module').then(m => m.CrudModule) },
  { path: 'car', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, 
  { path: 'dashboard_module', loadChildren: () => import('./_dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'bootstrap_website', component: WebsiteComponent },
  { path: 'bar_chart', component: BarComponent },
  { path: 'imageLoadCanvas', component: ImageLoadInCanvasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
