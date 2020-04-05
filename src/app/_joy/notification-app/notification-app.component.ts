import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/notifications/services/notifications.service';
import { Notification } from 'src/app/notifications/model/notification';

@Component({
  selector: 'app-notification-app',
  templateUrl: './notification-app.component.html',
  styleUrls: ['./notification-app.component.css']
})
export class NotificationAppComponent implements OnInit {

  notification = { title: 'Title', text: 'Some random notification text.', level: 'success', options: { timeout: 8 } };
  test = 'test';
  constructor(private _notificationsService: NotificationsService) {
  }

  addNotification() {
    const n = new Notification(this.notification);
    this._notificationsService.addNotification(n);
  }
  ngOnInit() {
  }

}
