import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomRoutingModule } from './custom-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    CustomRoutingModule
  ]
})
export class CustomDashboardModule { }
