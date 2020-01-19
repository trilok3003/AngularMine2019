import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ProductListComponent, ProductAddEditComponent } from './products';
import {StartComponent1} from './start.component'
const routes: Routes = [
    {
        path: '',
        component: StartComponent1,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'home' },
          {path: 'home', component: HomeComponent},
          {
            path: 'products',
            component: ProductListComponent,
            children: [
                { path: 'add', component: ProductAddEditComponent },
                { path: 'edit/:id', component: ProductAddEditComponent }
            ]
        },
        ]
    },
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Xset3ModuleRoutingModule { }

// for easy import into app module
export const routedComponents = [
  HomeComponent, 
  ProductListComponent, 
  ProductAddEditComponent
];