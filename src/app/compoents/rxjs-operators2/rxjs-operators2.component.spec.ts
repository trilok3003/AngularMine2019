import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperators2Component } from './rxjs-operators2.component';

describe('RxjsOperators2Component', () => {
  let component: RxjsOperators2Component;
  let fixture: ComponentFixture<RxjsOperators2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOperators2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOperators2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
