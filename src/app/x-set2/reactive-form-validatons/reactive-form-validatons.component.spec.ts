import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidatonsComponent } from './reactive-form-validatons.component';

describe('ReactiveFormValidatonsComponent', () => {
  let component: ReactiveFormValidatonsComponent;
  let fixture: ComponentFixture<ReactiveFormValidatonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidatonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormValidatonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
