import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCheckboxComponent } from './parent-child-checkbox.component';

describe('ParentChildCheckboxComponent', () => {
  let component: ParentChildCheckboxComponent;
  let fixture: ComponentFixture<ParentChildCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
