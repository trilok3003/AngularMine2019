import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chagedetector1Component } from './chagedetector1.component';

describe('Chagedetector1Component', () => {
  let component: Chagedetector1Component;
  let fixture: ComponentFixture<Chagedetector1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chagedetector1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chagedetector1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
