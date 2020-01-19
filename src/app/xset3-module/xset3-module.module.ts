import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Xset3ModuleRoutingModule, routedComponents } from './xset3-module-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { StartComponent1 } from './start.component';


@NgModule({
  declarations: [routedComponents, StartComponent1],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    Xset3ModuleRoutingModule
  ],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
],
})
export class Xset3ModuleModule { }
