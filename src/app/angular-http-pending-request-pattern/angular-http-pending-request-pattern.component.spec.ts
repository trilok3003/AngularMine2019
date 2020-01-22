import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHttpPendingRequestPatternComponent } from './angular-http-pending-request-pattern.component';

describe('AngularHttpPendingRequestPatternComponent', () => {
  let component: AngularHttpPendingRequestPatternComponent;
  let fixture: ComponentFixture<AngularHttpPendingRequestPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularHttpPendingRequestPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHttpPendingRequestPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
