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
  {path: 'array_duplicasy', component: ResoveDuplicasyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
