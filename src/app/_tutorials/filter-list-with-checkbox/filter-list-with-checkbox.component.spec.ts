import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListWithCheckboxComponent } from './filter-list-with-checkbox.component';

describe('FilterListWithCheckboxComponent', () => {
  let component: FilterListWithCheckboxComponent;
  let fixture: ComponentFixture<FilterListWithCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterListWithCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
