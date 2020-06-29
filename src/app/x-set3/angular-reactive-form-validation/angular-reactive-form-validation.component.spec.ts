import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveFormValidationComponent } from './angular-reactive-form-validation.component';

describe('AngularReactiveFormValidationComponent', () => {
  let component: AngularReactiveFormValidationComponent;
  let fixture: ComponentFixture<AngularReactiveFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReactiveFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
