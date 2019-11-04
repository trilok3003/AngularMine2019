import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimePickerExamplesComponent } from './date-time-picker-examples.component';

describe('DateTimePickerExamplesComponent', () => {
  let component: DateTimePickerExamplesComponent;
  let fixture: ComponentFixture<DateTimePickerExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimePickerExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimePickerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
