import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chagedetector3Component } from './chagedetector3.component';

describe('Chagedetector3Component', () => {
  let component: Chagedetector3Component;
  let fixture: ComponentFixture<Chagedetector3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chagedetector3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chagedetector3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
