import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialog2Component } from './custom-dialog2.component';

describe('CustomDialog2Component', () => {
  let component: CustomDialog2Component;
  let fixture: ComponentFixture<CustomDialog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDialog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
