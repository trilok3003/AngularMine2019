import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLocationServiceComponent } from './angular-location-service.component';

describe('AngularLocationServiceComponent', () => {
  let component: AngularLocationServiceComponent;
  let fixture: ComponentFixture<AngularLocationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLocationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLocationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
