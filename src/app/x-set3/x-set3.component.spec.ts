import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSet3Component } from './x-set3.component';

describe('XSet3Component', () => {
  let component: XSet3Component;
  let fixture: ComponentFixture<XSet3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSet3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
