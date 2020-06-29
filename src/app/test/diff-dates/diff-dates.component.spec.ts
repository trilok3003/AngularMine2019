import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffDatesComponent } from './diff-dates.component';

describe('DiffDatesComponent', () => {
  let component: DiffDatesComponent;
  let fixture: ComponentFixture<DiffDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
