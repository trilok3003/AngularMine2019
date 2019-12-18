import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupDataComponent } from './compoents/group-data/group-data.component';
import { DyanamicFormComponent } from './compoents/dyanamic-form/dyanamic-form.component';
import { from } from 'rxjs';
import { NavbarComponent } from './compoents/navbar/navbar.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { GroupByPipeExampleComponent } from './compoents/group-by-pipe-example/group-by-pipe-example.component';
import { BehaviourSubjectExampleComponent } from './compoents/behaviour-subject-example/behaviour-subject-example.component';
import { DatepickerComponent } from './compoents/datepicker/datepicker.component';
import { CustomComponent } from './compoents/custom/custom.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CustomDirective } from './directives/custom.directive';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SearchAutoCompleteComponent } from './compoents/search-auto-complete/search-auto-complete.component';
import { FilterBykeyPipe } from './pipes/filter-bykey.pipe';
import { TodoComponent } from './compoents/todo/todo.component';
import { TestComponent } from './compoents/test/test.component';
import { RxjsOperatorsComponent } from './compoents/rxjs-operators/rxjs-operators.component';
import { CompoentsComponent } from './compoents/compoents.component';
import { RxjsOperators2Component } from './compoents/rxjs-operators2/rxjs-operators2.component';
import { DialogComponent } from './dialog/dialog.component';
import { SubjectExampleComponent } from './compoents/subject-example/subject-example.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AsyncPipeComponent } from './examples/async-pipe/async-pipe.component';
import { StickySidebarComponent } from './components/sticky-sidebar/sticky-sidebar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PopUpDialogComponent } from './pop-up-dialog/pop-up-dialog.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BadgeComponent } from './components/badge/badge.component';
import { AlertComponent } from './components/alert/alert.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ModalComponent } from './components/modal/modal.component';
import { TopicsComponent } from './topics/topics.component';
import { OthersComponent } from './others/others.component';
import { TableDynamicComponent } from './table-dynamic/table-dynamic.component';
import { SortingComponent } from './sorting/sorting.component';
import { AssendingSortPipe } from './pipes/assending-sort.pipe';
import { DessendingSortPipe } from './pipes/dessending-sort.pipe';
import { ResoveDuplicasyComponent } from './components/resove-duplicasy/resove-duplicasy.component';
import { UniqueInArrayPipe } from './pipes/unique-in-array.pipe';
import { UniqueObjectInArrayPipe } from './pipes/unique-object-in-array.pipe';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TemplateFormHandlingComponent } from './components/template-form-handling/template-form-handling.component';
import { EmojiDirective } from './directives/emoji.directive';
import { DomManupulationComponent, Pane } from './dom-manupulation/dom-manupulation.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataToRoutesComponent } from './data-to-routes/data-to-routes.component';
import { ObservableTutsComponent } from './observable-tuts/observable-tuts.component';
import { ReuseHeaderComponent } from './reuse-header/reuse-header.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { StateCityComponent } from './state-city/state-city.component';
import { RecursiveComponent } from './recursive/recursive.component';
import { LoaderComponent } from './loader/loader.component';
import { DecoratorsExamplesComponent, Alert1Component, TabComponent, TabsComponent, HostBindingDirective, HostListenerDirective } from './decorators-examples/decorators-examples.component';
import { TreeMapComponent } from './logic/tree-map/tree-map.component';
import { MapSetComponent } from './logic/map-set/map-set.component';
import { DateTimePickerExamplesComponent } from './date-time-picker-examples/date-time-picker-examples.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AngularNewDateTimePickerModule } from './angular-datetimepicker/datepicker.module';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TimePickerExamplesComponent } from './time-picker-examples/time-picker-examples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleSourceCodeComponent } from './example-source-code/example-source-code.component';
import { NgxMaterialTimepickerModule1 } from './material-timepicker/ngx-material-timepicker.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DateTimePickerDemoComponent } from './date-time-picker-demo/date-time-picker-demo.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { RxjsUsesComponent } from './rxjs-uses/rxjs-uses.component';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { FilteringRxjsComponent } from './filtering-rxjs/filtering-rxjs.component';
import { StateStoreComponent } from './state-store/state-store.component';
import { TestsComponent } from './test/tests.component';
import { ParentChildCheckboxComponent } from './parent-child-checkbox/parent-child-checkbox.component';
import { TimelineFlowComponent } from './timeline-flow/timeline-flow.component';
import { TimelineComponent } from './timeline-flow/timeline/timeline.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepperReuseComponent } from './stepper/stepper-reuse/stepper-reuse.component';
import { Css3FlexBoxGuideComponent } from './css3-flex-box-guide/css3-flex-box-guide.component';
import { SearchComponent } from './search/search.component';
import { CheckUncheckListComponent } from './check-uncheck-list/check-uncheck-list.component';
import { SelectUnselectComponent } from './check-uncheck-list/select-unselect/select-unselect.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { ShowmoreShowlessComponent } from './paginations/showmore-showless/showmore-showless.component';
import { ProgressbarComponent } from './common/progressbar/progressbar.component';
import { UploadsComponent } from './common/uploads/uploads.component';
import { UploadFileExampleComponent } from './common/upload-file-example/upload-file-example.component';
import { SharedModule } from './shared/shared.module';
import { XyzComponent } from './xyz/xyz.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { InheritanceTestComponent } from './inheritance-test/inheritance-test/inheritance-test.component';
import { EmployeeListComponent } from './inheritance-test/employee/employee-list.component';
import { EmployeeComponent } from './inheritance-test/employee/employee.component';
import { EmployeeTableComponent } from './inheritance-test/employee/employee-table.component';
import { FormDirective } from './utillibrary/form.directive';
@NgModule({
  declarations: [
    AppComponent,
    GroupDataComponent,
    DyanamicFormComponent,
    NavbarComponent,
    GroupByPipe,
    GroupByPipeExampleComponent,
    BehaviourSubjectExampleComponent,
    DatepickerComponent,
    CustomComponent,
    FilterPipe,
    CustomDirective,
    TimeFormatPipe,
    SearchPipe,
    SearchAutoCompleteComponent,
    FilterBykeyPipe,
    TodoComponent,
    TestComponent,
    RxjsOperatorsComponent,
    CompoentsComponent,
    RxjsOperators2Component,
    DialogComponent,
    SubjectExampleComponent,
    AsyncPipeComponent,
    StickySidebarComponent,
    SidebarComponent,
    PopUpDialogComponent,
    CollapseComponent,
    DropdownComponent,
    BadgeComponent,
    AlertComponent,
    BreadcrumbComponent,
    ModalComponent,
    TopicsComponent,
    OthersComponent,
    TableDynamicComponent,
    SortingComponent,
    AssendingSortPipe,
    DessendingSortPipe,
    ResoveDuplicasyComponent,
    UniqueInArrayPipe,
    UniqueObjectInArrayPipe,
    NotificationsComponent,
    TemplateFormHandlingComponent,
    EmojiDirective,
    DomManupulationComponent,
    Pane,
    ContentProjectionComponent,
    DataToRoutesComponent,
    ObservableTutsComponent,
    ReuseHeaderComponent,
    AutoCompleteComponent,
    StateCityComponent,
    RecursiveComponent,
    LoaderComponent,
    DecoratorsExamplesComponent,
    Alert1Component,
    TabComponent,
    TabsComponent,
    HostBindingDirective,
    HostListenerDirective,
    TreeMapComponent,
    MapSetComponent,
    DateTimePickerExamplesComponent,
    NavbarSidebarComponent,
    TimePickerExamplesComponent,
    ExampleSourceCodeComponent,
    DateTimePickerDemoComponent,
    CustomDatePipe,
    RxjsUsesComponent,
    ValidationErrorsComponent,
    FilteringRxjsComponent,
    StateStoreComponent,
    TestsComponent,
    ParentChildCheckboxComponent,
    TimelineFlowComponent,
    TimelineComponent,
    StepperComponent,
    StepperReuseComponent,
    Css3FlexBoxGuideComponent,
    SearchComponent,
    CheckUncheckListComponent,
    SelectUnselectComponent,
    PaginationsComponent,
    ShowmoreShowlessComponent,
    ProgressbarComponent,
    UploadsComponent,
    UploadFileExampleComponent,
    XyzComponent,
    InheritanceTestComponent,
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    FormDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularDateTimePickerModule,
    AngularNewDateTimePickerModule,
   // NgxMaterialTimepickerModule,
    // NgxMaterialTimepickerModule.setLocale('ar-AE'),
    NgxMaterialTimepickerModule1,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule
    ],
    providers: [
      LoaderService,
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
