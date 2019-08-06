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
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
