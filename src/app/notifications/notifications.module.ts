import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsService } from './services/notifications.service';



@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationsComponent],
  providers: [NotificationsService]
})
export class NotificationsModule { }
