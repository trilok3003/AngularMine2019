import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDialog1Component } from './custom-dialog1.component';

describe('CustomDialog1Component', () => {
  let component: CustomDialog1Component;
  let fixture: ComponentFixture<CustomDialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDialog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
