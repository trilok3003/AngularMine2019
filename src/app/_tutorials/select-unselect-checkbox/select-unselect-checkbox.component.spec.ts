import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUnselectCheckboxComponent } from './select-unselect-checkbox.component';

describe('SelectUnselectCheckboxComponent', () => {
  let component: SelectUnselectCheckboxComponent;
  let fixture: ComponentFixture<SelectUnselectCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUnselectCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUnselectCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
