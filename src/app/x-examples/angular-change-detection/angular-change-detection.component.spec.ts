import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChangeDetectionComponent } from './angular-change-detection.component';

describe('AngularChangeDetectionComponent', () => {
  let component: AngularChangeDetectionComponent;
  let fixture: ComponentFixture<AngularChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
