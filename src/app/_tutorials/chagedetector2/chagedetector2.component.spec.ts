import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chagedetector2Component } from './chagedetector2.component';

describe('Chagedetector2Component', () => {
  let component: Chagedetector2Component;
  let fixture: ComponentFixture<Chagedetector2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chagedetector2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chagedetector2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
