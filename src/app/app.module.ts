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
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule} from '@angular/common/http';
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
import { RatingComponent } from './xyz/rating/rating.component';
import { CustomSliderComponent } from './xyz/custom-slider/custom-slider.component';
import { ReactFormComponent } from './xyz/react-form/react-form.component';
import { BehaviourSubjectsComponent } from './xyz/behaviour-subjects/behaviour-subjects.component';
import { ScrollingComponent } from './xyz/scrolling/scrolling.component';
import { LoremComponent } from './xyz/lorem/lorem.component';
import { ScrollingListComponent } from './xyz/scrolling-list/scrolling-list.component';
import { ScrollingList2Component, ItemCardDirective } from './xyz/scrolling-list2/scrolling-list2.component';
import { XExamplesComponent } from './x-examples/x-examples.component';
import { AngularRouterComponent } from './x-examples/angular-router/angular-router.component';
import { AngularViewchildComponent } from './x-examples/angular-viewchild/angular-viewchild.component';
import { AngularNgtempleteOutletComponent } from './x-examples/angular-ngtemplete-outlet/angular-ngtemplete-outlet.component';
import { AngularNgContainerComponent } from './x-examples/angular-ng-container/angular-ng-container.component';
import { AngularHostBindingHostListenerComponent } from './x-examples/angular-host-binding-host-listener/angular-host-binding-host-listener.component';
import { AngularAsyncPipeComponent } from './x-examples/angular-async-pipe/angular-async-pipe.component';
import { AngularChangeDetectionComponent } from './x-examples/angular-change-detection/angular-change-detection.component';
import { AngularKeysEventComponent } from './x-examples/angular-keys-event/angular-keys-event.component';
import { AngularLocationServiceComponent } from './x-examples/angular-location-service/angular-location-service.component';
import { TextDirective } from './directives/text.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { RealTimeSearchComponent } from './x-examples/real-time-search/real-time-search.component';
import { MarkAsteriskDirective } from './directives/mark-asterisk.directive';
import { ChangeDetectionExampleComponent } from './x-examples/change-detection-example/change-detection-example.component';
import { WikipediaComponent } from './x-examples/wikipedia/wikipedia.component';
import { Tabs1Component } from './x-examples/tabs/tabs.component';
import { Tab1Component } from './x-examples/tab/tab.component';
import { CardHoveDirective } from './directives/card-hove.directive';
import { XSet1Component } from './x-set1/x-set1.component';
import { HoverFocusDirective } from './directives/hover-focus.directive';
import { HttpWithObservablesComponent } from './x-set1/http-with-observables/http-with-observables.component';
import { HttpWithPromisesComponent } from './x-set1/http-with-promises/http-with-promises.component';
import { JsonpWithObservablesComponent } from './x-set1/jsonp-with-observables/jsonp-with-observables.component';
import { CoreHttpApiComponent } from './x-set1/core-http-api/core-http-api.component';
import { ClassInterfaceComponent } from './x-set1/class-interface/class-interface.component';
import { TypesComponent } from './x-set1/types/types.component';
import { ContentProjectionComponent1 } from './x-set1/content-projection/content-projection.component';
import { XSet2Component } from './x-set2/x-set2.component';
import { ReactiveFormExampleComponent } from './x-set2/reactive-form-example/reactive-form-example.component';
import { DefaultPipe } from './pipes/default.pipe';
import { ReactiveFormValidatonsComponent } from './x-set2/reactive-form-validatons/reactive-form-validatons.component';
import { SubjectExamplesComponent } from './x-set2/subject-example/subject-example.component';
import { fakeBackendProviderForProducts } from './xset3-module/_helpers';
import { PaginationsExamplessComponent } from './x-set2/paginations-exampless/paginations-exampless.component';
import { HttpAuthenticationComponent } from './x-set2/http-authentication/http-authentication.component';
import { JwtAuthenticationComponent } from './x-set2/jwt-authentication/jwt-authentication.component';
import { RoleBasedAuthenticationComponent } from './x-set2/role-based-authentication/role-based-authentication.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { fakeBackendProvider1 } from './_helpers/fake-backend';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AdminComponent } from './admin/admin.component';
import {fakeBackendRoleBasedProvider} from './_helpers/fake-backend-role-based'
import { JwtInterceptorRoleBased } from './_helpers/jwt-role-based.interceptor';
import { ErrorInterceptorRoleBased } from './_helpers/error-role-based.interceptor';
import { DivScrollingComponent } from './x-set2/div-scrolling/div-scrolling.component';
import { AngularHttpPendingRequestPatternComponent } from './angular-http-pending-request-pattern/angular-http-pending-request-pattern.component';
import { XSet3Component } from './x-set3/x-set3.component';
import { AngularReactiveFormValidationComponent } from './x-set3/angular-reactive-form-validation/angular-reactive-form-validation.component';
import { DialogExampleTestComponent } from './x-set3/dialog-example-test/dialog-example-test.component';
import {DialogModule} from './_dialog/dialog/dialog.module';
import { DynamicLoadComponent } from './x-set3/dynamic-load/dynamic-load.component';
import { DynamicLoadMessageComponent } from './x-set3/dynamic-load-message/dynamic-load-message.component'
import { ModalDirective } from './_dialog_pop/modal.directive';
import { XSet4Component } from './x-set4/x-set4.component';
import { Xset4alertComponent } from './x-set4/xset4alert/xset4alert.component';
import { XSet5Component } from './x-set5/x-set5.component';
import { CustomDialogComponent } from './x-set5/custom-dialog/custom-dialog.component';
import { DialogDirective } from './x-set5/dialog.directive';
import { CustomDialog1Component } from './x-set5/custom-dialog1/custom-dialog1.component';
import { CustomDialog2Component } from './x-set5/custom-dialog2/custom-dialog2.component';
import { CDialogComponent } from './x-set5/c-dialog/c-dialog.component';
import { CustomDialogModule } from './_module/dialog/custom-dialog.module';
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
    RatingComponent,
    CustomSliderComponent,
    ReactFormComponent,
    BehaviourSubjectsComponent,
    ScrollingComponent,
    LoremComponent,
    ScrollingListComponent,
    ScrollingList2Component,
    ItemCardDirective,
    XExamplesComponent,
    AngularRouterComponent,
    AngularViewchildComponent,
    AngularNgtempleteOutletComponent,
    AngularNgContainerComponent,
    AngularHostBindingHostListenerComponent,
    AngularAsyncPipeComponent,
    AngularChangeDetectionComponent,
    AngularKeysEventComponent,
    AngularLocationServiceComponent,
    TextDirective,
    RainbowDirective,
    RealTimeSearchComponent,
    MarkAsteriskDirective,
    ChangeDetectionExampleComponent,
    WikipediaComponent,
    Tabs1Component,
    Tab1Component,
    CardHoveDirective,
    XSet1Component,
    HoverFocusDirective,
    HttpWithObservablesComponent,
    HttpWithPromisesComponent,
    JsonpWithObservablesComponent,
    CoreHttpApiComponent,
    ClassInterfaceComponent,
    TypesComponent,
    ContentProjectionComponent1,
    XSet2Component,
    ReactiveFormExampleComponent,
    DefaultPipe,
    ReactiveFormValidatonsComponent,
    SubjectExamplesComponent,
    PaginationsExamplessComponent,
    HttpAuthenticationComponent,
    JwtAuthenticationComponent,
    RoleBasedAuthenticationComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    DivScrollingComponent,
    AngularHttpPendingRequestPatternComponent,
    XSet3Component,
    AngularReactiveFormValidationComponent,
    DialogExampleTestComponent,
    DynamicLoadComponent,
    DynamicLoadMessageComponent,
    ModalDirective,
    XSet4Component,
    Xset4alertComponent,
    XSet5Component,
    CustomDialogComponent,
    DialogDirective,
    CustomDialog1Component,
    CustomDialog2Component,
    CDialogComponent
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
    SharedModule,
    HttpClientJsonpModule,
    DialogModule,
    CustomDialogModule
    ],
    providers: [
      LoaderService,
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
       fakeBackendProviderForProducts,
      // fakeBackendProvider1,
      // { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
      // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      fakeBackendRoleBasedProvider,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorRoleBased, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorRoleBased, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogExampleTestComponent, PaginationsExamplessComponent, DynamicLoadMessageComponent, Xset4alertComponent,
    CustomDialog1Component, CustomDialog2Component
  ]
})
export class AppModule { }
