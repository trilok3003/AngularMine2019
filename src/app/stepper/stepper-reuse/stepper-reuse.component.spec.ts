import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperReuseComponent } from './stepper-reuse.component';

describe('StepperReuseComponent', () => {
  let component: StepperReuseComponent;
  let fixture: ComponentFixture<StepperReuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperReuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
