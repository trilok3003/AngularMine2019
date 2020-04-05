import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAppComponent } from './notification-app.component';

describe('NotificationAppComponent', () => {
  let component: NotificationAppComponent;
  let fixture: ComponentFixture<NotificationAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
