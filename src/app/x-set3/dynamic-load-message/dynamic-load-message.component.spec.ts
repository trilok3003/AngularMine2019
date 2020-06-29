import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoadMessageComponent } from './dynamic-load-message.component';

describe('DynamicLoadMessageComponent', () => {
  let component: DynamicLoadMessageComponent;
  let fixture: ComponentFixture<DynamicLoadMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicLoadMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicLoadMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
