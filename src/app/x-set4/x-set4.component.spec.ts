import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSet4Component } from './x-set4.component';

describe('XSet4Component', () => {
  let component: XSet4Component;
  let fixture: ComponentFixture<XSet4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSet4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSet4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
