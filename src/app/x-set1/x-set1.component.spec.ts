import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSet1Component } from './x-set1.component';

describe('XSet1Component', () => {
  let component: XSet1Component;
  let fixture: ComponentFixture<XSet1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSet1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
