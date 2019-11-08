import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerExamplesComponent } from './time-picker-examples.component';

describe('TimePickerExamplesComponent', () => {
  let component: TimePickerExamplesComponent;
  let fixture: ComponentFixture<TimePickerExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
