import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSet2Component } from './x-set2.component';

describe('XSet2Component', () => {
  let component: XSet2Component;
  let fixture: ComponentFixture<XSet2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSet2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
