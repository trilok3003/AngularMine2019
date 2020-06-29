import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickerDemoComponent } from './date-time-picker-demo.component';

describe('DateTimePickerDemoComponent', () => {
  let component: DateTimePickerDemoComponent;
  let fixture: ComponentFixture<DateTimePickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
