import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSet5Component } from './x-set5.component';

describe('XSet5Component', () => {
  let component: XSet5Component;
  let fixture: ComponentFixture<XSet5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSet5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSet5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
