import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMonthPickerComponent } from './custom-month-picker.component';

describe('CustomMonthPickerComponent', () => {
  let component: CustomMonthPickerComponent;
  let fixture: ComponentFixture<CustomMonthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMonthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMonthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
