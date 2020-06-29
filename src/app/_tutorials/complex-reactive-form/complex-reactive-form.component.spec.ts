import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexReactiveFormComponent } from './complex-reactive-form.component';

describe('ComplexReactiveFormComponent', () => {
  let component: ComplexReactiveFormComponent;
  let fixture: ComponentFixture<ComplexReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
