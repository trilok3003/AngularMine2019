import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerUiComponent } from './date-picker-ui.component';

describe('DatePickerUiComponent', () => {
  let component: DatePickerUiComponent;
  let fixture: ComponentFixture<DatePickerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
